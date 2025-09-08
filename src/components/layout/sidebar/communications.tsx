import { ChevronDown } from "lucide-react"
import { routeData } from "../../../../data"
function Communications() {
    return (
        <div className=" flex flex-col gap-1">

            {
                routeData[1].items.map(g => (
                    <div
                        className="flex items-center justify-start gap-3 mx-2 px-2 rounded-sm py-2 hover:bg-white hover:shadow-sm text-gray-700 group"
                        key={g.name}
                    >
                        <g.icon
                            className="h-5 w-5 group-hover:text-primart"
                        />
                        <span
                            className="text-sm  group-hover:font-semibold group-hover:text-primary">
                            {g.name}
                        </span>
                        <ChevronDown
                            className={`text-sm lg:block hidden text-gray-500 ${isOpen && 'rotate-180'}`}
                            width={20}
                            height={20}
                        />
                    </div>
                ))
            }

        </div>
    )
}

export default Communications