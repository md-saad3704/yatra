import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { getAnalytics } from "../services/analytics";

function Analytics() {
  const analytics = getAnalytics();

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-[#1A1A2E]">
            Travel Analytics
          </h1>

          <p className="text-lg text-gray-600">
            Insights from your planned adventures.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <p className="text-sm text-gray-500">
              Total Trips
            </p>

            <h2 className="mt-2 text-4xl font-bold text-[#FF6B35]">
              {analytics.totalTrips}
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <p className="text-sm text-gray-500">
              Avg Budget
            </p>

            <h2 className="mt-2 text-4xl font-bold text-[#FF6B35]">
              ₹{analytics.averageBudget.toLocaleString()}
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <p className="text-sm text-gray-500">
              Top Destination
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#FF6B35]">
              {analytics.topDestination}
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <p className="text-sm text-gray-500">
              Top Travel Style
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#FF6B35]">
              {analytics.topStyle}
            </h2>
          </div>

        </div>

        {/* Chart */}
        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-3xl font-bold">
            Destination Popularity
          </h2>

          <div className="h-[400px]">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <BarChart
                data={analytics.destinationData}
              >
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
        </div>

      </div>
    </div>
  );
}

export default Analytics;