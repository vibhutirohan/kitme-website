"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

// ============================================================================
// DATA - Edit these to customize the daily drops section
// ============================================================================

const CHECKLIST = [
  "Sync Your Closet",
  "We take your size preference",
  "We take your size preference", // duplicated exactly as in screenshot
  "Find daily drops in your size",
  "Get from store",
] as const

const SECTION_CONTENT = {
  eyebrow: "",
  title: <>Personalized Daily<br />Drops in your size</>,
  description:
    "Personalized selection of products sourced from leading retailers. Every item is matched to your size, preferences, and profile to ensure relevance.",
}

// ============================================================================
// COMPONENTS
// ============================================================================

function ChecklistItem({ item, index }: { item: string; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
      className="flex items-center gap-4"
    >
      <div className="w-6 h-6 rounded-full bg-[#EBD1D8] flex items-center justify-center flex-shrink-0">
        <Check className="h-4 w-4 text-white" strokeWidth={3} />
      </div>
      <span className="text-black text-[15px]">{item}</span>
    </motion.li>
  )
}

function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative w-full flex items-center justify-center p-4 lg:p-8"
    >
      <img
        src="/mockup_daily_drops_purple.png"
        alt="Personalized Daily Drops Mockup"
        className="w-[110%] md:w-[120%] h-auto max-w-none object-contain ml-[-5%] md:ml-[-10%]"
      />
    </motion.div>
  )
}

export function DailyDropsSection() {
  return (
    <section id="daily-drops" className="w-full bg-white py-20 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1200px] mx-auto w-full flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Text and Checklist */}
          <div className="flex flex-col ml-10 max-w-lg lg:order-1 order-2">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight text-black mb-6 leading-[1.1]">
              {SECTION_CONTENT.title}
            </h2>
            <p className="text-gray-600 text-[15px] md:text-base leading-relaxed mb-10 max-w-md">
              {SECTION_CONTENT.description}
            </p>

            <ul className="flex flex-col gap-4">
              {CHECKLIST.map((item, index) => (
                <ChecklistItem key={index} item={item} index={index} />
              ))}
            </ul>
          </div>

          {/* Right Side: Mockup Focus */}
          <div className="lg:order-2 order-1 pr-12">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
