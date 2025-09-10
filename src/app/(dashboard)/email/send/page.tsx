import React from 'react'
import History from '../../../../components/send/history'
import Editor from '@/components/send/editor'
import { X } from 'lucide-react'

function Send() {
    return (

        <div className='flex gap-2 bg-primary-bg flex-1'>
            <div className='flex flex-col ml-2  w-[30%]'>
                <History />
            </div>

            <div className="flex flex-col  mr-2 w-full">

                <div className='w-full bg-white mb-1 rounded-b-md px-2 py-2 flex items-center justify-end gap-2'>

                    <button className="px-2 py-1 bg-primary cursor-pointer text-white font-medium rounded-md text-sm shadow-md hover:bg-primary hover:scale-95 hover:opacity-95 transition-all duration-200">
                        Select Template
                    </button>

                    <div className='flex rounded-md border-primary border w-64 px-2 items-center justify-start'>
                        <span className='text-sm pr-2 border-r border-r-gray-400'>
                            Domain
                        </span>

                        <p className='text-sm pl-2 flex items-center justify-between flex-1'>
                            harp.io
                            <span>
                                <X
                                    className='w-4 h-4 cursor-pointer'
                                />
                            </span>
                        </p>

                    </div>


                    <div>

                    </div>

                </div>


                <Editor />
            </div>
        </div>
    )
}

export default Send


// // select domain to continue
// <div className="flex flex-col items-center justify-center h-full bg-gray-50">
//             <div className="text-xl font-semibold text-gray-800 mb-6 text-center">
//                 Select domain to continue
//             </div>
//             <div>
//                 <button className="px-6 py-3 bg-primary cursor-pointer text-white font-medium rounded-2xl shadow-md hover:bg-primary hover:scale-95 hover:opacity-95 transition-all duration-200">
//                     Select Domain
//                 </button>
//             </div>
// </div>
// history and editor

