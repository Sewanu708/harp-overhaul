import { MailPayload, Options, Template, WebhookPayload } from "@/@types"

class MailEndPoints {
    #baseurl = process.env.NEXT_PUBLIC_CLIENT
    #defaultHeaders = {
        'Content-Type': 'application/json',
    }

    async #request(url: string, options: Options) {
        const { method = 'GET', headers = {}, body, id = '' } = options

        const cctURL = this.#baseurl ? `${this.#baseurl}/${url}` : `/api/proxy/${url}`


        const config: RequestInit = {
            method,
            headers: {
                ...headers,
                ...this.#defaultHeaders,
                id
            },
            // signal: AbortSignal.timeout(10000)
        }

        if (body) config.body = typeof body === 'string' ? body : JSON.stringify(body)

        try {
            const response = await fetch(cctURL, config)
            const data = await response.json()
            if (!data.success) throw new Error(data.error?.message)
            return data

        } catch (error) {
            console.error(error)
            return {
                success: false,
                error: error instanceof Error ?
                    error.message : 'Network Error'
            }
        }
    }

    async getDomain(auth: string) {
        return this.#request('?action=domain', {
            method: 'GET',
            headers: {
                Authorization: auth
            }
        })
    }

    async addDomain(input: string, auth: string) {
        return this.#request('?action=domain', {
            method: 'POST',
            headers: {
                Authorization: auth
            },
            body: {
                name: input
            }
        })
    }

    async getDomainById(id: string, auth: string) {
        return this.#request('?action=get-domain', {
            method: 'GET',
            headers: {
                Authorization: auth
            },
            id
        })
    }

    async verifyDomain(id: string, auth: string) {
        return this.#request('?action=verify', {
            method: 'POST',
            headers: {
                Authorization: auth
            },
            body: {

            },
            id
        })
    }

    async deleteDomain(domainId: string, auth: string) {
        return this.#request('?action=get-domain', {
            method: 'DELETE',
            headers: {
                Authorization: auth
            },
            id: domainId
        })
    }

    async getKeys(domainid: string, auth: string) {
        return this.#request('?action=get-keys', {
            method: 'GET',
            headers: {
                Authorization: auth
            },
            id: domainid
        })
    }

    async createKey(domainid: string, name: string, auth: string) {
        return this.#request('?action=create-key', {
            method: 'POST',
            headers: {
                Authorization: auth
            },
            body: {
                name
            },
            id: domainid
        })
    }

    async findKey(keyId: string, auth: string) {
        return this.#request('?action=get-key', {
            method: 'GET',
            headers: {
                Authorization: auth
            },
            id: keyId
        })
    }

    async deleteKey(keyId: string, auth: string) {
        return this.#request('?action=delete-key', {
            method: 'DELETE',
            headers: {
                Authorization: auth
            },
            id: keyId
        })
    }

    async sendMail(payload: MailPayload) {
        return this.#request('?action=mail', {
            method: 'POST',
            body: {
                ...payload
            }
        })
    }

    async getMail() {
        return this.#request('?action=mail', {
            method: 'GET'
        })
    }

    async getMailById(emailId: string) {
        return this.#request('?action=get-mail', {
            method: 'GET',
            id: emailId
        })
    }

    async getMailTracking(emailId: string) {
        return this.#request('?action=get-mail-tracking', {
            method: 'GET',
            id: emailId
        })
    }

    async sendWithTemplate(payload: Template) {
        return this.#request('?action=send-with-template', {
            method: 'POST',
            body: {
                ...payload
            }
        })
    }

    // async sendWithTemplate(payload: Template) {
    //     return this.#request('?action=get-mail-tracking', {
    //         method: 'POST',
    //         body:{
    //             ...payload
    //         }
    //     })
    // }

    async createWebhook(payload: WebhookPayload, auth: string) {
        return this.#request('?action=webhook', {
            method: 'POST',
            body: {
                ...payload
            },
            headers: {
                Authorization: auth
            }
        })
    }

    async getWebhooks(auth: string) {
        return this.#request('?action=webhook', {
            method: 'GET',
            headers: {
                Authorization: auth
            },
        })
    }

    async getWebhookbyId(auth: string, hookId: string) {
        return this.#request('?action=hook-by-id', {
            method: 'GET',
            headers: {
                Authorization: auth
            },
            id: hookId
        })
    }

    async updateWebhook(auth: string, hookId: string) {
        return this.#request('?action=hook-by-id', {
            method: 'GET',
            headers: {
                Authorization: auth
            },
            id: hookId
        })
    }

    async deleteWebhookbyId(auth: string, hookId: string) {
        return this.#request('?action=hook-by-id', {
            method: 'GET',
            headers: {
                Authorization: auth
            },
            id: hookId
        })
    }

    async verifyWebhook(auth: string, hookId: string) {
        return this.#request('?action=verify-hook', {
            method: 'GET',
            headers: {
                Authorization: auth
            },
            id: hookId
        })
    }

    async listenToEvent(auth: string, hookId: string) {
        return this.#request('listen', {
            method: 'GET',
            headers: {
                Authorization: auth
            },
            id: hookId
        })
    }
}

export const apiClient = new MailEndPoints()