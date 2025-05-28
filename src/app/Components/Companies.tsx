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
    <section className="py-12 sm:py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
          Trusted by Leading Companies
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Join thousands of companies that trust us with their business
        </p>
      </div>

      <div className="relative overflow-hidden bg-white">
        {/* Fade Edges */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="marquee-wrapper">
          <div className="marquee-content">
            {duplicated.map((company, idx) => (
              <div 
                key={idx} 
                className="flex items-center mx-8 transition-transform hover:scale-110"
              >
                {React.cloneElement(company.icon, {
                  size: 40,
                  className: "text-gray-700 hover:text-gray-900",
                })}
                <span className="ml-3 text-lg font-medium text-gray-800 whitespace-nowrap">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-wrapper {
          display: flex;
          overflow: hidden;
          padding: 2rem 0;
        }

        .marquee-content {
          display: flex;
          animation: marquee 60s linear infinite;
          will-change: transform;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-content:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
