"use client";

import { Loader } from "@/components/ui/loader";

export default function LoadingOverlay() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Loader fullScreen />
    </div>
  );
}
