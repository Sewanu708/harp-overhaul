"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    SortingState,
    ColumnFiltersState,
    getFilteredRowModel,
    useReactTable,
    getPaginationRowModel,
    getSortedRowModel,
} from "@tanstack/react-table"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { useState } from "react"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[],
    filterkey?: string,
    paginate?: boolean
}

export function DataTable<TData, TValue>({
    columns,
    data,
    filterkey, paginate
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
        []
    )
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel()
        , onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting, columnFilters,
        },
    })

    return (

        <div className="w-full">
            {
                filterkey ? <div className="flex items-center py-4">
                    <Input
                        placeholder={`Filter by ${filterkey}`}
                        value={(table.getColumn(filterkey)?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn(filterkey)?.setFilterValue(event.target.value)
                        }
                        className="w-full max-w-sm "
                    />

                </div> : ''
            }
            <div className="rounded-md border">
                <Table>
                    <TableHeader className="">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id} className="">
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id} className="">
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-2xl font-semibold text-zinc-600 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            {
                !paginate ? <div className="flex items-center justify-between w-full  py-4">
                    <div className="space-x-2 flex items-center">
                        <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 "
                          
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            Previous
                        </button>

                        <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 "
                            disabled={!table.getCanNextPage()}
                            onClick={() => table.nextPage()}>
                            Next
                        </button>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <span>
                            Page {table.getState().pagination.pageIndex + 1} of{" "}
                            {table.getPageCount()}
                        </span>
                        <span className="hidden sm:inline">
                            ({table.getFilteredRowModel().rows.length} total rows)
                        </span>
                    </div>
                </div> : ''
            }

        </div>

    )
}