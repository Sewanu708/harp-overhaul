function Describe({
    description
}: {
    description: Record<string, string>
}) {
    return (
        <div>
            <h2 className="text-primary font-semibold">{description?.title}</h2>
            <span className="text-xs">{description?.description}</span>
        </div>
    )
}

export default Describe