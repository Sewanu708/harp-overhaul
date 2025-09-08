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
  Webhook 
} from "lucide-react";

type RouteItem = {
  name: string;
  path: string;
  icon: React.ElementType;
  children?: RouteItem[]; // 👈 supports nested items
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
      },
      { name: "SMS", path: "/sms", icon: MessageSquare },
      { name: "Push Notifications", path: "/push", icon: Bell },
      { name: "WhatsApp", path: "/whatsapp", icon: MessageCircle },
      { name: "Webhooks", path: "/webhooks", icon: Webhook }, // ✅ shared across channels
    ],
  },
];
