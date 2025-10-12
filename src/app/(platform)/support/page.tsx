"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Book,
  FileText,
  HelpCircle,
  ChevronRight,
  Mail,
  PhoneCall,
  MessagesSquare,
} from "lucide-react";

const faqItems = [
  {
    question: "What is Flux AI?",
    answer:
      "Flux AI is an advanced DeFi yield optimization platform that uses artificial intelligence to automatically manage and maximize your crypto portfolio's returns across multiple protocols.",
  },
  {
    question: "How do AI agents work?",
    answer:
      "Our AI agents continuously monitor DeFi protocols, analyzing yield opportunities and automatically moving your funds to capture the highest risk-adjusted returns while maintaining your specified risk parameters.",
  },
  {
    question: "Is my investment safe?",
    answer:
      "Your funds remain non-custodial and secured by smart contracts. Flux AI never takes custody of your assets - you maintain full control through your connected wallet.",
  },
  {
    question: "What are the fees?",
    answer:
      "Flux operates on a performance fee model, typically taking a small percentage of the yields generated. There are no management fees or hidden charges.",
  },
];

const supportChannels = [
  {
    name: "Live Chat",
    description: "Chat with our support team in real-time",
    icon: MessageCircle,
    action: "Start Chat",
  },
  {
    name: "Email Support",
    description: "Get help via email within 24 hours",
    icon: Mail,
    action: "Send Email",
  },
  {
    name: "Phone Support",
    description: "Schedule a call with our team",
    icon: PhoneCall,
    action: "Schedule Call",
  },
  {
    name: "Community Forum",
    description: "Connect with other Flux users",
    icon: MessagesSquare,
    action: "Join Forum",
  },
];

const resources = [
  {
    title: "Documentation",
    description: "Detailed guides and API references",
    icon: Book,
    link: "/docs",
  },
  {
    title: "Knowledge Base",
    description: "In-depth articles and tutorials",
    icon: FileText,
    link: "/knowledge-base",
  },
  {
    title: "FAQ",
    description: "Common questions and answers",
    icon: HelpCircle,
    link: "/faq",
  },
];

export default function SupportPage() {
  return (
    <div className="space-y-8">
      {/* Support Channels */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {supportChannels.map((channel, index) => {
          const Icon = channel.icon;
          return (
            <motion.div
              key={channel.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 bg-black/50 border-orange-500/20 hover:border-orange-500/40 transition-colors">
                <div className="flex flex-col h-full">
                  <div className="p-3 rounded-lg bg-orange-500/10 w-fit">
                    <Icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-semibold mt-4">{channel.name}</h3>
                  <p className="text-gray-400 text-sm mt-2">
                    {channel.description}
                  </p>
                  <Button className="mt-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                    {channel.action}
                  </Button>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="p-6 bg-black/50 border-orange-500/20">
          <h2 className="text-xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="p-4 rounded-lg bg-orange-500/5 hover:bg-orange-500/10 transition-colors"
              >
                <div className="flex justify-between items-start cursor-pointer">
                  <div>
                    <h3 className="font-medium mb-2">{item.question}</h3>
                    <p className="text-gray-400 text-sm">{item.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Resources */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="p-6 bg-black/50 border-orange-500/20">
          <h2 className="text-xl font-semibold mb-6">Additional Resources</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Button
                    variant="outline"
                    className="w-full justify-between hover:border-orange-500 hover:text-orange-500 group"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5" />
                      <div className="text-left">
                        <p className="font-medium">{resource.title}</p>
                        <p className="text-sm text-gray-400">
                          {resource.description}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
