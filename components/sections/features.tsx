"use client"

import { motion } from "framer-motion"

function PhoneFrame({
  src,
  alt,
  className = "",
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div className={`relative shrink-0 w-[245px] ${className}`}>
      <img
        src={src}
        alt={alt}
        className="block w-full h-auto object-contain"
      />
    </div>
  )
}

function FeatureTextBlock({
  title,
  description,
  maxWidth = "520px",
}: {
  title: string
  description: string
  maxWidth?: string
}) {
  return (
    <div className="w-full flex flex-col items-center text-center gap-4">
      <h3
        className="text-black text-center"
        style={{
          fontFamily: "Outfit, sans-serif",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "32px",
        }}
      >
        {title}
      </h3>

      <p
        className="text-black text-center"
        style={{
          maxWidth,
          fontFamily: "Outfit, sans-serif",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "28px",
        }}
      >
        {description}
      </p>
    </div>
  )
}

export function Features() {
  const syncYourEmailImage = "/mobile1.png"
  const shareYourClosetImage = "/mobile2.png"
  const talkToStylistImage = "/mobile3.png"
  const forYouMarketImage = "/mobile4.png"

  return (
    <section id="explore" className="w-full bg-white py-6 md:py-16 px-6 md:px-12 scroll-mt-28">
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="text-center mx-auto mb-6 md:mb-10 flex flex-col items-center">
          <h2
            className="text-black mb-6 text-center text-4xl sm:text-5xl md:text-6xl lg:text-[64px]"
            style={{
              maxWidth: "855px",
              fontFamily: "Outfit, sans-serif",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "1.2",
            }}
          >
            Features That Make Your
            <br className="hidden sm:block" />
            Closet Smarter
          </h2>

          <p
            className="text-black text-center text-lg md:text-xl lg:text-2xl"
            style={{
              maxWidth: "896px",
              fontFamily: "Outfit, sans-serif",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "1.5",
            }}
          >
            Effortlessly organize every item in your wardrobe. Share your style and get inspired by others. Shop smarter with personalized deals in your size.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Card: Sync Your Email */}
          <motion.div
            id="sync-your-email"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center gap-0 md:gap-1 overflow-hidden rounded-[40px] bg-[#F3F3F3] px-6 md:px-10 py-8 md:py-10 min-h-[420px] md:min-h-[620px] scroll-mt-32"
          >
            <PhoneFrame
              src={syncYourEmailImage}
              alt="Sync Your Email"
            />

            <FeatureTextBlock
              title="Sync Your Email"
              description="Build your digital closet in minutes with our patented email scanning, then check back every day at 7 p.m EST to see your newest purchases."
              maxWidth="520px"
            />
          </motion.div>

          {/* Right Card: Share Your Closet */}
          <motion.div
            id="share-your-closet"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center text-center gap-0 md:gap-0 overflow-hidden rounded-[40px] bg-[#F3F3F3] px-6 md:px-10 py-8 md:py-10 min-h-[420px] md:min-h-[620px] scroll-mt-32"
          >
            <FeatureTextBlock
              title="Share Your Closet"
              description="Make your wardrobe as public as you want. Share your outfits, get inspiration, and build a style community with the people you trust."
              maxWidth="560px"
            />

            <PhoneFrame
              src={shareYourClosetImage}
              alt="Share Your Closet"
            />
          </motion.div>

          {/* Row 2, Left Card: Talk to a stylist */}
          <motion.div
            id="talk-to-a-stylist"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center gap-0 md:gap-1 overflow-hidden rounded-[40px] bg-[#F3F3F3] px-6 md:px-10 py-8 md:py-10 min-h-[420px] md:min-h-[620px] scroll-mt-28"
          >
            <PhoneFrame
              src={talkToStylistImage}
              alt="Talk to a stylist"
            />

            <FeatureTextBlock
              title="Talk to a stylist"
              description="Personal styling used to be an ultra luxury. Now it's not. Meet our team of real stylists, here to help you build a wardrobe that works, from lookbooks to brand discovery to dressing for your shape."
              maxWidth="560px"
            />
          </motion.div>

          {/* Row 2, Right Card: For You Market */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center text-center gap-10 md:gap-12 overflow-hidden rounded-[40px] bg-[#F3F3F3] px-6 md:px-10 py-8 md:py-10 min-h-[420px] md:min-h-[620px]"
          >
            <FeatureTextBlock
              title="For You Market"
              description="Shop without the doomscroll. Because Kitme knows your size, your style, and your wardrobe, every item in our marketplace is already curated for you."
              maxWidth="520px"
            />

            <PhoneFrame
              src={forYouMarketImage}
              alt="For You Market"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}