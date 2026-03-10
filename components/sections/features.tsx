"use client"

import { motion } from "framer-motion"

function PhoneFrame({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative shrink-0 w-[245px] ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-contain block"
      />
    </div>
  )
}

export function Features() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="text-center max-w-5xl mx-auto mb-16">
          <h2 className="text-[40px] md:text-[52px] leading-[1.1] font-bold text-black mb-6 tracking-tight">
            Features That Make Your<br />Closet Smarter
          </h2>
          <p className="text-[18px] md:text-[20px] font-medium text-black max-w-4xl mx-auto leading-relaxed">
            Effortlessly organize every item in your wardrobe. Share your style and get inspired<br className="hidden md:block" /> by others. Shop smarter with deals in your size.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Card: Sync Your Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center overflow-hidden"
          >
            <PhoneFrame
              src="/mockup_daily_market_cropped.png"
              alt="Sync Your Email"
              className="mb-10"
            />
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Sync Your Email</h3>
            <p className="text-black text-lg leading-relaxed max-w-sm">
              Build your digital closet with our patented email scanning, then check back every day at 8PM to see your newest purchases.
            </p>
          </motion.div>

          {/* Right Card: Share Your Closet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center text-center overflow-hidden"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 mt-8">Share Your Closet</h3>
            <p className="text-black text-lg leading-relaxed max-w-sm mb-12">
              Make your wardrobe as visible as you want. Share outfits, get inspired, and build a style community with the people you trust.
            </p>
            <PhoneFrame
              src="/mockup_daily_market_cropped.png"
              alt="Share Your Closet"
            />
          </motion.div>

          {/* Row 2, Left Card: Talk to a stylist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center overflow-hidden"
          >
            <PhoneFrame
              src="/mockup_daily_market_cropped.png"
              alt="Talk to a stylist"
              className="mb-10"
            />
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Talk to a stylist</h3>
            <p className="text-black text-lg leading-relaxed max-w-sm">
              Personal styling used to be an ultra luxury. Now it's not. Meet our team of real stylists, here to help you build a wardrobe that works, from lookbooks to brand discovery to dressing for your shape.
            </p>
          </motion.div>

          {/* Row 2, Right Card: For You Market */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center text-center overflow-hidden"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 mt-8">For You Market</h3>
            <p className="text-black text-lg leading-relaxed max-w-sm mb-12">
              Shop without the doomscroll. Because Kitme knows your size, your style, and your wardrobe, every item in our marketplace is already curated for you.
            </p>
            <PhoneFrame
              src="/mockup_daily_market_cropped.png"
              alt="For You Market"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

