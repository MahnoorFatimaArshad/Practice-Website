"use client";

import React from "react";

export default function Discription() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-10 sm:py-14 md:py-20 bg-white mt-18">
      {/* Top Intro Text */}
      <p className="text-xl sm:text-lg md:text-xl text-black mt-16 mb-4 font-bold">
        Welcome to Our Platform
      </p>

      {/* 2-Line Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug mb-8">
        <span className="block text-black mt-2">Lorem ipsum</span>
        <span className="block text-blue-600 mt-2">Lorem ipsum Lorem</span>
      </h1>

      {/* Paragraph */}
      <p className="text-sm sm:text-base md:text-lg text-gray-800 max-w-2xl mb-8">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime exercitationem
        praesentium, enim magnam modi odit aliquid numquam et unde rem voluptatem est esse
        autem amet voluptate iusto delectus eaque ratione.
      </p>

      {/* Large Responsive Image */}
      <div className="w-full flex justify-center bg-blue-100 mt-4">
        <img
          src="/images/DiscriptionPic.jpeg"
          alt="Technology Illustration"
          className="w-full max-w-6xl h-auto object-contain mt-6 px-4"
        />
      </div>
    </div>
  );
}
