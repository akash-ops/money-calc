"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Expense Tracking",
    description:
      "Easily monitor your daily, weekly, and monthly expenses across various categories such as groceries, utilities, transportation, entertainment, and more. FinTrack provides intuitive tools to input and categorize your expenditures, giving you a clear overview of where your money goes.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Budget Management",
    description:
      "Set personalized budgets for different spending categories and track your progress in real-time. FinTrack offers customizable budgeting features, allowing you to adjust allocations and adapt to changing financial goals effortlessly.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Savings Goals",
    description:
      "Define your financial objectives and create savings goals with FinTrack. Whether you're saving for a vacation, a new car, or an emergency fund, FinTrack helps you stay focused and motivated by visualizing your progress towards achieving these milestones",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Customizable Alerts",
    description:
      "Stay informed about your finances with customizable alerts and notifications. Receive reminders for upcoming bill payments, overspending alerts, or updates on your savings goals, ensuring that you stay on track towards financial stability.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}
