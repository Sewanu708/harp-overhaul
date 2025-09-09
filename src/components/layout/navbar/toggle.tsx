'use client'
import React from 'react'
import { dashboardRoute } from '../../../../data'
import { useSearchParams } from 'next/navigation'


function Toggle() {
    const params = useSearchParams()
    const tab = params.get('tab')

    const handleTabSwitch = (key: string) => {
        history.pushState(null, '', `?tab=${key}`)
    }

    return (
        <div className='pt-2 flex items-end gap-4 justify-center'>
            {
                dashboardRoute.map(d => (
                    <div
                        key={d}
                        className={`pb-1 capitalize px-2 font-[500] cursor-pointer text-sm
                         ${(tab == d) || (tab == null && d == 'general') ?
                                'border-b-[1.5px] border-b-primary  text-primary' :
                                'text-gray-500'}`}
                        onClick={() => handleTabSwitch(d)}
                    >
                        {d == 'pn' ?
                            'push notification' :
                            d == 'sms' ?
                                'SMS' : d
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Toggle