"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"



const TESTIMONIALS = [

  {
    image: "/Girl 2.jpg",
    text: "I didn’t realize how much I was overbuying until I started using Kitme. Being able to see and organize everything in my wardrobe in one place has completely changed how I shop. It constantly reminds me of what I already own, which makes it so much easier to style outfits and avoid buying duplicates or things that are too similar. It’s honestly made me more intentional, more creative, and way less wasteful with my closet.",
    name: "Kimia, NYC",
    variant: "long",
  },
  {
    image: "/Girl 3.jpeg",
    text: "Kitme has been a lifesaver for me as a type-A girl who is always on the go! From morning to night, and all the moments in between, I’m able to plan and execute every outfit exactly how I want to.",
    name: "Bella, NYC",
    variant: "centered",
  },
] as const

function TestimonialCard({
  item,
  active,
  onClickNext,
}: {
  item: (typeof TESTIMONIALS)[0]
  active?: boolean
  onClickNext?: () => void
}) {
  const isLongReview = item.variant === "long"

  return (
    <div className="flex-shrink-0 w-full lg:w-[640px] bg-white rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-4 md:p-6 flex flex-col md:flex-row gap-6 md:gap-8 items-stretch relative h-auto md:h-[460px]">
      <div className="w-full md:w-[260px] shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-[300px] md:h-full object-cover rounded-[1.5rem]"
        />
      </div>

      <div
        className={`flex-1 min-w-0 h-full ${isLongReview
          ? "py-2 md:py-3 flex flex-col justify-between"
          : "py-2 md:py-3 flex flex-col justify-center"
          }`}
      >
        {isLongReview ? (
          <>
            <div className="flex-1 flex items-start">
              <p
                className="text-[15px] md:text-[15px] xl:text-[16px] leading-[1.55] font-light tracking-[0.01em]"
                style={{
                  fontFamily: "var(--font-outfit), Outfit, sans-serif",
                  color: "#000",
                  fontStyle: "normal",
                }}
              >
                {item.text}
              </p>
            </div>

            <div className="pt-5 md:pt-6">
              <h4
                className="text-[16px] md:text-[18px] leading-none"
                style={{
                  fontFamily: "var(--font-outfit), Outfit, sans-serif",
                  color: "#000",
                  fontWeight: 500,
                }}
              >
                {item.name}
              </h4>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col justify-center">
            <p
              className="text-[15px] md:text-[16px] xl:text-[17px] leading-[1.6] font-light tracking-[0.01em] mb-6"
              style={{
                fontFamily: "var(--font-outfit), Outfit, sans-serif",
                color: "#000",
                fontStyle: "normal",
              }}
            >
              {item.text}
            </p>

            <h4
              className="text-[16px] md:text-[18px] leading-none"
              style={{
                fontFamily: "var(--font-outfit), Outfit, sans-serif",
                color: "#000",
                fontWeight: 500,
              }}
            >
              {item.name}
            </h4>
          </div>
        )}
      </div>

      {active && (
        <button
          type="button"
          onClick={onClickNext}
          aria-label="Next testimonial"
          className="absolute right-[-15px] md:right-[-20px] top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-20 hover:scale-110 transition-transform active:scale-95"
        >
          <img
            src="/arrow.svg"
            alt=""
            aria-hidden="true"
            className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] object-contain drop-shadow-md"
          />
        </button>
      )}
    </div>
  )
}

function PaginationDots({
  count,
  activeIndex,
  onSelect,
}: {
  count: number
  activeIndex: number
  onSelect: (idx: number) => void
}) {
  return (
    <div className="flex items-center justify-center gap-[14px] mt-8">
      {Array.from({ length: count }).map((_, idx) => {
        const isActive = idx === activeIndex

        return (
          <button
            key={idx}
            type="button"
            aria-label={`Go to testimonial ${idx + 1}`}
            aria-pressed={isActive}
            onClick={() => onSelect(idx)}
            className="relative flex items-center justify-center transition-transform duration-200 hover:scale-105"
          >
            {isActive ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                className="block"
              >
                <circle cx="15" cy="15" r="7.5" fill="#DF7396" stroke="#FFF5F8" />
                <circle cx="15" cy="15" r="14.5" stroke="#FFF5F8" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="block"
              >
                <circle cx="8" cy="8" r="7.5" fill="#D2D2D2" stroke="#FFF5F8" />
              </svg>
            )}
          </button>
        )
      })}
    </div>
  )
}

