import Link from "next/link"
import General from "./general"
import Communications from "./communications"
import Settings from "./settings"

function Sidebar() {

 
    return (
        <div className="flex flex-col h-screen border-r-gray-200">
            {/* logo */}
            <div className="px-4 pt-4 pb-1">
                <Link href={'/'}>
                    <img
                        src="/harp.svg"
                        className="w-24"
                        alt="Harp Logo"
                    />
                </Link>
            </div>

            <div className="flex-1 overflow-y-auto">
                {/* general */}
                <div className="mt-4 mb-2 border-b-[1.5px] border-b-gray-200">
                    <div className="text-xs px-4 pt-4 pb-2 font-[400] text-gray-400">
                        GENERAL
                    </div>
                    <General />
                </div>

                {/* communications */}
                <div className="mt-2 mb-2 border-b-gray-200">
                    <div className="text-xs px-4 pt-4 pb-2 font-[400] text-gray-400">
                        COMMUNICATIONS
                    </div>
                    <Communications />
                </div>
            </div>

            {/* settings */}
            <div className="border-t-[1.5px] border-t-gray-200 mb-4">
                <div className="text-xs px-4 pt-4 pb-2 font-[400] text-gray-400">
                    SUPPORT
                </div>
                <Settings />
            </div>
        </div>
    )
}

export default Sidebar
