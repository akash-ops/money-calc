"use client"

import React, { useState } from 'react'
import Lottie from 'react-lottie'
import * as animationData from '../assets/animations/home_side.json'
const HomeScreen = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  return (
    <div className='grid place-items-center bg-slate-500'>
        {/* info container */}
        <div className='text-center px-10 mt-10 py-10 w-full flex flex-row justify-evenly items-end bg-gradient-to-b from-slate-500 to-slate-900'>
            <h2 className='w-1/2 text-white'>
            FinTrack is your ultimate solution for effortlessly managing expenses and savings, offering a seamless online platform to track your financial journey with precision and ease. Whether you're a seasoned investor or just starting to budget, FinTrack empowers you to take control of your finances with confidence.
        
            </h2>
            <Lottie options={defaultOptions} width={400}/>
        <div>
        {/*Budget Management: Set personalized budgets for different spending categories and track your progress in real-time. FinTrack offers customizable budgeting features, allowing you to adjust allocations and adapt to changing financial goals effortlessly.

Savings Goals: Define your financial objectives and create savings goals with FinTrack. Whether you're saving for a vacation, a new car, or an emergency fund, FinTrack helps you stay focused and motivated by visualizing your progress towards achieving these milestones.

Visual Analytics: Gain insights into your spending patterns and savings habits through interactive charts and graphs. FinTrack generates detailed reports and visual representations of your financial data, enabling you to identify trends, spot areas for improvement, and make informed decisions about your money.

Customizable Alerts: Stay informed about your finances with customizable alerts and notifications. Receive reminders for upcoming bill payments, overspending alerts, or updates on your savings goals, ensuring that you stay on track towards financial stability.*/}
        </div>
        </div>
    </div>
  )
}

export default HomeScreen