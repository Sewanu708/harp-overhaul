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


export const mails = [
  {
    to: "john.doe@example.com",
    subject: "Welcome to Our Platform 🎉",
    body: "Hi John,\n\nThank you for signing up! We're excited to have you on board. Let us know if you have any questions.\n\nBest,\nThe Team"
  },
  {
    to: "jane.smith@example.com",
    subject: "Meeting Reminder 📅",
    body: "Hi Jane,\n\nThis is a reminder for our scheduled meeting tomorrow at 10:00 AM. Please be prepared with your project updates.\n\nThanks,\nProject Coordinator"
  },
  {
    to: "michael.brown@example.com",
    subject: "Invoice #4521 Due",
    body: "Dear Michael,\n\nThis is a friendly reminder that your invoice #4521 is due on September 15th. Kindly make the payment to avoid late fees.\n\nRegards,\nAccounts Department"
  },
  {
    to: "emily.jones@example.com",
    subject: "Your Order Has Shipped 🚚",
    body: "Hi Emily,\n\nGreat news! Your order #98765 has been shipped and is on its way. You can track it using the link provided in your dashboard.\n\nCheers,\nCustomer Support"
  },
  {
    to: "david.wilson@example.com",
    subject: "Password Reset Request 🔑",
    body: "Hello David,\n\nWe received a request to reset your password. Click the link below to set a new password. If you didn’t request this, please ignore this email.\n\nThanks,\nSecurity Team"
  }
];
