import Sidebar from "@/components/layout/sidebar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="flex h-screen w-full ">
        <div className="w-1/6 bg-[#F7F9F9]  text-7xl">
            <Sidebar />
        </div>

        <div className="w-5/7">

        </div>
    </div>


}
