import Navbar from "@/components/layout/navbar";
import Sidebar from "@/components/layout/sidebar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="flex h-screen w-full ">
        <div className="w-1/6 bg-[#F7F9F9]  text-7xl ">
            <Sidebar />
        </div>

        <div className="w-5/6 flex flex-col">
            <div className="w-full ">
                <Navbar />
            </div>

            <div className="flex-1 flex flex-col">
                {children}
            </div>


        </div>
    </div>


}
