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
      {/* Phone outer body */}
      <div className="relative w-full rounded-[38px] bg-black p-[4px] shadow-[0_18px_35px_rgba(0,0,0,0.28),0_6px_12px_rgba(0,0,0,0.18)]">
        {/* Screen area */}
        <div className="relative overflow-hidden rounded-[34px] bg-white">
          {/* Dynamic island / front camera notch */}
          <div
            className="absolute left-1/2 top-[8px] z-20 -translate-x-1/2 rounded-full bg-black"
            style={{
              width: "66.28px",
              height: "18.139px",
            }}
          >
            <span className="absolute right-[10px] top-1/2 h-[6px] w-[6px] -translate-y-1/2 rounded-full bg-[#1f1f1f] ring-1 ring-white/10" />
          </div>

          {/* Screen image */}
          <img
            src={src}
            alt={alt}
            className="block w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export function Features() {
  const syncYourEmailImage = "/mobile1.png"
  const shareYourClosetImage = "/mobile2.png"
  const talkToStylistImage = "/mobile3.png"
  const forYouMarketImage = "/mobile4.png"

  return (
    <section id="explore" className="w-full bg-white py-24 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="text-center mx-auto mb-16 flex flex-col items-center">
          <h2
            className="text-black mb-6 text-center text-4xl sm:text-5xl md:text-6xl lg:text-[64px]"
            style={{
              maxWidth: "855px",
              fontFamily: "Outfit, sans-serif",
              fontStyle: "normal",
              fontWeight: 500,
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center overflow-hidden rounded-[40px] bg-[#F3F3F3] px-6 md:px-10 py-10 md:py-12 min-h-[500px] md:min-h-[760px]"
          >
            <PhoneFrame
              src={syncYourEmailImage}
              alt="Sync Your Email"
              className="mb-10"
            />

            <div className="w-full flex flex-col items-center">
              <h3
                className="text-black mb-4 text-center"
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "32px",
                }}
              >
                Sync Your Email
              </h3>

              <p
                className="text-black text-center"
                style={{
                  maxWidth: "470px",
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "28px",
                }}
              >
                Build your digital closet in minutes with our patented email scanning, then check back every day at 7PM to see your newest purchases.
              </p>
            </div>
          </motion.div>

          {/* Right Card: Share Your Closet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center text-center overflow-hidden rounded-[40px] bg-[#F3F3F3] px-6 md:px-10 py-10 md:py-12 min-h-[500px] md:min-h-[760px]"
          >
            <div className="w-full flex flex-col items-center">
              <h3
                className="text-black mb-4 mt-2 text-center"
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "32px",
                }}
              >
                Share Your Closet
              </h3>

              <p
                className="text-black text-center mb-12"
                style={{
                  maxWidth: "500px",
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "28px",
                }}
              >
                Make your wardrobe as public as you want. Share your outfits, get inspiration, and build a style community with the people you trust.
              </p>
            </div>

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
            className="flex flex-col items-center text-center overflow-hidden rounded-[40px] bg-[#F3F3F3] px-6 md:px-10 py-10 md:py-12 min-h-[500px] md:min-h-[760px] scroll-mt-28"
          >
            <PhoneFrame
              src={talkToStylistImage}
              alt="Talk to a stylist"
              className="mb-10"
            />

            <div className="w-full flex flex-col items-center">
              <h3
                className="text-black mb-4 text-center"
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "32px",
                }}
              >
                Talk to a stylist
              </h3>

              <p
                className="text-black text-center"
                style={{
                  maxWidth: "520px",
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "28px",
                }}
              >
                Personal styling used to be an ultra luxury. Now it's not. Meet our team of real stylists, here to help you build a wardrobe that works, from lookbooks to brand discovery to dressing for your shape.
              </p>
            </div>
          </motion.div>

          {/* Row 2, Right Card: For You Market */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center text-center overflow-hidden rounded-[40px] bg-[#F3F3F3] px-6 md:px-10 py-10 md:py-12 min-h-[500px] md:min-h-[760px]"
          >
            <div className="w-full flex flex-col items-center">
              <h3
                className="text-black mb-4 mt-2 text-center"
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "32px",
                }}
              >
                For You Market
              </h3>

              <p
                className="text-black text-center mb-12"
                style={{
                  maxWidth: "430px",
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "28px",
                }}
              >
                Shop without the doomscroll. Because Kitme knows your size, your style, and your wardrobe, every item in our marketplace is already curated for you.
              </p>
            </div>

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