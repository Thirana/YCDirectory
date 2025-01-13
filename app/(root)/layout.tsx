import React, { ReactNode } from "react";
import Navbar from "@/app/components/Navbar";

// this layout will apply for the all the routes in (root) folder directory
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-work-sans">
      <Navbar />
      {children}
    </main>
  );
}
