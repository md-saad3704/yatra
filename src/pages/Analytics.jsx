/* ===========================================================
   File       : Analytics.jsx
   Folder     : pages
   Purpose    : Displays travel analytics dashboard.
   Author     : Muhammad Saad Kamal
   Project    : YĀTRĀ - AI Travel Planner
=========================================================== */

/* ===========================================================
   Imports
=========================================================== */

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { getAnalytics } from "../services/analytics";

import {
  Card,
  PageHeader,
  SectionTitle,
  StatCard,
  Badge,
} from "../components/ui";

import {
  Map,
  Wallet,
  MapPin,
  Heart,
} from "lucide-react";


/* ===========================================================
   Component : Analytics
=========================================================== */

function Analytics() {

  const analytics = getAnalytics();

  const COLORS = [
    "#FF6B35",
    "#4ECDC4",
    "#45B7D1",
    "#96CEB4",
    "#FFBE0B",
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <PageHeader
          title="Travel Analytics"
          subtitle="Insights from your planned adventures."
        />

        {/* KPI Cards */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <StatCard
            title="Total Trips"
            value={analytics.totalTrips}
            icon={<Map size={26} className="text-[#FF6B35]" />}
          />

          <StatCard
            title="Average Budget"
            value={`₹${analytics.averageBudget.toLocaleString()}`}
            icon={<Wallet size={26} className="text-[#FF6B35]" />}
          />

          <StatCard
            title="Top Destination"
            value={analytics.topDestination}
            icon={<MapPin size={26} className="text-[#FF6B35]" />}
          />

          <StatCard
            title="Top Travel Style"
            value={analytics.topStyle}
            icon={<Heart size={26} className="text-[#FF6B35]" />}
          />

        </div>

        {/* Chart */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* Destination Chart */}
          <Card>
            <SectionTitle className="text-2xl">
              Destination Popularity
            </SectionTitle>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={analytics.destinationData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="trips"
                    fill="#FF6B35"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Travel Style Pie */}
          <Card>
            <SectionTitle className="text-2xl">
              Travel Style Breakdown
            </SectionTitle>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={analytics.travelStyleData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={110}
                    label
                  >
                    {analytics.travelStyleData.map((entry, index) => (
                      <Cell
                        key={entry.name}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>

                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>

        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">

          {/* Budget Chart */}
          <Card>
            <SectionTitle className="text-2xl">
              Budget Distribution
            </SectionTitle>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={analytics.budgetData}>
                  <XAxis dataKey="range" />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="trips"
                    fill="#4ECDC4"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Interests */}
          <Card>
            <SectionTitle className="text-2xl">
              Top Interests
            </SectionTitle>

            <div className="space-y-4">
              {analytics.topInterests.map(([interest, count]) => (
                <div
                  key={interest}
                  className="flex items-center justify-between rounded-xl bg-orange-50 px-5 py-4"
                >
                  <span className="font-medium">
                    {interest}
                  </span>

                  <Badge
                    className="bg-[#FF6B35] text-white"
                  >
                    {count}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>

        </div>


      </div>
    </div>
  );

}
  export default Analytics;