"use client";

import { DynamicChart } from "@/components/ui/dynamic-chart";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Activity, DollarSign, TrendingUp, Users } from "lucide-react";

const stats = [
  {
    title: "Total Value Locked",
    value: "$12.5M",
    change: "+12.3%",
    icon: DollarSign,
  },
  {
    title: "Active Agents",
    value: "145",
    change: "+5.2%",
    icon: Users,
  },
  {
    title: "Average APY",
    value: "8.4%",
    change: "+2.1%",
    icon: TrendingUp,
  },
  {
    title: "Total Transactions",
    value: "2,345",
    change: "+15.3%",
    icon: Activity,
  },
];

export default function AnalyticsPage() {

  return (
    <div className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6" variant="glass" hover="lift">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-orange-500/10">
                    <Icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{stat.title}</p>
                    <div className="flex items-baseline gap-2">
                      <p className="text-2xl font-semibold">{stat.value}</p>
                      <span className="text-xs text-green-500">
                        {stat.change}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <Card className="p-6" variant="glass" hover="lift">
        <h3 className="text-lg font-semibold mb-4">TVL Growth</h3>
        <DynamicChart
          data={[10, 15, 13, 18, 16, 21, 25, 28, 22, 30]}
          labels={[
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
          ]}
          label="Total Value Locked ($M)"
        />
      </Card>
    </div>
  );
}
