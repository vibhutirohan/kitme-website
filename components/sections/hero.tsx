"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mail, Users, Tag, MessageCircle, LucideIcon } from "lucide-react"
import { FeaturePill } from "@/components/ui/feature-pill"
import { AppStoreBadges } from "@/components/ui/app-store-badges"

// ============================================================================
// DATA - Edit these to customize the hero section
// ============================================================================

const NAV_PILLS = [
  { href: "#explore", label: "Explore" },
  { href: "#solution", label: "Solution" },
  { href: "#daily-drops", label: "Daily Drops" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const

const HERO_FEATURES: { icon: React.ElementType | string; title: string; description: string }[] = [
  {
    icon: "/mail-validation-01.svg",
    title: "Sync Your Email:",
    description: "Updates your closet automatically.",
  },
  {
    icon: "/wardrobe-03.svg",
    title: "Share Your Closet",
    description: "with Community and Friends",
  },
  {
    icon: "/tag-02.svg",
    title: "Find Sale Items in Your Size:",
    description: "Fabricated for you.",
  },
  {
    icon: () => (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F5B041" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    title: "Connect with stylist",
    description: "and get their consultation.",
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

// ============================================================================
// COMPONENTS
// ============================================================================

function HeroNavigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="absolute top-6 left-0 right-0 z-50 px-6 md:px-8 lg:px-12 w-full max-w-[1600px] mx-auto"
    >
      <div className="flex items-center justify-between w-full">
        <Link
          href="/"
          className="shrink-0 transition-opacity hover:opacity-80 flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 rounded-[3rem] px-6 py-2 shadow-lg"
        >
          <img
            src="/kitme logo.svg"
            alt="Kitme"
            className="w-[90px] h-[34px] md:w-[130px] md:h-[44px] object-contain"
          />
        </Link>

        {/* Nav Pills */}
        <div className="hidden md:flex bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-[3rem] px-1.5 py-1.5">
          {NAV_PILLS.map((pill) => (
            <Link
              key={pill.href}
              href={pill.href}
              className="px-6 py-2.5 text-[15px] font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-[2rem] transition-all duration-300"
            >
              {pill.label}
            </Link>
          ))}
        </div>

        {/* Install Button */}
        <Link
          href="#"
          className="bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-[3rem] px-8 py-3.5 text-sm font-medium hover:bg-white/30 transition-all duration-300"
        >
          Install App
        </Link>
      </div>
    </motion.nav>
  )
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
        {/* Eyebrow Removed */}
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

        {/* Main Headline */}
        <h1 className="font-sans text-5xl md:text-6xl lg:text-[5.5rem] font-semibold mb-6 leading-[1.1] tracking-tight">
          <span className="inline-block mr-3 text-[#fad4dc]">{HERO_CONTENT.headline.line1}</span>
          <span className="inline-block text-white">{HERO_CONTENT.headline.line2}</span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base md:text-lg lg:text-xl text-white/90 max-w-4xl mx-auto mb-10 leading-relaxed font-light"
        >
          {HERO_CONTENT.subheadline}
        </motion.p>

        {/* App Store Badges */}
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
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            index={index}
            variant="dark"
          />
        ))}
      </div>
    </motion.div>
  )
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Background and Overlays */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Frame 1618872965.png"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover object-[center_top]"
        />

        {/* Subtle Overlays to match the reddish tint from the PDF */}
        <div className="absolute inset-0 bg-[#4a101f]/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#8B4A5E]/30 via-[#5a3a41]/20 to-[#1a0b0d]/60" />
      </div>
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-32 h-32 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-12 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      {/* Navigation */}
      <HeroNavigation />

      {/* Content wrapper to center content and leave space for pills */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-24 pb-8">
        <HeroContent />
      </div>

      {/* Feature Pills */}
      <div className="relative z-20 pb-12 pt-4">
        <HeroFeatures />
      </div>
    </section>
  )
}
