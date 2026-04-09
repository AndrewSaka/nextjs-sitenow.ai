import {
  FileText,
  Users,
  Youtube,
  Twitter,
  Rocket,
  BookOpen,
  HelpCircle,
  ArrowRightLeft,
  Globe,
  BarChart3,
  Mail,
  MessageSquare,
  Maximize,
  Pencil,
  Image as ImageIcon,
  History,
  Copy,
  Shield,
  Database,
  Link2,
  Brain,
  Lock,
  CreditCard,
  Search,
  ImagePlus,
  Mic,
  User,
  Receipt,
  Gauge,
  Lightbulb,
  Play,
  AlertTriangle,
  LogIn,
  FileX,
  XCircle,
  Megaphone,
  Bug,
} from "lucide-react";

const sidebarSections = [
  {
    label: "Documentation",
    items: [
      { title: "Community", icon: Users },
      { title: "YouTube", icon: Youtube },
      { title: "Twitter", icon: Twitter },
    ],
  },
  {
    label: "Get Started",
    items: [
      { title: "Welcome", icon: BookOpen, active: true },
      { title: "Getting Started with sitenow.ai", icon: Rocket },
      { title: "FAQ", icon: HelpCircle },
      { title: "Migrating older apps", icon: ArrowRightLeft },
    ],
  },
  {
    label: "Basics",
    items: [
      { title: "Deploy your website", icon: Globe },
      { title: "Analytics", icon: BarChart3 },
      { title: "Email", icon: Mail },
      { title: "Discuss Mode", icon: MessageSquare },
      { title: "Max Mode", icon: Maximize },
      { title: "Direct Edit Mode", icon: Pencil },
      { title: "Using Images and Assets", icon: ImageIcon },
      { title: "Version History", icon: History },
      { title: "Duplicating Apps", icon: Copy },
    ],
  },
  {
    label: "Backend & APIs",
    items: [
      { title: "Authentication", icon: Shield },
      { title: "Databases", icon: Database },
      { title: "Custom Domains", icon: Link2 },
      { title: "Custom Knowledge", icon: Brain },
      { title: "Custom Login Options & Branding", icon: Lock },
    ],
  },
  {
    label: "Integrations",
    items: [
      { title: "Accepting Payments", icon: CreditCard },
      { title: "Scraping Data", icon: Search },
      { title: "Generating Images", icon: ImagePlus },
      { title: "Using Voice AI", icon: Mic },
    ],
  },
  {
    label: "Account & Billing",
    items: [
      { title: "Account & Subscriptions", icon: User },
      { title: "Billing", icon: Receipt },
      { title: "Credit and App Size Limits", icon: Gauge },
    ],
  },
  {
    label: "Guides & Tutorials",
    items: [
      { title: "From Idea to Live Website", icon: Lightbulb },
      { title: "Prompting Best Practices", icon: FileText },
      { title: "Video Tutorials", icon: Play },
    ],
  },
  {
    label: "Troubleshooting",
    items: [
      { title: "Troubleshooting Errors", icon: AlertTriangle },
      { title: "Troubleshooting Login", icon: LogIn },
      { title: "Blank Page or Missing Images", icon: FileX },
      { title: "Remove the Watermark", icon: XCircle },
    ],
  },
  {
    label: "Community & Support",
    items: [
      { title: "Community & News", icon: Megaphone },
      { title: "Bugs & Feature requests", icon: Bug },
    ],
  },
];

export function LearnSidebar() {
  return (
    <aside className="hidden md:block w-64 shrink-0 border-r border-border">
      <nav className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-8 pr-4 pl-2">
        {sidebarSections.map((section) => (
          <div key={section.label} className="mb-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 px-3">
              {section.label}
            </h3>
            <ul className="space-y-0.5">
              {section.items.map((item) => (
                <li key={item.title}>
                  <button
                    type="button"
                    className={`w-full flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-sm transition-colors ${
                      "active" in item && item.active
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <item.icon className="h-4 w-4 shrink-0" />
                    <span className="truncate">{item.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
