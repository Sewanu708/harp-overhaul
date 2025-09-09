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
                name: "Email",
                path: "/email",
                icon: Mail,
                children: [
                    { name: "Email Logs", path: "/email/logs", icon: FileText },
                    { name: "Domain", path: "/email/domain", icon: Globe },
                    { name: "Send", path: "/email/send", icon: Send },
                    { name: "Templates", path: "/email/templates", icon: BookOpen },
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


export const pageInfo: Record<string, { title: string; description: string }> = {
    "/email/logs": {
        title: "Email",
        description: "Manage emails, templates, and mail logs.",
    },
    "/email/domain": {
        title: "Domain",
        description: "Manage emails, templates, and mail logs.",
    }, "/email/templates": {
        title: "Template",
        description: "Manage emails, templates, and mail logs.",
    }, "/email/send": {
        title: "Send",
        description: "Manage emails, templates, and mail logs.",
    },
}