export function CommunitySection() {
  const [index, setIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const displayItems = useMemo(() => [...TESTIMONIALS, TESTIMONIALS[0]], [])
  const normalizedIndex = index % TESTIMONIALS.length

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setIndex((prev) => prev + 1)
  }

  const handleDotSelect = (targetIndex: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setIndex(targetIndex)
  }

  useEffect(() => {
    if (isAnimating) return

    const timer = setTimeout(() => {
      handleNext()
    }, 3000)

    return () => clearTimeout(timer)
  }, [index, isAnimating])

  return (
    <section
      id="our-stylists"
      className="w-full bg-white py-4 md:py-12 px-6 lg:px-0 overflow-hidden scroll-mt-28"
    >
      <div className="max-w-[1400px] mx-auto w-full lg:pl-16 xl:pl-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-10 md:gap-12 lg:gap-12 w-full">
          {/* Left Column */}
          <div className="w-full lg:w-[42%] flex flex-col items-start text-left shrink-0 pb-4 lg:pb-0">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[32px] sm:text-[44px] md:text-[56px] lg:text-[60px] leading-[1.1] tracking-tight mb-6"
              style={{
                fontFamily: "var(--font-outfit), Outfit, sans-serif",
                color: "#000",
                fontWeight: 400,
              }}
            >
              Style is better when
              <br className="hidden md:block" /> it&apos;s shared
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[16px] md:text-[18px] leading-[1.65] mb-8 md:mb-10 max-w-[500px] font-light"
              style={{
                fontFamily: "var(--font-outfit), Outfit, sans-serif",
                color: "#000000CC",
              }}
            >
              Your wardrobe is worth seeing. Share your looks, find inspiration
              from people you actually know, and make getting dressed easier
            </motion.p>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[58%] relative">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full relative"
            >
              <div className="w-full overflow-hidden pt-4 flex justify-center lg:block">
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                      .carousel-track {
                        --card-width: min(85vw, 640px);
                        --card-gap: 1.5rem;
                        display: flex;
                        gap: var(--card-gap);
                      }

                      @media (min-width: 768px) {
                        .carousel-track {
                          --card-width: 600px;
                          --card-gap: 2rem;
                        }
                      }

                      @media (min-width: 1024px) {
                        .carousel-track {
                          --card-width: 640px;
                          --card-gap: 2rem;
                        }
                      }
                    `,
                  }}
                />

                <div className="w-full">
                  <motion.div
                    className="carousel-track w-max lg:mx-0"
                    animate={{
                      x: `calc(${index} * -1 * (var(--card-width) + var(--card-gap)))`,
                    }}
                    transition={{
                      duration: isAnimating ? 0.65 : 0,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onAnimationComplete={() => {
                      if (index === TESTIMONIALS.length) {
                        setIndex(0)
                      }
                      setIsAnimating(false)
                    }}
                  >
                    {displayItems.map((testimonial, idx) => (
                      <div key={idx} className="w-[var(--card-width)] shrink-0">
                        <TestimonialCard
                          item={testimonial}
                          active={
                            idx === index ||
                            (index === TESTIMONIALS.length && idx === 0)
                          }
                          onClickNext={handleNext}
                        />
                      </div>
                    ))}
                  </motion.div>

                  <PaginationDots
                    count={TESTIMONIALS.length}
                    activeIndex={normalizedIndex}
                    onSelect={handleDotSelect}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}