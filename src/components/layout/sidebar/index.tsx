import Image from "next/image"
import Link from "next/link"
import General from "./general"
import Communications from "./communications"

function Sidebar() {
    return (
        <div className="">
            {/* logo */}
            <div className=" px-4 pt-4 pb-1 ">
                <Link href={'/'}>
                    <img
                        src="/harp.svg"
                        className={`w-24 `}
                    />
                </Link>

            </div>


            {/* general */}

            <div className="mt-4 mb-2 border-b-[1.5px] border-b-gray-200">
                <div className="text-xs px-4 pt-4 pb-2 font-[400] text-gray-400">
                    GENERAL
                </div>

                <General />

            </div>


            {/* communications */}
            <div className="mt-2 mb-2 border-b-[1.5px] border-b-gray-200">
                <div className="text-xs px-4 pt-4 pb-2 font-[400] text-gray-400">
                    COMMUNICATIONS
                </div>

                <Communications />

            </div>

            {/* others */}

        </div>
    )
}

export default Sidebar