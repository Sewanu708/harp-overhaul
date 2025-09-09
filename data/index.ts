import {
    PlayCircle,
    LayoutDashboard,
    Mail,
    MessageSquare,
    Bell,
    MessageCircle,
    FileText,
    Globe,
    Send,
    BookOpen,
    Webhook,
    User,
    KeyRound,
    CreditCard,
    Users,
    Settings
} from "lucide-react";

export type Props = {
    mail: boolean,
    sms: boolean,
    pn: boolean,
    ws: boolean
}
type RouteItem = {
    name: string;
    path: string;
    icon: React.ElementType;
    children?: RouteItem[];
    control?: keyof Props
};

type RouteSection = {
    header: string;
    items: RouteItem[];
};

export const routeData: RouteSection[] = [
    {
        header: "General",
        items: [
            { name: "Get Started", path: "/", icon: PlayCircle },
            { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
        ],
    },
    {
        header: "Messaging",
        items: [
            {
                name: "Mail",
                path: "/mail",
                icon: Mail,
                children: [
                    { name: "Mail Logs", path: "/mail/logs", icon: FileText },
                    { name: "Domain", path: "/mail/domain", icon: Globe },
                    { name: "Send", path: "/mail/send", icon: Send },
                    { name: "Templates", path: "/mail/templates", icon: BookOpen },
                ],
                control: 'mail'
            },
            { name: "SMS", path: "/sms", icon: MessageSquare, control: 'sms' },
            { name: "Push Notifications", path: "/push", icon: Bell, control: 'pn' },
            { name: "WhatsApp", path: "/whatsapp", icon: MessageCircle, control: 'ws' },
            { name: "Webhooks", path: "/webhooks", icon: Webhook },
        ],
    },
    {
        header: "Settings",
        items: [
            { name: "Settings", path: "/settings", icon: Settings },
            { name: "Billing", path: "/settings/billing", icon: CreditCard },
        ],
    },
];

export const dashboardRoute = [
    'general',
    'email',
    'sms',
    'pn',
    'whatsapp'
]

