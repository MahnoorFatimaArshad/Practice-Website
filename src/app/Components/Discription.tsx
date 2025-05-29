"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Description() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg font-semibold text-blue-600 mb-4"
          >
            Welcome to Our Platform
          </motion.p>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-8"
          >
            <span className="block">Transform Your Ideas</span>
            <span className="block text-blue-600 mt-2">Into Reality</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
          >
            Create stunning websites and applications with our powerful platform.
            We provide the tools and resources you need to bring your vision to life.
          </motion.p>

          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-blue-50 to-white p-4 sm:p-8"
          >
            <div className="aspect-[16/9] relative">
              <Image
                src="/images/DiscriptionPic.jpeg"
                alt="Platform Features"
                fill
                className="object-cover rounded-xl shadow-2xl"
                priority
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl filter blur-3xl -z-10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
