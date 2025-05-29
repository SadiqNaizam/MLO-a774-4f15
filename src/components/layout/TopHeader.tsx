import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, PlusCircle, UserPlus, Briefcase, FilePlus } from 'lucide-react';

interface TopHeaderProps {
  title?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ title = "Dashboard Overview - Leads" }) => {
  return (
    <header className={cn(
      "fixed top-0 left-60 right-0 z-10 h-16",
      "flex items-center justify-between px-6",
      "bg-card border-b border-border shadow-sm"
    )}>
      <h1 className="text-xl font-semibold text-foreground truncate">{title}</h1>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="default"> {/* Uses primary color by default */}
            Create
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <PlusCircle className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>New Lead</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <UserPlus className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>New Contact</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>New Deal / Opportunity</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FilePlus className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>New Document</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default TopHeader;
