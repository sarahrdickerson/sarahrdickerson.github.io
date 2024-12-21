"use client";
import React, {useEffect, useState} from 'react';
import { motion } from "framer-motion";


const CodeEditor = () => {
    const bars = [
        { delay: 0, finalWidth: "100%", color: "bg-blue-900" },
        { delay: 0.2, finalWidth: "75%", color: "bg-indigo-400" },
        { delay: 0.4, finalWidth: "50%", color: "bg-violet-800" },
        { delay: 0.6, finalWidth: "65%", color: "bg-indigo-200" },
        { delay: 0.8, finalWidth: "38%", color: "bg-indigo-700" },
        { delay: 1, finalWidth: "85%", color: "bg-violet-500" },
      ];

  return (
    <div className="flex md:justify-end w-full justify-center">
        <div className="bg-[#FAF6FF] rounded-lg shadow-xl w-4/5">
            <div className="bg-[#354259] p-2 rounded-t-lg flex items-center justify-start space-x-1 ">
                <div className="w-3 h-3 bg-[#FAF6FF] rounded-full"></div>
                <div className="w-3 h-3 bg-[#FAF6FF] rounded-full"></div>
                <div className="w-3 h-3 bg-[#FAF6FF] rounded-full"></div>
            </div>
            <div className="p-6 flex flex-col gap-4">

            {bars.map((bar, index) => (
                <div key={index} className="h-4 flex items-center">
                <p className="text-gray-400 text-xs">{index + 31}</p>
                <motion.div
                    className={`h-full ml-2 rounded-md ${bar.color}`}
                    initial={{ width: "0%" }}
                    animate={{ width: bar.finalWidth }}
                    transition={{
                    delay: bar.delay,
                    duration: 0.5,
                    ease: "easeInOut",
                    }}
                ></motion.div>
                </div>
            ))}

            </div>
        </div>
    </div>
  )
}

export default CodeEditor