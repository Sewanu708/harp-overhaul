'use client'
import { HelpCircle, Settings, User } from "lucide-react"
import Toggle from "./toggle"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { pageInfo } from "../../../../data"
import Describe from "./page-description"

function Navbar() {
    const pathname = usePathname()


    console.log(pathname)
    return (
        <div className="border-b-gray-300 border-b h-14 bg-primary-bg px-4 flex items-end justify-between">
            {
                pathname === "/dashboard" ?
                    <Toggle /> :
                    <Describe description={pageInfo[pathname]}
                    />
            }

            <div className="flex items-center pb-1">
                <div className="lg:flex border px-4 py-1 rounded-full border-gray-400 items-center justify-center gap-2 bg-white hidden ">
                    <Image src='/ai-technology.png'
                        alt=""
                        width={12}
                        height={12}
                    />
                    <input
                        className="w-full ring-0 outline-0 border-0 placeholder:text-xs text-sm"
                        placeholder="Search anything..."
                        type="text"
                    />
                </div>

                <div className="flex items-center justify-center gap-4 border-x-[1.5px]  border-x-gray-300 px-2 mx-2">

                    <Settings className="w-5 h-5 text-gray-500" />
                    <HelpCircle className="w-5 h-5 text-gray-500" />

                </div>

                <div className="pl-4">
                    <User className="w-5 h-5 text-gray-500" />
                </div>
            </div>

        </div>
    )
}

export default Navbar