'use client'
import { ChevronDown } from "lucide-react"
import { Props, routeData } from "../../../../data"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

function Communications() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState<Props>({
        mail: false,
        sms: false,
        pn: false,
        ws: false
    })

    const handleClose = (section: keyof Props) => {
        setIsOpen(prev => {
            const ne: Props = { ...prev }

            Object.keys(ne).forEach(element => {
                ne[element as keyof Props] = false
            });

            ne[section] = !prev[section]
            return ne
        })
    }

    return (
        <div className=" flex flex-col gap-1">

            {
                routeData[1].items.map(g => {
                    const isActive = pathname.includes(g.path)
                    return (
                        <div
                            key={g.name}
                        >
                            <div className="flex items-center justify-between mx-2 px-2 rounded-sm py-2 hover:bg-white hover:shadow-sm text-gray-700 group" onClick={() => g.control && handleClose(g.control)}>
                                <div className="flex items-center justify-start  gap-3">
                                    <g.icon
                                        className={`h-5 w-5 group-hover:text-primary ${isActive && 'text-primary'}`}
                                    />
                                    <span
                                        className={`text-sm  group-hover:font-semibold group-hover:text-primary ${isActive && 'text-primary font-semibold'}`}>
                                        {g.name}
                                    </span>

                                </div>
                                {
                                    g?.control &&
                                    <ChevronDown
                                        className={`text-sm lg:block hidden text-gray-500 ${isOpen[g.control] ? 'rotate-180' : ''}`}
                                        width={20}
                                        height={20}
                                    />
                                }

                            </div>

                            {/* children */}
                            {
                                g?.control ? isOpen[g.control] && <div className="pl-6 pr-4">
                                    {

                                        g.children?.map(c => {
                                            const isActiveChild = pathname === c.path
                                            return <Link
                                                href={c.path}
                                                key={c.name}
                                                className="lg:flex hidden items-center justify-center lg:justify-start text-gray-500 py-2 gap-4 px-4 md:px-2 rounded-md hover:text-primary group:"
                                            >
                                                <c.icon
                                                    className={`h-4 w-4 group-hover:text-primary ${isActiveChild && 'text-primary'}`}
                                                />
                                                <span className={`text-[13px]  group-hover:font-semibold group-hover:text-primary ${isActiveChild && 'text-primary font-semibold'}`}>
                                                    {c.name}
                                                </span>
                                            </Link>
                                        })
                                    }
                                </div> : ''
                            }



                        </div>
                    )
                })
            }

        </div>
    )
}

export default Communications