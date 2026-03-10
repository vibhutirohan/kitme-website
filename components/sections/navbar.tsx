"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// ============================================================================
// DATA - Edit these to customize the navigation
// ============================================================================

const NAV_LINKS = [
  { href: "#explore", label: "Explore" },
  { href: "#solution", label: "Solution" },
  { href: "#daily-drops", label: "Daily Drops" },
  { href: "#faq", label: "FAQ" },
  { href: "#community", label: "Community" },
  { href: "#contact", label: "Contact" },
] as const

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after scrolling past hero section
      setScrolled(window.scrollY > window.innerHeight - 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 transition-all duration-500",
        scrolled
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      )}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between gap-4">
        {/* Logo Pill */}
        <div className="glass-pill rounded-full px-5 py-2.5 shadow-lg">
          <Link
            href="/"
            className="font-serif text-xl font-semibold tracking-wide text-foreground"
          >
            KITME
          </Link>
        </div>

        {/* Desktop Nav Pills */}
        <div className="hidden lg:flex glass-pill rounded-full px-2 py-1.5 shadow-lg">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-full hover:bg-white/50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Install App Button */}
        <div className="hidden lg:block">
          <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2.5 h-auto font-medium shadow-lg">
            <Link href="#retailers">Install App</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden glass-pill rounded-full p-2.5 shadow-lg"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-4 top-20 glass rounded-3xl p-6 transition-all duration-300 shadow-xl",
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <ul className="flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-white/50 rounded-xl transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-4">
            <Button asChild className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 h-auto font-medium">
              <Link href="#retailers" onClick={() => setMobileMenuOpen(false)}>
                Install App
              </Link>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  )
}
