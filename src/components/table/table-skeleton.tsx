import { Skeleton } from "@/components/ui/skeleton"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

interface TableSkeletonProps {
    columns?: number
    rows?: number
    showFilter?: boolean
    showPagination?: boolean
}

export function TableSkeleton({
    columns = 4,
    rows = 5,
    showFilter = true,
    showPagination = true
}: TableSkeletonProps) {
    return (
        <div className="w-full space-y-4">
          
            {showFilter && (
                <div className="flex items-center py-4">
                    <Skeleton className="h-10 w-full max-w-sm" />
                </div>
            )}

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {Array.from({ length: columns }).map((_, index) => (
                                <TableHead key={index} className="h-12">
                                    <Skeleton className="h-4 w-full" />
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Array.from({ length: rows }).map((_, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {Array.from({ length: columns }).map((_, colIndex) => (
                                    <TableCell key={colIndex} className="h-12">
                                        <Skeleton
                                            className={`h-4 ${colIndex === 0 ? 'w-3/4' :
                                                    colIndex === columns - 1 ? 'w-1/2' :
                                                        'w-full'
                                                }`}
                                        />
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

          
            {showPagination && (
                <div className="flex items-center justify-between w-full space-x-2 py-4">
                    <div className="flex items-center space-x-2">
                        <Skeleton className="h-8 w-20" />
                        <Skeleton className="h-8 w-16" />
                    </div>
                    <div className="hidden sm:flex items-center space-x-2">
                        <Skeleton className="h-4 w-32" />
                    </div>
                </div>
            )}
        </div>
    )
}
