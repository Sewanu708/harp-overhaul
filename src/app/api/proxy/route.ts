import { NextRequest, NextResponse } from "next/server"
import { generalError, invalidAction, undefinedAction } from "./errors"
import axios from "axios"

const BASE_URL = process.env.HARP_BASE
export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const action = searchParams.get('action')
    if (!action) return undefinedAction()
    const authCode = req.headers.get('Authorization')

    if (!endpointMapper(action)) return invalidAction()
    const id = req.headers.get('id')
    const cctURL = (id && id?.length > 0) ?
        `${BASE_URL}${endpointMapper(action, id)}` :
        `${BASE_URL}${endpointMapper(action)}`

    try {
        const response = await axios.get(cctURL, {
            headers: {
                Authorization: authCode ?? ''
            }
        })
        const result = await response.data
        return NextResponse.json({
            data: result,
            success: true
        })
    } catch (error) {
        console.error(error)
        return generalError(error instanceof Error ?
            error?.message :
            'Error fetching data'
        )
    }
}


export async function POST(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const action = searchParams.get('action')
    const body = await req.json()

    if (!action) return undefinedAction()

    if (!endpointMapper(action)) return invalidAction()
    const id = req.headers.get('id')
    const cctURL = (id && id?.length > 0) ?
        `${BASE_URL}${endpointMapper(action, id)}` :
        `${BASE_URL}${endpointMapper(action)}`

    try {
        const response = await axios.post(cctURL, body, {
            headers: {
                Authorization: req.headers.get('Authorization') ?? ''
            }
        })

        const result = await response.data
        return NextResponse.json({
            data: result,
            success: true
        })
    } catch (error) {
        console.error(error)
        return generalError(error instanceof Error ? error?.message : 'Error fetching data')
    }
}


export async function DELETE(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const action = searchParams.get('action')

    if (!action) return undefinedAction()

    if (!endpointMapper(action)) return invalidAction()
    const id = req.headers.get('id')
    const cctURL = (id && id?.length > 0) ?
        `${BASE_URL}${endpointMapper(action, id)}` :
        `${BASE_URL}${endpointMapper(action)}`

    try {
        const response = await axios.delete(cctURL, {
            headers: {
                Authorization: req.headers.get('Authorization') ?? ''
            }
        })

        const result = await response.data
        return NextResponse.json({
            data: result,
            success: true
        })
    } catch (error) {
        console.error(error)
        return generalError(error instanceof Error ? error?.message : 'Error fetching data')
    }
}


function endpointMapper(action: string, id?: string,) {
    const actionsMap: Record<string, string> = {
        domain: '/emails/domains',
        'get-domain': `/emails/domains/${id}`,
        'verify': `/emails/domains/${id}/verify`,
        'create-key': `/emails/keys/${id}`,
        'get-keys': `/emails/keys/${id}`,
        'get-key': `/emails/keys/find/${id}`,
        'delete-key': `/emails/keys/${id}`,
        'mail':'/emails/sending',
        'get-mail':`/emails/sending/${id}`,
        'get-mail-tracking':`/emails/sending/${id}/tracking`,
        'send-with-template':'/emails/sending/template',
        'webhook':'/emails/webhooks',
        'hook-by-id':`/emails/webhooks/${id}`,
        'verify-hook':`/emails/webhooks/${id}/verify`,
        'listen':'/emails/webhooks/listen'
    }
    const endpoint = actionsMap[action]
    return endpoint
}