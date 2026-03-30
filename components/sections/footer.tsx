"use client"

import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"


const FOOTER_LINKS = [
  { href: "#explore", label: "Explore" },
  { href: "#solution", label: "Solution" },
  { href: "#daily-drops", label: "Daily Drops" },
  { href: "#faq", label: "FAQ" },
  { href: "#our-stylists", label: "Community" },
  { href: "#contact", label: "Contact" },
] as const

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "#",
    icon: Instagram,
  },
  {
    label: "TikTok",
    href: "#",
    icon: () => (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: Linkedin,
  },
] as const

const BRAND = {
  name: "KITME",
  tagline: "Your Fashion Hub",
  copyright: "KITME - All rights reserved | Terms & Privacy Policy",
}


import { AppStoreBadges } from "@/components/ui/app-store-badges"

export function Footer() {
  return (
    <footer id="download" className="w-full bg-[#FCF6F8] pt-6 pb-4 md:pt-14 md:pb-8 px-6 md:px-12 text-black font-sans scroll-mt-28">
      <div className="max-w-[1280px] mx-auto w-full flex flex-col">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 md:mb-16 gap-16">
          {/* Left: Tagline and Badges */}
          <div className="flex flex-col gap-8">
            <h2 className="font-sans text-[36px] xs:text-[48px] md:text-[64px] lg:text-[76px] font-medium tracking-tight leading-none text-black">
              Your Fashion Hub
            </h2>
            <AppStoreBadges variant="dark" className="justify-start gap-4 mt-2" />
          </div>

          {/* Right: Social Links */}
          <div className="flex flex-col gap-4 text-left md:text-right pt-2 md:mr-10">
            <a href="https://www.instagram.com/trykitme/" target="_blank" rel="noopener noreferrer" className="text-black text-[20px] font-medium hover:opacity-70 transition-opacity">
              Instagram
            </a>
            <a href="https://www.tiktok.com/@trykitme?lang=en-GB&is_from_webapp=1&sender_device=mobile&sender_web_id=7615638099200378382" target="_blank" rel="noopener noreferrer" className="text-black text-[20px] font-medium hover:opacity-70 transition-opacity">
              Tiktok
            </a>
            <a href="https://www.linkedin.com/company/kitme/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-black text-[20px] font-medium hover:opacity-70 transition-opacity">
              Linkedin
            </a>
          </div>
        </div>

        {/* Middle Section: Logo and Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-end gap-10 mb-8">
          {/* Left: Logo */}
          <div>
            <img
              src="/KITME_LOGO 1.png"
              alt="Kitme Logo"
              className="h-[30px] md:h-[35px] w-auto object-contain"
            />
          </div>

          {/* Right: Nav Links */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 md:pb-3">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[15px] font-medium text-black hover:opacity-70 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-black my-8" />

        {/* Bottom Section: Copyright */}
        <div className="flex justify-center text-center">
          <p className="text-[14px] md:text-[15px] text-black font-medium tracking-wide">
            © 2025 Kitme, Inc. All rights reserved. &nbsp;|&nbsp; New York, USA &nbsp;|&nbsp; Stockholm, Sweden
          </p>
        </div>

      </div>
    </footer>
  )
}
