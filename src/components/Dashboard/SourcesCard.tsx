import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PieChart as LucidePieChart, CalendarDays } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import { cn } from '@/lib/utils';

interface SourceDataPoint {
  name: string;
  leadsCame: number;
  leadsConverted: number;
  totalDealSize: number;
  color: string;
}

const sourcesData: SourceDataPoint[] = [
  { name: 'Clutch', leadsCame: 150, leadsConverted: 75, totalDealSize: 3000, color: '#F87171' }, // red-400
  { name: 'Behance', leadsCame: 120, leadsConverted: 48, totalDealSize: 1000, color: '#FBBF24' }, // amber-400
  { name: 'Instagram', leadsCame: 90, leadsConverted: 9, totalDealSize: 1000, color: '#38BDF8' }, // sky-400
  { name: 'Dribbble', leadsCame: 60, leadsConverted: 6, totalDealSize: 1000, color: '#34D399' }, // emerald-400
];

type DataType = 'leadsCame' | 'leadsConverted' | 'totalDealSize';

interface SourcesCardProps {
  className?: string;
}

const SourcesCard: React.FC<SourcesCardProps> = ({ className }) => {
  const [activeDataType, setActiveDataType] = useState<DataType>('leadsConverted');

  const chartData = sourcesData.map(source => ({ 
    name: source.name, 
    value: source[activeDataType] 
  }));

  const totalValue = chartData.reduce((sum, item) => sum + item.value, 0);

  const formatTooltipValue = (value: number) => {
    if (activeDataType === 'totalDealSize') {
      return `$${value.toLocaleString()}`;
    }
    return value.toLocaleString();
  };

  return (
    <Card className={cn(className)}>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center">
            <LucidePieChart className="h-5 w-5 mr-2 text-muted-foreground" /> Sources
          </CardTitle>
          <Button variant="outline" size="sm" className="text-xs">
            <CalendarDays className="mr-1.5 h-3.5 w-3.5" />
            Last 6 months
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center">
          <div style={{ width: '100%', height: 200 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie 
                  data={chartData} 
                  dataKey="value" 
                  nameKey="name" 
                  cx="50%" 
                  cy="50%" 
                  outerRadius={80} 
                  innerRadius={50} 
                  paddingAngle={2}
                  labelLine={false}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={sourcesData[index].color} />
                  ))}
                </Pie>
                <RechartsTooltip formatter={(value: number) => formatTooltipValue(value)} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2 text-sm">
            {sourcesData.map((source) => {
              const percentage = totalValue > 0 ? ((source[activeDataType] / totalValue) * 100).toFixed(0) : 0;
              return (
                <div key={source.name} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-sm mr-2" style={{ backgroundColor: source.color }}></span>
                    <span>{source.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-medium mr-2">{formatTooltipValue(source[activeDataType])}</span>
                    <span className="text-muted-foreground">{percentage}%</span>
                  </div>
                </div>
              );
            })}
            <p className="text-xs text-muted-foreground text-right pt-1">from leads total</p>
          </div>
        </div>
        <div className="mt-6 flex justify-center space-x-2">
          <Button variant={activeDataType === 'leadsCame' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveDataType('leadsCame' as const)} className="text-xs px-2 py-1 h-auto">
            Leads came
          </Button>
          <Button variant={activeDataType === 'leadsConverted' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveDataType('leadsConverted' as const)} className="text-xs px-2 py-1 h-auto">
            Leads Converted
          </Button>
          <Button variant={activeDataType === 'totalDealSize' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveDataType('totalDealSize' as const)} className="text-xs px-2 py-1 h-auto">
            Total deals size
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SourcesCard;
