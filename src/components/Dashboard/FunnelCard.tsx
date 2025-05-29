import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FunnelStage {
  id: string;
  name: string;
  leads: number;
  value: number;
  avgTime?: string;
  color: string;
  showTooltip?: boolean;
}

const funnelData: FunnelStage[] = [
  { id: 'discovery', name: 'Discovery', leads: 200, value: 200, avgTime: '2 days', color: 'bg-red-500' },
  { id: 'qualified', name: 'Qualified', leads: 100, value: 100, avgTime: '2 days', color: 'bg-yellow-500', showTooltip: true },
  { id: 'inConversation', name: 'In conversation', leads: 50, value: 100, avgTime: '5 days', color: 'bg-indigo-500' },
  { id: 'negotiations', name: 'Negotiations', leads: 20, value: 50, avgTime: '8 days', color: 'bg-green-500' },
  { id: 'closedWon', name: 'Closed won', leads: 20, value: 50, avgTime: '10 days', color: 'bg-purple-500' },
];

const totalActiveLeads = funnelData.reduce((sum, stage) => sum + stage.leads, 0);

interface FunnelCardProps {
  className?: string;
}

const FunnelCard: React.FC<FunnelCardProps> = ({ className }) => {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>Funnel count</CardTitle>
        <div className="text-3xl font-bold mt-1">{totalActiveLeads} <span className="text-base font-normal text-muted-foreground">active leads</span></div>
      </CardHeader>
      <CardContent>
        <div className="w-full h-3 rounded-full flex overflow-hidden mb-6">
          {funnelData.map(stage => (
            <div 
              key={stage.id} 
              className={cn(stage.color, "h-full")}
              style={{ width: `${(stage.leads / totalActiveLeads) * 100}%` }}
            />
          ))}
        </div>
        <ul className="space-y-3">
          {funnelData.map((stage) => (
            <li key={stage.id} className="grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-x-3 text-sm">
              <div className={cn("w-3 h-3 rounded-sm", stage.color)}></div>
              <span className="text-foreground truncate">{stage.name}</span>
              <span className="text-muted-foreground font-medium text-right">{stage.leads}</span>
              <span className="text-muted-foreground text-right">${stage.value}</span>
              <div className="text-muted-foreground text-right min-w-[50px]">
                {stage.avgTime}
                {stage.showTooltip && (
                  <TooltipProvider>
                    <Tooltip delayDuration={0}>
                      <TooltipTrigger asChild>
                        <Info className="inline-block h-3 w-3 ml-1 text-gray-400 cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <p>Average time on this stage</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FunnelCard;
