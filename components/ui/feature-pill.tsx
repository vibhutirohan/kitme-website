"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface FeaturePillProps {
  icon: React.ElementType | string
  title: string
  description: string
  index?: number
  className?: string
  variant?: "light" | "dark"
  href?: string
}

export function FeaturePill({
  icon: Icon,
  title,
  description,
  index = 0,
  className,
  variant = "dark",
  href,
}: FeaturePillProps) {
  const isLight = variant === "light"

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 100; // Account for sticky header
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  const Component = href ? motion.a : motion.div

  return (
    <Component
      href={href}
      onClick={href ? handleClick as any : undefined}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
      className={cn(
        "group relative rounded-[40px] px-5 py-5 md:py-6 min-h-[100px] flex items-center justify-start transition-all duration-300 cursor-pointer shadow-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#D49AAA] focus:ring-offset-2 active:scale-95",
        isLight
          ? "bg-white border border-gray-100 hover:shadow-xl hover:-translate-y-1"
          : "hover:opacity-90 hover:shadow-2xl hover:-translate-y-1",
        className
      )}
      style={{
        borderRadius: '40px',
        border: !isLight ? '1px solid rgba(255, 255, 255, 0.24)' : undefined,
        background: !isLight ? 'rgba(233, 233, 233, 0.24)' : undefined,
        backdropFilter: !isLight ? 'blur(25px)' : undefined,
      }}
    >
      {!isLight && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-[40px]" style={{ zIndex: 0 }}>
          <defs>
            <filter id={`filter_noise_${index}`} x="-50%" y="-50%" width="200%" height="200%" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feTurbulence type="fractalNoise" baseFrequency="5 5" stitchTiles="stitch" numOctaves="3" result="noise" seed="5164" />
              <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
              <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " />
              </feComponentTransfer>
              <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
              <feFlood floodColor="rgba(0, 0, 0, 0.13)" result="color1Flood" />
              <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
              <feMerge>
                <feMergeNode in="shape" />
                <feMergeNode in="color1" />
              </feMerge>
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="transparent" filter={`url(#filter_noise_${index})`} />
        </svg>
      )}
      <div className="relative z-10 flex items-center gap-5 w-full">
        {/* Icon */}
        <div className="flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          {typeof Icon === "string" ? (
            <img src={Icon} alt="" className="w-10 h-10 md:w-11 md:h-11 object-contain drop-shadow-sm" />
          ) : (
            <Icon
              className={cn(
                "w-10 h-10 md:w-11 md:h-11",
                isLight ? "text-primary" : "text-white"
              )}
            />
          )}
        </div>

        {/* Text Content */}
        <div className="flex flex-col flex-1 pr-1">
          <p
            className={cn(
              "text-[15px] md:text-[16px] leading-[1.3]",
              isLight ? "text-foreground" : "text-white"
            )}
            style={{
              fontFamily: 'var(--font-outfit), Outfit, sans-serif',
              fontWeight: 400,
            }}
          >
            {title}{description ? ` ${description}` : ''}
          </p>
        </div>
      </div>
    </Component>
  )
}
