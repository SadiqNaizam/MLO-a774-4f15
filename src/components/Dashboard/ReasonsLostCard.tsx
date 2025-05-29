import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ReasonLost {
  id: string;
  percentage: number;
  description: string;
}

const reasonsData: ReasonLost[] = [
  { id: 'proposal', percentage: 40, description: 'The proposal is unclear' },
  { id: 'venture', percentage: 20, description: 'However venture pursuit' },
  { id: 'other', percentage: 10, description: 'Other miscellaneous reasons' }, 
  { id: 'pricing', percentage: 30, description: 'Pricing issues or budget constraints' }, 
];

interface ReasonsLostCardProps {
  className?: string;
}

const ReasonsLostCard: React.FC<ReasonsLostCardProps> = ({ className }) => {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>Reasons of leads lost</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
          {reasonsData.map((reason) => (
            <div key={reason.id}>
              <p className="text-3xl font-bold text-foreground">{reason.percentage}%</p>
              <p className="text-sm text-muted-foreground mt-1">{reason.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ReasonsLostCard;
