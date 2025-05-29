import React from 'react';
import SidebarNav from './SidebarNav';
import TopHeader from './TopHeader';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  pageTitle?: string; 
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, pageTitle }) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <SidebarNav />
      
      <div className="flex-1 flex flex-col pl-60"> {/* Offset for the fixed sidebar (w-60) */}
        <TopHeader title={pageTitle} />
        
        <main className="flex-1 overflow-y-auto pt-16"> {/* Offset for the fixed header (h-16) */}
          {/* Inner container for padding and content flow, as per mainContent requirements */}
          <div className="p-6">
            <div className="flex flex-col gap-6">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainAppLayout;
