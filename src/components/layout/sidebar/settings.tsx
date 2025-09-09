'use client'
import Link from "next/link"
import { routeData } from "../../../../data"
import { usePathname } from "next/navigation"

function Settings() {
    const pathname = usePathname()

    return (
        <div className=" flex flex-col gap-1">

            {
                routeData[2].items.map(g => {
                    const isActive = pathname === g.path
                    return (
                        <Link
                            className={`flex items-center justify-start gap-3 mx-2 px-2 rounded-sm py-2 hover:bg-white hover:shadow-sm text-gray-700 group ${isActive && "bg-white shadow-sm"}`}
                            href={g.path}
                            key={g.name}
                        >
                            <g.icon
                                className={`h-5 w-5 group-hover:text-primary ${isActive && 'text-primary'}`}
                            />
                            <span
                                className={`text-sm  group-hover:font-semibold group-hover:text-primary ${isActive && 'text-primary font-semibold'}`}>
                                {g.name}
                            </span>
                        </Link>
                    )
                })
            }

        </div>
    )
}

export default Settings