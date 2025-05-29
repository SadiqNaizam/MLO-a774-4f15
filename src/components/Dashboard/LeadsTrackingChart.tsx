import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, TrendingUp as TrendingUpIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const chartData = [
  { name: 'March', closedWon: 65, closedLost: 40 },
  { name: 'April', closedWon: 52, closedLost: 38 },
  { name: 'May', closedWon: 88, closedLost: 25 },
  { name: 'June', closedWon: 70, closedLost: 10 },
  { name: 'July', closedWon: 85, closedLost: 42 },
  { name: 'August', closedWon: 105, closedLost: 30 },
];

const totalClosed = chartData.reduce((sum, item) => sum + item.closedWon, 0);
const totalLost = chartData.reduce((sum, item) => sum + item.closedLost, 0);

interface LeadsTrackingChartProps {
  className?: string;
}

const LeadsTrackingChart: React.FC<LeadsTrackingChartProps> = ({ className }) => {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
          <CardTitle className="flex items-center">
            <TrendingUpIcon className="h-5 w-5 mr-2 text-muted-foreground" /> Leads tracking
          </CardTitle>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="text-right">
              <p className="text-2xl font-bold">{totalClosed}</p>
              <p className="text-xs text-muted-foreground">total closed</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">{totalLost}</p>
              <p className="text-xs text-muted-foreground">total lost</p>
            </div>
            <Button variant="outline" size="sm" className="text-xs whitespace-nowrap">
              <CalendarDays className="mr-1.5 h-3.5 w-3.5" />
              Last 6 months
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div style={{ width: '100%', height: 300 }} className="mt-4">
          <ResponsiveContainer>
            <AreaChart data={chartData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
              <defs>
                <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0D9488" stopOpacity={0.6}/>
                  <stop offset="95%" stopColor="#0D9488" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F43F5E" stopOpacity={0.6}/>
                  <stop offset="95%" stopColor="#F43F5E" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={12} dy={10} />
              <YAxis tickLine={false} axisLine={false} fontSize={12} dx={-5} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)'}}
                labelStyle={{ color: 'hsl(var(--card-foreground))' }}
              />
              <Legend 
                verticalAlign="bottom" 
                align="left" 
                wrapperStyle={{paddingTop: '20px'}} 
                iconType="circle" 
                iconSize={8}
              />
              <Area type="monotone" dataKey="closedWon" name="Closed won" stroke="#0D9488" fillOpacity={1} fill="url(#colorWon)" strokeWidth={2} dot={{r:4, strokeWidth:2, fill:'#fff'}} activeDot={{r:6}}/>
              <Area type="monotone" dataKey="closedLost" name="Closed lost" stroke="#F43F5E" fillOpacity={1} fill="url(#colorLost)" strokeWidth={2} dot={{r:4, strokeWidth:2, fill:'#fff'}} activeDot={{r:6}}/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadsTrackingChart;
