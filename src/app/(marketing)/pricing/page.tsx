"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

const plans = [
  {
    name: "Basic",
    description: "Perfect for getting started with automated yield farming",
    price: "1.5%",
    priceDetail: "of earnings",
    features: [
      "Single AI Agent",
      "Basic Portfolio Analytics",
      "Email Notifications",
      "Community Support",
    ],
  },
  {
    name: "Pro",
    description: "Advanced features for serious DeFi investors",
    price: "1%",
    priceDetail: "of earnings",
    features: [
      "Multiple AI Agents",
      "Advanced Analytics",
      "Priority Support",
      "Custom Risk Parameters",
      "API Access",
      "Performance Reports",
    ],
    isPopular: true,
  },
  {
    name: "Enterprise",
    description: "Custom solutions for institutions and DAOs",
    price: "Contact Us",
    priceDetail: "custom pricing",
    features: [
      "Custom Agent Development",
      "Dedicated Account Manager",
      "White-label Solutions",
      "Custom Integration",
      "SLA Guarantees",
      "Compliance Reports",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="mb-6 text-4xl font-bold">
          Simple, Performance-Based Pricing
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-400">
          We only make money when you do. Our success is directly tied to your
          yields, ensuring our incentives are perfectly aligned.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              variant={plan.isPopular ? "gradient" : "glass"}
              className="relative overflow-hidden"
            >
              {plan.isPopular && (
                <div className="absolute -right-12 top-6 rotate-45 bg-primary-500 px-12 py-1 text-sm font-medium">
                  Popular
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="mt-2 text-sm text-gray-400">{plan.description}</p>

                <div className="my-6">
                  <div className="text-4xl font-bold">{plan.price}</div>
                  <div className="text-sm text-gray-400">
                    {plan.priceDetail}
                  </div>
                </div>

                <ul className="mb-6 space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 text-primary-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/dashboard">
                  <Button
                    variant={plan.isPopular ? "gradient" : "outline"}
                    className="w-full"
                  >
                    {plan.price === "Contact Us"
                      ? "Contact Sales"
                      : "Get Started"}
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-24 rounded-2xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-lg"
      >
        <h2 className="mb-4 text-2xl font-semibold">
          Looking for Custom Solutions?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-400">
          We work with institutions, DAOs, and large-scale DeFi operations to
          build custom yield optimization solutions. Contact us to learn more.
        </p>
        <Button variant="gradient" size="lg">
          Contact Sales
        </Button>
      </motion.div>
    </div>
  );
}
