"use client"

import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"

// ============================================================================
// DATA 
// ============================================================================

const TESTIMONIALS = [
  {
    image: "/Girl 1.png",
    text: "With the Kitme community, your closet becomes part of something bigger. Browse real wardrobes, see how friends and creators style their looks, and draw inspiration from people you love.",
    name: "Anton de Swardt",
  },
  {
    image: "/Girl 2.png",
    text: "I used to stare at my closet empty, but now I can see how dozens of women with my exact body type are styling the very same items I own. It's completely changed how I get dressed.",
    name: "Sarah Mitchell",
  }
]

// ============================================================================
// COMPONENTS
// ============================================================================

function TestimonialCard({ item }: { item: typeof TESTIMONIALS[0] }) {
  return (
    <div className="flex-shrink-0 w-[480px] bg-white rounded-[2rem] border border-gray-100 shadow-sm p-4 flex gap-6 snap-center items-center relative">
      <img
        src={item.image}
        alt={item.name}
        className="w-[200px] h-[260px] object-cover rounded-[1.5rem]"
      />
      <div className="flex-1 pr-6 py-2">
        <p className="text-black text-[13px] leading-relaxed mb-8">
          {item.text}
        </p>
        <h4 className="text-black font-medium text-[16px] mb-2">{item.name}</h4>
        <div className="flex gap-1 text-[#FCD34D]">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-4 h-4 fill-current" />
          ))}
        </div>
      </div>

      {/* Absolute positioning for the pink arrow circle shown in the design */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-8 rounded-full bg-[#D19AA7] flex items-center justify-center shadow-md cursor-pointer hover:scale-105 transition-transform">
        <ArrowRight className="w-4 h-4 text-white" />
      </div>
    </div>
  )
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export function CommunitySection() {
  return (
    <section id="community" className="w-full bg-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1280px] mx-auto w-full flex flex-col items-center">

        {/* Title and Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 px-4"
        >
          <h2 className="font-sans text-[40px] md:text-[52px] font-bold text-black mb-6 leading-[1.1] tracking-tight">
            Style is better when it&apos;s shared
          </h2>
          <p className="text-black mb-4 leading-[1.7] text-[16px] md:text-[18px] font-medium max-w-2xl mx-auto">
            Your wardrobe is worth seeing. Share your looks, find inspiration from people you actually know, and make getting dressed feel like something again.
          </p>
        </motion.div>

        {/* Card Carousel Area */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full relative mb-16"
        >
          <div className="flex gap-8 overflow-x-auto pb-10 pt-4 hide-scrollbar snap-x snap-mandatory justify-start lg:justify-center px-4">
            {TESTIMONIALS.map((item, index) => (
              <TestimonialCard key={index} item={item} />
            ))}
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#D19AA7]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
          </div>
        </motion.div>

        {/* Bottom Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="rounded-full bg-[#E5C9D3] text-black hover:bg-[#D19AA7] transition-colors px-10 py-4 text-[16px] font-medium tracking-wide shadow-sm">
            Sync your wardrobe
          </button>
        </motion.div>

      </div>
    </section>
  )
}
