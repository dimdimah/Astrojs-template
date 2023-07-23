import React from "react";
import HijabLayout from "@/components/HijabLayout";
import NavPage from "@/components/NavPage";

export default function Hijab() {
  return (
    <div>
      <NavPage />
      <div className="container flex flex-row">
        <HijabLayout />
        <div className="flex flex-col flex-auto min-h-screen antialiased text-gray-800 bg-[#fffffe] ">
          123
        </div>
      </div>
    </div>
  );
}
