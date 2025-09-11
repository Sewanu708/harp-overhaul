export type MailPayload = {
    business_id: string,
    status: "pending" | "sent" | "delivered" | "opened" | "clicked" | "bounced" | "failed",
    metadata: {
        variables?: Record<string, string> | null,
        attachments?: Record<string, string | number>[] | null,
        bounces?: {
            reason: string,
            type: string,
        } | null,
        clicks: number,
        opens: number,
    },
    createdAt: string
    updatedAt: string,
    subject: string,
    htmlContent: string,
    textContent: string,
    from: string,
    to: string[],
    cc?: string[],
    bcc?: string[],
    templateId?: string,
    provider: "smtp" | "http",
    trackingId: string,
    scheduledAt?: string,
    sentAt?: string
};


export type Template = {
    options?: Pick<MailPayload, 'metadata'>,
    variables: Record<string, string>,
    to: string[],
    cc?: string[],
    bcc?: string[],
    templateId: string,
}



export type WebhookPayload = {
    url: string,
    secret?: string,
    business_id?: string,
    events: string[],
    status?: "active" | "paused" | "inactive",
    metadata?: Record<string, string | number>,
}

export type Options = {
    method: string,
    headers?: Record<string, string>,
    body?: string | Record<string, string> | MailPayload | Template | WebhookPayload,
    id?: string
}

export type DomainProps = {
    verificationStatus: Record<keyof Verification, boolean>,
    dns_records: Record<keyof RecordProps, string>[]
    domain: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    business_id: string,
    status: string,
    metadata?: Record<string, string>
}

export type Verification = {
    spf: boolean,
    dkim: boolean,
    dmarc: boolean
}


export type RecordProps = {
    key: string,
    domain: string,
    type: string,
    value: string,
    status: string,
    name: string
}