function Mails({
    to,
    subject,
    body
}: {
    to: string,
    subject: string,
    body: string
}) {
    return (
        <div className="flex items-center px-3 py-2 gap-3 rounded-lg shadow-xs transition-colors duration-200 cursor-pointer">
            {/* avatar */}
            <div className="flex-shrink-0">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-400 text-white font-bold">
                    SI
                </div>
            </div>

            {/* mail */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <span className="truncate text-sm font-medium text-gray-800">
                     {to}
                </span>
                <span className="truncate text-xs text-gray-600">
                    {body}
                </span>
            </div>

            {/* time */}
            <div className="text-xs text-gray-500 whitespace-nowrap">
                10:15
            </div>
        </div>

    )
}

export default Mails