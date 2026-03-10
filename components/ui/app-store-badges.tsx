"use client"

import { cn } from "@/lib/utils"

interface AppStoreBadgesProps {
  variant?: "light" | "dark"
  className?: string
}

export function AppStoreBadges({
  variant = "dark",
  className,
}: AppStoreBadgesProps) {
  const isLight = variant === "light"

  const badgeClasses = cn(
    "group relative overflow-hidden rounded-2xl transition-transform hover:scale-105 duration-300"
  )

  const innerClasses = cn(
    "rounded-[14px] px-5 py-2.5 flex items-center gap-3 transition-all duration-300",
    isLight
      ? "bg-foreground text-background hover:bg-foreground/90"
      : "bg-black border border-white/20 text-white hover:bg-black/80"
  )

  const iconClasses = cn(
    isLight ? "text-background" : "text-white"
  )

  const labelClasses = cn(
    "text-[10px] font-medium tracking-wide mb-0.5",
    isLight ? "text-background/80" : "text-white/80"
  )

  const titleClasses = cn(
    "font-semibold text-lg leading-none",
    isLight ? "text-background" : "text-white"
  )

  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-4", className)}>
      <a
        href="#"
        className={badgeClasses}
        aria-label="Download on the App Store"
      >
        <div className={innerClasses}>
          <svg className={cn("w-7 h-7", iconClasses)} viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          <div className="text-left">
            <p className={labelClasses}>Download on the</p>
            <p className={titleClasses}>App Store</p>
          </div>
        </div>
      </a>
      <a
        href="#"
        className={badgeClasses}
        aria-label="Get it on Google Play"
      >
        <div className={innerClasses}>
          <img src="/Google Play logo.svg" alt="Google Play" className="w-5 h-5 object-contain" />
          <div className="text-left">
            <p className={labelClasses}>GET IT ON</p>
            <p className={titleClasses}>Google Play</p>
          </div>
        </div>
      </a>
    </div>
  )
}
