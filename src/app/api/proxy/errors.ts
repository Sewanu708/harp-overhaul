import { NextResponse } from "next/server"

export const undefinedAction = () => {
    return NextResponse.json({
        success: false,
        error: {
            message: 'Action not defined'
        }
    })
}

export const invalidAction = () => {
    return NextResponse.json({
        success: false,
        error: {
            message: 'Action not defined'
        }
    })
}

export const generalError = (error:string) => {
    return NextResponse.json({
        success: false,
        error: {
            message: error
        }
    })
}