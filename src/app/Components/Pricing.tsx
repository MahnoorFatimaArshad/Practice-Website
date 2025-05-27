"use client";

import React from "react";

export default function PricingStairs() {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-8">Pricing</h2>
        <p className="text-black sm:text-lg">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, similique fugiat? Earum tenetur odit rerum nisi ipsum incidunt porro eius repel.        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-end gap-12 max-w-6xl mx-auto">
        {/* Basic */}
        <div className="group bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-black hover:bg-black transition duration-300 p-8 sm:p-10 w-full sm:w-[28%] text-center translate-y-8 sm:translate-y-8">
          <h3 className="text-xl font-semibold text-black group-hover:text-white mb-1">Basic</h3>
          <p className="text-3xl font-bold text-black group-hover:text-white">$9</p>
          <p className="text-gray-600 group-hover:text-gray-300 mb-6">Per Month</p>
          <button className="bg-black text-white px-6 py-2 rounded-md mb-6 hover:bg-gray-900 transition">Sign Up</button>
          <ul className="text-left space-y-3 text-sm sm:text-base text-gray-700 group-hover:text-gray-200">
            <li>✔️ Core platform access</li>
            <li>✔️ Email support</li>
            <li>✔️ Community forums</li>
            <li>✔️ Single user license</li>
            <li>✔️ 5GB storage</li>
            <li>✔️ Monthly updates</li>
          </ul>
        </div>

        {/*Popular */}
        <div className="group relative bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-black hover:bg-black transition duration-300 p-10 sm:p-12 w-full sm:w-[34%] text-center sm:-translate-y-4 z-10">
          <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Most Popular
          </div>
          <h3 className="text-xl font-semibold text-black group-hover:text-white mb-1">Pro</h3>
          <p className="text-4xl font-bold text-black group-hover:text-white">$29</p>
          <p className="text-gray-600 group-hover:text-gray-300 mb-6">Per Month</p>
          <button className="bg-black text-white px-6 py-2 rounded-md mb-6 hover:bg-gray-900 transition">Sign Up</button>
          <ul className="text-left space-y-3 text-sm sm:text-base text-gray-700 group-hover:text-gray-200">
            <li>✔️ Everything in Basic</li>
            <li>✔️ Advanced analytics</li>
            <li>✔️ Premium support</li>
            <li>✔️ Team collaboration</li>
            <li>✔️ 50GB storage</li>
            <li>✔️ Custom integrations</li>
          </ul>
        </div>

        {/* Enterprise */}
        <div className="group bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-black hover:bg-black transition duration-300 p-10 sm:p-12 w-full sm:w-[30%] text-center -translate-y-12 sm:-translate-y-12">
          <h3 className="text-xl font-semibold text-black group-hover:text-white mb-1">Enterprise</h3>
          <p className="text-5xl font-bold text-black group-hover:text-white">$99</p>
          <p className="text-gray-600 group-hover:text-gray-300 mb-6">Per Month</p>
          <button className="bg-black text-white px-6 py-2 rounded-md mb-6 hover:bg-gray-900 transition">Sign Up</button>
          <ul className="text-left space-y-3 text-sm sm:text-base text-gray-700 group-hover:text-gray-200">
            <li>✔️ Everything in Pro</li>
            <li>✔️ Dedicated account manager</li>
            <li>✔️ Unlimited team members</li>
            <li>✔️ Enterprise-grade security</li>
            <li>✔️ SLA uptime guarantee</li>
            <li>✔️ API & custom solutions</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
