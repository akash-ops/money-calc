

"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "../utils/cn";

export function HomeScreen() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20 mt-10")}>
        Track Your Application - FinTrack
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20 w-2/3 py-5 font-thin">
      FinTrack is your ultimate solution for effortlessly managing expenses and savings, offering a seamless online platform to track your financial journey with precision and ease. Whether you're a seasoned investor or just starting to budget, FinTrack empowers you to take control of your finances with confidence.
      </p>
    </div>
  );
}
