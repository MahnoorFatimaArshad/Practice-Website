"use client";

import React from "react";
import {
  FaApple,
  FaGoogle,
  FaMicrosoft,
  FaAmazon,
  FaFacebook,
} from "react-icons/fa";

const companies = [
  { name: "Apple", icon: <FaApple className="text-gray-800" /> },
  { name: "Google", icon: <FaGoogle className="text-blue-600" /> },
  { name: "Microsoft", icon: <FaMicrosoft className="text-green-600" /> },
  { name: "Amazon", icon: <FaAmazon className="text-yellow-600" /> },
  { name: "Facebook", icon: <FaFacebook className="text-blue-800" /> },
];

export default function CompanyMarquee() {
  return (
    <div className="relative overflow-hidden bg-gray-100 py-4 sm:py-6 mt-10">
      {/* Side Fade Effects */}
      <div className="absolute left-0 top-0 h-full w-10 sm:w-24 bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-10 sm:w-24 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap relative">
        {/* First Set */}
        <div className="animate-marquee flex whitespace-nowrap">
          {companies.map((company, idx) => (
            <div
              key={`first-${idx}`}
              className="flex items-center gap-2 mx-3 sm:mx-5 md:mx-6 first:ml-0 last:mr-0"
            >
              {React.cloneElement(company.icon, {
                size: 20,
                className: "sm:size-6 md:size-8",
              })}
              <span className="text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap">
                {company.name}
              </span>
            </div>
          ))}
        </div>

        {/* Second Set (loop) */}
        <div className="animate-marquee flex whitespace-nowrap absolute left-full">
          {companies.map((company, idx) => (
            <div
              key={`second-${idx}`}
              className="flex items-center gap-2 mx-3 sm:mx-5 md:mx-6 first:ml-0 last:mr-0"
            >
              {React.cloneElement(company.icon, {
                size: 20,
                className: "sm:size-6 md:size-8",
              })}
              <span className="text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Style */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 40s;
          }
        }
      `}</style>
    </div>
  );
}
