'use client'

import EmailDashboard from "@/components/dashboards/email";
import GeneralOverview from "@/components/dashboards/general";
import PushNotificationDashboard from "@/components/dashboards/pn";
import SmsDashboard from "@/components/dashboards/sms";
import WhatsappDahsboard from "@/components/dashboards/whatsapp";
import { useSearchParams } from "next/navigation"

function Dashboard() {
    const searchParams = useSearchParams()
    const tab = searchParams.get('tab')
    switch (tab) {
        case 'general':
            return <GeneralOverview />;
        case 'sms':
            return <SmsDashboard />;
        case 'pn':
            return <PushNotificationDashboard />;
        case 'whatsapp':
            return <WhatsappDahsboard />;
        case 'email':
            return <EmailDashboard />;
        default:
            return <GeneralOverview />;
    }
}

export default Dashboard