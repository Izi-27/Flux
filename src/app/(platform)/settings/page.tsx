"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Bell,
  Shield,
  Sliders,
  Mail,
  Smartphone,
  Lock,
  Eye,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

const settingsSections = [
  {
    title: "Notifications",
    icon: Bell,
    items: [
      {
        name: "Email Alerts",
        description: "Receive important updates and alerts via email",
        enabled: true,
      },
      {
        name: "Push Notifications",
        description: "Get real-time updates on your device",
        enabled: false,
      },
      {
        name: "Price Alerts",
        description: "Be notified of significant price changes",
        enabled: true,
      },
    ],
  },
  {
    title: "Security",
    icon: Shield,
    items: [
      {
        name: "Two-Factor Authentication",
        description: "Add an extra layer of security to your account",
        enabled: true,
      },
      {
        name: "Transaction Signing",
        description: "Require confirmation for all transactions",
        enabled: true,
      },
      {
        name: "Withdrawal Whitelist",
        description: "Only allow withdrawals to approved addresses",
        enabled: false,
      },
    ],
  },
  {
    title: "Preferences",
    icon: Sliders,
    items: [
      {
        name: "Hide Balance",
        description: "Mask your portfolio value in the dashboard",
        enabled: false,
      },
      {
        name: "Advanced Charts",
        description: "Show detailed technical analysis tools",
        enabled: true,
      },
      {
        name: "Auto-compound Rewards",
        description: "Automatically reinvest earned rewards",
        enabled: true,
      },
    ],
  },
];

const contactMethods = [
  {
    icon: Mail,
    value: "user@example.com",
    verified: true,
    type: "Email",
  },
  {
    icon: Smartphone,
    value: "+1 (555) 123-4567",
    verified: true,
    type: "Phone",
  },
  {
    icon: Lock,
    value: "Connected to MetaMask",
    verified: true,
    type: "Wallet",
  },
];

export default function SettingsPage() {
  const [settings, setSettings] = useState(settingsSections);

  const toggleSetting = (sectionIndex: number, itemIndex: number) => {
    const newSettings = [...settings];
    newSettings[sectionIndex].items[itemIndex].enabled =
      !newSettings[sectionIndex].items[itemIndex].enabled;
    setSettings(newSettings);
  };

  return (
    <div className="space-y-8">
      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="p-6 bg-black/50 border-orange-500/20">
          <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-orange-500/5"
                >
                  <div className="p-2 rounded-lg bg-orange-500/10">
                    <Icon className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{method.type}</p>
                    <p className="font-medium">{method.value}</p>
                    <div className="mt-2 flex items-center gap-1 text-sm">
                      {method.verified ? (
                        <>
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-green-500">Verified</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="h-4 w-4 text-yellow-500" />
                          <span className="text-yellow-500">Unverified</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </motion.div>

      {/* Settings Sections */}
      {settings.map((section, sectionIndex) => {
        const Icon = section.icon;
        return (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: sectionIndex * 0.1 }}
          >
            <Card className="p-6 bg-black/50 border-orange-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-orange-500/10">
                  <Icon className="h-5 w-5 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold">{section.title}</h3>
              </div>
              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-400">
                        {item.description}
                      </p>
                    </div>
                    <Button
                      variant={item.enabled ? "default" : "outline"}
                      onClick={() => toggleSetting(sectionIndex, itemIndex)}
                      className={`min-w-[100px] ${
                        item.enabled
                          ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                          : "hover:border-orange-500 hover:text-orange-500"
                      }`}
                    >
                      {item.enabled ? "Enabled" : "Disabled"}
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
