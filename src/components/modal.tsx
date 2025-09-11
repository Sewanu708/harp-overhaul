"use client"
import React, { MouseEventHandler, useCallback, useEffect, useRef } from 'react'

function Modal({ children, trigger }: { children: React.ReactNode, trigger: () => void }) {
    const overlay = useRef(null)
    const wrapper = useRef(null)

    const onDismiss = useCallback(() => {
        trigger()
    }, [trigger])

    const onclick: MouseEventHandler = useCallback((e) => {
        if (e.target === overlay.current || e.target === wrapper.current) {
            onDismiss()
        }
    }, [onDismiss, overlay, wrapper])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") onDismiss()
    }, [onDismiss])

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown)
        return () => document.removeEventListener("keydown", onKeyDown)
    }, [onKeyDown])

    return (
        <div className='fixed  flex flex-col bg-black/60  items-center justify-center inset-0 z-90' ref={overlay} onClick={onclick}>

            <div className='relative items-center justify-center flex flex-col gap-4 w-full h-full' ref={wrapper} >
                
                {children}

            </div>

        </div>
    )
}

export default Modal