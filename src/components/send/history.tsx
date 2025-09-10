import Search from "@/components/search"
import { MoreHorizontal } from "lucide-react"
import Image from "next/image"
import { mails } from "../../../data"
import Mails from "./mails"

function History() {
    return (
        <div className="bg-white rounded-b-md p-2 flex-1 w-full h-full">
            {/* header */}
            <div className="flex items-center  justify-between  w-full">
                <div className="text-gray-800">
                    History
                </div>
                <div className="flex items-center gap-2">
                    <Image src='/bars-filter.svg'
                        alt=""
                        width={12}
                        height={12}
                        className="cursor-pointer"
                    />
                    <MoreHorizontal className="w-5 h-5 cursor-pointer" />
                </div>

            </div>

            {/* search */}
            <div className="mt-4">
                <Search
                    placeholder="Search..."
                />
            </div>


            {/* mails */}
            <div className="mt-8">
                {
                    mails.map(m => (
                        <div className="border-b border-b-primary-bg mb-3" key={m.body}>
                            <Mails
                                to={m.to}
                                body={m.body}
                                subject={m.subject}
                            />
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default History