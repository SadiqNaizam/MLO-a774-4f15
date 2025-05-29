import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface OtherDataItem {
  id: string;
  value: string;
  label: string;
  tooltip?: string;
}

const otherData: OtherDataItem[] = [
  { id: 'totalLeads', value: '900', label: 'total leads count' },
  { id: 'avgConversionTime', value: '12', label: 'days in average to convert lead' },
  { id: 'inactiveLeads', value: '30', label: 'inactive leads', tooltip: 'Leads with no activity in the last 30 days' },
];

interface OtherDataCardProps {
  className?: string;
}

const OtherDataCard: React.FC<OtherDataCardProps> = ({ className }) => {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>Other data</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-6 text-center sm:text-left">
          {otherData.map((item) => (
            <div key={item.id}>
              <p className="text-3xl font-bold text-foreground">{item.value}</p>
              <p className="text-sm text-muted-foreground mt-1 flex items-center justify-center sm:justify-start">
                {item.label}
                {item.tooltip && (
                  <TooltipProvider>
                    <Tooltip delayDuration={0}>
                      <TooltipTrigger asChild>
                        <Info className="ml-1.5 h-3.5 w-3.5 text-gray-400 cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <p>{item.tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default OtherDataCard;
