"use client"

import { motion } from "framer-motion"
import type { ElementType } from "react"
import { FeaturePill } from "@/components/ui/feature-pill"
import { AppStoreBadges } from "@/components/ui/app-store-badges"

const HERO_FEATURES: {
  icon: ElementType | string
  title: React.ReactNode
  description?: React.ReactNode
  href?: string
}[] = [
    {
      icon: "/mail-validation-01.svg",
      title: "Sync Your Email: Updates your closet automatically at 7p.m EST",
      href: "#sync-your-email",
    },
    {
      icon: "/wardrobe-03.svg",
      title: "Make your closet social: Get inspo from friends and the Kitme community",
      href: "#share-your-closet",
    },
    {
      icon: "/tag-02.svg",
      title: "Find Sales In Your Size: Curated From Your Closet",
      href: "#daily-drops",
    },
    {
      icon: () => (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#BFF7E1"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
      title: "Connect with real stylists for all wardrobe needs",
      href: "#our-stylists",
    },
  ]

const HERO_CONTENT = {
  eyebrow: "",
  headline: {
    line1: "Kitme:",
    line2: "Your Fashion Hub",
  },
  subheadline:
    "For women overwhelmed by closet chaos, Kitme transforms your email receipts into a digital closet experience that saves you time, money, and decision fatigue.",
}

function HeroContent() {
  return (
    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="w-full max-w-[1400px]"
      >
        {HERO_CONTENT.eyebrow && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/70 text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-6"
          >
            {HERO_CONTENT.eyebrow}
          </motion.p>
        )}

        <h1
          className="text-[2.2rem] xs:text-4xl sm:text-5xl md:text-7xl lg:text-[96px] font-medium mb-4 sm:mb-6 leading-[1.2] lg:leading-[115px] tracking-tight lg:tracking-[-1.92px]"
          style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif' }}
        >
          <span className="inline-block sm:mr-3 text-[#F1BFCE]">
            {HERO_CONTENT.headline.line1}
          </span>
          <br className="sm:hidden" />
          <span className="inline-block text-white">
            {HERO_CONTENT.headline.line2}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-[0.95rem] sm:text-base md:text-lg lg:text-xl text-white/90 max-w-[280px] xs:max-w-sm sm:max-w-4xl mx-auto mb-8 sm:mb-10 leading-relaxed font-light"
        >
          {HERO_CONTENT.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <AppStoreBadges variant="dark" />
        </motion.div>
      </motion.div>
    </div>
  )
}

function HeroFeatures() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="px-6 md:px-8 w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-[1400px] mx-auto">
        {HERO_FEATURES.map((feature, index) => (
          <FeaturePill
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            index={index}
            variant="dark"
            href={feature.href}
          />
        ))}
      </div>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative w-full min-h-screen flex flex-col justify-between rounded-bl-[60px] rounded-br-[60px] overflow-hidden scroll-mt-28"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/bg1.png"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover object-[65%_center] sm:object-[center_top] brightness-[0.93] contrast-[0.96] saturate-[0.94]"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/4 via-black/3 to-black/18" />
      </div>

      <div className="absolute top-1/4 left-8 w-32 h-32 bg-white/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-12 w-48 h-48 bg-white/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-10 pb-1 sm:pt-16 sm:pb-2 md:pt-20 md:pb-4">
        <HeroContent />
      </div>

      <div className="relative z-20 pb-4 sm:pb-6 md:pb-8 pt-2">
        <HeroFeatures />
      </div>
    </section>
  )
}