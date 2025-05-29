import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, TrendingUp, DollarSign, AlertCircle, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  description?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  iconColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, description, trend, trendValue, iconColor }) => {
  const trendColor = trend === 'up' ? 'text-green-500' : trend === 'down' ? 'text-red-500' : 'text-gray-500';
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className={cn("h-5 w-5 text-muted-foreground", iconColor)} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && <p className="text-xs text-muted-foreground">{description}</p>}
        {trend && trendValue && (
          <p className={cn("text-xs mt-1", trendColor)}>
            {trendValue}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

interface StatsCardGridProps {
  className?: string;
}

const StatsCardGrid: React.FC<StatsCardGridProps> = ({ className }) => {
  const statsData: StatCardProps[] = [
    {
      title: "Total Active Leads",
      value: "682",
      icon: Users,
      trend: 'up' as const,
      trendValue: "+12.5% from last month",
      iconColor: "text-blue-500"
    },
    {
      title: "New Leads (This Month)",
      value: "153",
      icon: Zap,
      trend: 'down' as const,
      trendValue: "-3.2% from last month",
      iconColor: "text-yellow-500"
    },
    {
      title: "Deals Won (QTD)",
      value: "47",
      icon: TrendingUp,
      trend: 'up' as const,
      trendValue: "+8 compared to last quarter",
      iconColor: "text-green-500"
    },
    {
      title: "Avg. Revenue per Deal",
      value: "$2,850",
      icon: DollarSign,
      description: "Based on closed-won deals",
      iconColor: "text-purple-500"
    }
  ];

  return (
    <div className={cn("grid gap-4 md:grid-cols-2 lg:grid-cols-4", className)}>
      {statsData.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          description={stat.description}
          trend={stat.trend}
          trendValue={stat.trendValue}
          iconColor={stat.iconColor}
        />
      ))}
    </div>
  );
};

export default StatsCardGrid;
