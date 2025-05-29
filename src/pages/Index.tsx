import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import FunnelCard from '../components/Dashboard/FunnelCard';
import SourcesCard from '../components/Dashboard/SourcesCard';
import LeadsTrackingChart from '../components/Dashboard/LeadsTrackingChart';
import ReasonsLostCard from '../components/Dashboard/ReasonsLostCard';
import OtherDataCard from '../components/Dashboard/OtherDataCard';

/**
 * LeadsDashboardPage serves as the main view for the leads dashboard.
 * It assembles various data visualization components within the MainAppLayout.
 * The project requirements specify this page as "Dashboard Overview - Leads".
 */
const LeadsDashboardPage: React.FC = () => {
  return (
    <MainAppLayout pageTitle="Dashboard Overview - Leads">
      {/* Row 1: Stats Cards Grid */}
      {/* StatsCardGrid component handles its own responsive columns (e.g., md:grid-cols-2 lg:grid-cols-4) */}
      <StatsCardGrid />

      {/* Row 2: Funnel Count and Sources */}
      {/* This grid arranges FunnelCard and SourcesCard side-by-side on larger screens. */}
      {/* On large screens (lg and up), FunnelCard takes 2/5 width, SourcesCard takes 3/5 width. */}
      {/* On smaller screens, they stack vertically. */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <FunnelCard className="lg:col-span-2" />
        <SourcesCard className="lg:col-span-3" />
      </div>

      {/* Row 3: Leads Tracking Chart */}
      {/* LeadsTrackingChart is typically displayed full-width. */}
      <LeadsTrackingChart />

      {/* Row 4: Reasons Lost and Other Data */}
      {/* This grid arranges ReasonsLostCard and OtherDataCard side-by-side. */}
      {/* On medium screens (md and up), they are split 50/50. */}
      {/* On smaller screens, they stack vertically. */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ReasonsLostCard />
        <OtherDataCard />
      </div>
    </MainAppLayout>
  );
};

export default LeadsDashboardPage;
