"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import type { MouseEvent } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "#top", label: "Home" },
  { href: "#explore", label: "The App" },
  { href: "#daily-drops", label: "Daily Drops" },
  { href: "#talk-to-a-stylist", label: "Our Stylists" },
  { href: "#faq", label: "FAQ" },
  { href: "#community", label: "Community" },
  { href: "#contact", label: "Contact" },
] as const

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    if (href === "#top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
      return
    }

    const target = document.querySelector(href)
    if (!target) return

    const headerOffset = 110
    const elementTop =
      target.getBoundingClientRect().top + window.pageYOffset - headerOffset

    window.scrollTo({
      top: elementTop,
      behavior: "smooth",
    })
  }

  const handleNavClick = (
    e: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    setMobileMenuOpen(false)

    if (pathname !== "/") {
      router.push(href === "#top" ? "/" : `/${href}`)
      return
    }

    scrollToSection(href)
  }

  return (
    <header className="fixed top-6 left-0 right-0 z-[100] px-4 md:px-8">
      <nav className="mx-auto max-w-[1600px] flex items-center justify-between gap-4">
        {/* Logo - removed outer extra pill layer */}
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, "#top")}
          className="shrink-0 flex items-center justify-center transition-opacity duration-300 hover:opacity-90"
        >
          <img
            src="/kitme frame.svg"
            alt="Kitme"
            className="w-[90px] h-[34px] md:w-[130px] md:h-[44px] object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div
          className={cn(
            "hidden md:flex items-center rounded-full px-2 py-1.5 shadow-lg transition-all duration-300",
            scrolled
              ? "bg-white/95 border border-black/10 backdrop-blur-md"
              : "bg-white/10 border border-white/20 backdrop-blur-[20px]"
          )}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={`${link.label}-${link.href}`}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={cn(
                "px-3 lg:px-6 py-2.5 text-[14px] lg:text-[15px] rounded-[2rem] transition-all duration-300",
                scrolled
                  ? "text-black/80 hover:text-black hover:bg-black/5"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Install App */}
        <Link
          href="#retailers"
          onClick={(e) => handleNavClick(e, "#retailers")}
          className={cn(
            "hidden md:flex rounded-full px-8 py-3.5 text-sm font-medium transition-all duration-300 shadow-lg",
            scrolled
              ? "bg-[#7D3842] text-white hover:bg-[#6d2f38]"
              : "bg-white/12 border border-white/20 text-white backdrop-blur-[20px] hover:bg-white/20"
          )}
        >
          Install App
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={cn(
            "md:hidden rounded-full p-3 shadow-lg transition-all duration-300",
            scrolled
              ? "bg-white/95 border border-black/10 text-black"
              : "bg-white/10 border border-white/20 text-white backdrop-blur-[20px]"
          )}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-4 top-20 rounded-3xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300",
          scrolled
            ? "bg-white/95 border border-black/10 backdrop-blur-md"
            : "bg-white/10 border border-white/20 backdrop-blur-[20px]",
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <ul className="flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <li key={`${link.label}-${link.href}`}>
              <Link
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "block px-4 py-3 text-base rounded-xl transition-colors",
                  scrolled
                    ? "text-black/80 hover:text-black hover:bg-black/5"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}

          <li className="mt-4">
            <Link
              href="#retailers"
              onClick={(e) => handleNavClick(e, "#retailers")}
              className={cn(
                "block w-full text-center rounded-full py-3 font-medium transition-all duration-300",
                scrolled
                  ? "bg-[#7D3842] text-white hover:bg-[#6d2f38]"
                  : "bg-white/12 border border-white/20 text-white backdrop-blur-[20px] hover:bg-white/20"
              )}
            >
              Install App
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}