"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  FileText,
  Briefcase,
  DollarSign,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";

interface SidebarItem {
  title: string;
  icon: React.ElementType;
  href: string;
  badge?: string;
}

const AppSidebar: React.FC = () => {
  const pathname = usePathname();
  const { state, toggleSidebar, isMobile, openMobile } = useSidebar();
  const isCollapsed = state === "collapsed";

  const mainNavItems: SidebarItem[] = [
    { title: "Dashboard", icon: Home, href: "/dashboard" },
    { title: "Agents", icon: Users, href: "/agents" },
    { title: "Analytics", icon: FileText, href: "/analytics" },
    { title: "Portfolio", icon: Briefcase, href: "/portfolio" },
  ];

  const bottomNavItems: SidebarItem[] = [
    { title: "Settings", icon: Settings, href: "/settings" },
    { title: "Support", icon: HelpCircle, href: "/support" },
  ];

  return (
    <Sidebar
      side="left"
      variant="floating"
      collapsible="icon"
      data-sidebar="sidebar"
      className={`
        fixed left-0 top-16 h-[calc(100vh-4rem)] bg-[#1a1d29] border-r border-gray-800 z-40
        transition-all duration-300 ease-in-out
        ${isMobile && !openMobile ? "-translate-x-full" : "translate-x-0"}
        ${isMobile ? "w-64" : isCollapsed ? "w-[4.3rem]" : "w-64"}
      `}
    >
      {/* Sidebar Header with Toggle - Desktop Only */}
      {!isMobile && (
        <SidebarHeader className="relative p-0">
          <button
            type="button"
            onClick={toggleSidebar}
            className="absolute -right-3 top-6 bg-[#252836] border border-gray-700 rounded-full p-1 hover:bg-[#2a2d3a] transition-colors z-10"
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4 text-gray-400" />
            ) : (
              <ChevronLeft className="h-4 w-4 text-gray-400" />
            )}
          </button>
        </SidebarHeader>
      )}

      {/* Main Navigation */}
      <SidebarContent className="px-3 py-6 scrollbar-custom">
        <SidebarMenu className="space-y-2">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium
                    ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-gray-300 hover:bg-[#252836] hover:text-white"
                    }
                    ${isCollapsed && !isMobile ? "justify-center px-0" : ""}
                  `}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 w-full"
                  >
                    <Icon
                      className={`flex-shrink-0 ${
                        isCollapsed && !isMobile ? "h-5 w-5" : "h-5 w-5"
                      }`}
                    />
                    {(!isCollapsed || isMobile) && (
                      <>
                        <span className="font-medium">{item.title}</span>
                        {item.badge && (
                          <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </>
                    )}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      {/* Bottom Navigation */}
      <SidebarFooter className="border-t border-gray-800 px-3 py-4 mt-auto">
        <SidebarMenu className="space-y-2">
          {bottomNavItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium
                    ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-gray-300 hover:bg-[#252836] hover:text-white"
                    }
                    ${isCollapsed && !isMobile ? "justify-center px-0" : ""}
                  `}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 w-full"
                  >
                    <Icon
                      className={`flex-shrink-0 ${
                        isCollapsed && !isMobile ? "h-5 w-5" : "h-5 w-5"
                      }`}
                    />
                    {(!isCollapsed || isMobile) && (
                      <span className="font-medium">{item.title}</span>
                    )}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
