'use client'
import { DomainProps } from "@/@types"
import { apiClient } from "@/lib/api-client"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import Modal from "../modal"
import { useSearchParams } from "next/navigation"
import { DataTable } from "../table/data-table"
import { TableSkeleton } from "../table/table-skeleton"
import { useColumns } from "../table/colums/add-domain"

function AddDomain() {
    const params = useSearchParams()
    const isOpen = params.get('open')
    const [data, setData] = useState<DomainProps[]>([])
    const [loading, setLoading] = useState(true)
    const columns = useColumns()
    useEffect(() => {
        getData()
    }, [])

    const modalTrigger = () => {
        const url = new URL(location.href)
        url.searchParams.delete('open')
        history.pushState(null, '', url.toString())
    }

    const getData = async () => {
        const auth = localStorage.getItem('auth') as string
        try {
            setLoading(true)
            if (!auth) {
                throw new Error("Error fetching data");
            }
            if (!isOpen) return;
            const response = await apiClient.getDomain('ae0d9e75430a7f5a9992df7fab7d4922.e78e321d9c5310d39f5ab1f4a86f2872522f2572fc196753ed7a4785a95e79cec83ba86441d7a8e2b46335862118f83e.149e40867da786c54e995294f00b3a148ecb444dcacd85b0b9ccd72ad13f2e98')
            if (!response.success) {
                console.log(response)
                throw new Error(response.error)

            };
            const d = await response.data
            setData(d)

        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Error fetching data')
        } finally {
            setLoading(false)
        }
    }


    const verifiedDomains = data?.filter(domain => domain.status == 'verified')

    return (
        <div>
            <Modal trigger={modalTrigger}>
                <div className="bg-white w-2/3 h-2/3 p-4">
                    {
                        loading ? <TableSkeleton /> : <DataTable
                            filterkey="domain"
                            columns={columns}
                            data={verifiedDomains}
                        />
                    }
                </div>

            </Modal>

        </div>
    )
}

export default AddDomain