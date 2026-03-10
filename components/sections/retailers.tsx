"use client"

import { motion } from "framer-motion"
import { AppStoreBadges } from "@/components/ui/app-store-badges"

export function RetailersSection() {
  return (
    <section id="retailers" className="w-full bg-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1280px] mx-auto w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F8F8F8] rounded-[48px] overflow-hidden flex flex-col md:flex-row w-full max-w-6xl mx-auto"
        >
          {/* Left Side: Image */}
          <div className="w-full md:w-[38%] h-[300px] md:h-auto min-h-[400px] relative shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Girl 3.png"
              alt="Fashion Model"
              className="absolute inset-0 w-full h-full object-cover object-[center_top]"
            />
          </div>

          {/* Right Side: Content */}
          <div className="w-full md:w-[62%] flex flex-col justify-center p-12 md:p-16 lg:p-24">
            <span className="text-[#555555] text-[14px] font-medium tracking-wide uppercase mb-4">
              For Retailers
            </span>

            <h2 className="font-sans text-[36px] md:text-[44px] lg:text-[52px] font-bold text-black mb-6 leading-[1.1] tracking-tight pr-4">
              Discover and connect with<br className="hidden lg:block" /> the new era of Fashion
            </h2>

            <p className="text-[#333333] text-[16px] leading-[1.7] font-medium mb-12 max-w-xl pr-4">
              Personalized selection of products sourced from leading retailers. Every item is matched to your size, preferences, and profile to ensure relevance. New recommendations are added daily for a consistently refined experience.
            </p>

            <div className="flex w-full justify-start items-center">
              <AppStoreBadges variant="dark" className="!justify-start gap-3" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

