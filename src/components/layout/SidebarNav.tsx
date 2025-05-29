import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import {
  LayoutGrid,
  Users,
  UserCircle,
  FileText,
  Receipt,
  Package,
  Mail as MailIcon,
  Archive,
  CalendarDays,
  HelpCircle,
  Settings as SettingsIcon, // Renamed to avoid potential conflicts
  type LucideIcon
} from 'lucide-react';

interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

const mainNavigationItems: NavItem[] = [
  { href: '/', label: 'Dashboard', icon: LayoutGrid },
  { href: '/leads', label: 'Leads', icon: Users },
  { href: '/customers', label: 'Customers', icon: UserCircle },
];

const secondaryNavigationItems: NavItem[] = [
  { href: '/proposals', label: 'Proposals', icon: FileText },
  { href: '/invoices', label: 'Invoices', icon: Receipt },
  { href: '/items', label: 'Items', icon: Package },
  { href: '/mail', label: 'Mail', icon: MailIcon },
  { href: '/shoebox', label: 'Shoebox', icon: Archive },
  { href: '/calendar', label: 'Calendar', icon: CalendarDays },
];

const bottomNavigationItems: NavItem[] = [
  { href: '/help', label: 'Help', icon: HelpCircle },
  { href: '/settings', label: 'Settings', icon: SettingsIcon },
];

const NavListItem: React.FC<{ item: NavItem }> = ({ item }) => (
  <NavLink
    to={item.href}
    end // Important for root path matching like '/' for Dashboard
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
        isActive
          ? "bg-sidebar-primary text-sidebar-primary-foreground"
          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus:bg-sidebar-accent focus:text-sidebar-accent-foreground focus:outline-none focus:ring-1 focus:ring-sidebar-ring"
      )
    }
  >
    <item.icon className="h-5 w-5 flex-shrink-0" />
    <span className="truncate">{item.label}</span>
  </NavLink>
);

const SidebarNav: React.FC = () => {
  return (
    <aside className="w-60 bg-sidebar text-sidebar-foreground fixed top-0 left-0 h-screen flex flex-col p-4 border-r border-sidebar-border">
      <div className="flex items-center gap-3 mb-6 px-2 pt-1">
        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-primary text-primary-foreground text-base font-semibold">
            LD
          </AvatarFallback>
        </Avatar>
        <span className="text-lg font-semibold text-sidebar-foreground">Leads App</span>
      </div>

      <nav className="flex-1 flex flex-col gap-y-1 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-sidebar-accent scrollbar-track-sidebar">
        {/* Main Navigation */}
        <div className="space-y-1">
          {mainNavigationItems.map((item) => (
            <NavListItem key={item.label} item={item} />
          ))}
        </div>

        <Separator className="my-4 bg-sidebar-border" />

        {/* Secondary Navigation */}
        <div className="space-y-1">
          {secondaryNavigationItems.map((item) => (
            <NavListItem key={item.label} item={item} />
          ))}
        </div>
      </nav>

      {/* Bottom Navigation */}
      <div className="mt-auto pt-4 border-t border-sidebar-border space-y-1">
        {bottomNavigationItems.map((item) => (
          <NavListItem key={item.label} item={item} />
        ))}
      </div>
    </aside>
  );
};

export default SidebarNav;
