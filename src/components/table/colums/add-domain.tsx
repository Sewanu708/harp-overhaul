"use client"

import { DomainProps } from "@/@types";
import useDomain from "@/store/domain";
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react";


export function useColumns() {
    const saveSendingDomain = useDomain(state => state.setSendingDomain)

    const columns: ColumnDef<DomainProps>[] = [
        {
            accessorKey: 'id', header: ({ column }) => {
                return (
                    <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 "
                        onClick={() =>
                            column.toggleSorting(
                                column.getIsSorted() === "asc"
                            )}
                    >
                        id
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </button>
                )
            },
        },
        { header: 'Domain', accessorKey: 'domain' },
        { header: 'Status', accessorKey: 'status' },
        {
            header: 'Created At', accessorKey: 'createdAt'
        }, {
            id: "actions",
            cell: ({ row }) => {
                const data = row.original
                return (

                    <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 "
                        onClick={() => {
                            saveSendingDomain(

                                data.domain,
                            )
                        }
                        }
                    >
                        Add
                    </button>

                )
            },
        },
    ];
    return columns
}