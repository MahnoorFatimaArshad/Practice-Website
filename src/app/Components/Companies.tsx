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
  { name: "Apple", icon: <FaApple /> },
  { name: "Google", icon: <FaGoogle /> },
  { name: "Microsoft", icon: <FaMicrosoft /> },
  { name: "Amazon", icon: <FaAmazon /> },
  { name: "Facebook", icon: <FaFacebook /> },
];

export default function CompanyMarquee() {
  const duplicated = Array(10)
    .fill(companies)
    .flat();

  return (
    <div className="relative overflow-hidden bg-white py-4 sm:py-6 mt-20">
      {/* Fade Edges */}
      <div className="absolute left-0 top-0 h-full w-10 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-10 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="marquee-wrapper">
        <div className="marquee-content gap-16">
          {duplicated.map((company, idx) => (
            <div key={idx} className="flex items-center">
              {React.cloneElement(company.icon, {
                size: 60,
                className: "text-gray-800",
              })}
              <span className="ml-3 text-lg font-semibold whitespace-nowrap">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-wrapper {
          display: flex;
          overflow: hidden;
        }

        .marquee-content {
          display: flex;
          animation: marquee 60s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
