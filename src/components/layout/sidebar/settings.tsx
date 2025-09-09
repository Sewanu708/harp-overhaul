import Link from "next/link"
import { routeData } from "../../../../data"

function Settings() {
  return (
    <div className=" flex flex-col gap-1">

            {
                routeData[2].items.map(g => (
                    <Link
                        className="flex items-center justify-start gap-3 mx-2 px-2 rounded-sm py-2 hover:bg-white hover:shadow-sm text-gray-700 group"
                        href={g.path}
                        key={g.name}
                    >
                        <g.icon
                            className="h-5 w-5 group-hover:text-primary"
                        />
                        <span
                            className="text-sm  group-hover:font-semibold group-hover:text-primary">
                            {g.name}
                        </span>
                    </Link>
                ))
            }

        </div>
  )
}

export default Settings