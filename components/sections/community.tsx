"use client"

import { useState, type CSSProperties } from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

// ============================================================================
// DATA
// ============================================================================

const TESTIMONIALS = [
  {
    image: "/Girl 1.png",
    text: "With the Kitme community, your closet becomes part of something bigger. Browse real wardrobes, see how friends and creators style their looks, and draw inspiration from people you love.",
    name: "Anton de Swardt",
  },
]

// ============================================================================
// COMPONENTS
// ============================================================================

function TestimonialCard({
  item,
  active,
  onClickNext,
}: {
  item: typeof TESTIMONIALS[0]
  active?: boolean
  onClickNext?: () => void
}) {
  return (
    <div className="flex-shrink-0 w-full lg:w-[640px] bg-white rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-4 flex flex-col md:flex-row gap-6 md:gap-8 items-center relative h-auto">
      <img
        src={item.image}
        alt={item.name}
        className="w-full md:w-[260px] h-[300px] md:h-[320px] object-cover rounded-[1.5rem]"
      />

      <div className="flex-1 py-4 md:py-8 pr-4 md:pr-10 flex flex-col justify-center">
        <p
          className="text-[15px] md:text-[17px] leading-[1.6] mb-8 font-light tracking-wide"
          style={{
            fontFamily: "var(--font-outfit), Outfit, sans-serif",
            color: "#000",
          }}
        >
          {item.text}
        </p>

        <h4
          className="mb-1.5 text-[16px] md:text-[18px]"
          style={{
            fontFamily: "var(--font-outfit), Outfit, sans-serif",
            color: "#000",
            fontWeight: 500,
          }}
        >
          {item.name}
        </h4>

        <div className="flex gap-1 text-[#F5C518]">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-4 h-4 md:w-5 md:h-5 fill-current" />
          ))}
        </div>
      </div>

      {/* Floating Arrow Control */}
      {active && (
        <button
          type="button"
          onClick={onClickNext}
          aria-label="Next testimonial"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 hidden md:flex items-center justify-center z-10 hover:scale-105 transition-transform"
        >
          <img
            src="/arrow.svg"
            alt=""
            aria-hidden="true"
            className="w-[40px] h-[40px] object-contain"
          />
        </button>
      )}
    </div>
  )
}

export function CommunitySection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  return (
    <section
      id="our-stylists"
      className="w-full bg-white py-20 px-6 lg:px-0 overflow-hidden scroll-mt-28"
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
              <div className="w-full overflow-hidden pb-10 pt-4 flex justify-center lg:block">
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                      .carousel-track {
                        --card-width: 85vw;
                        --card-gap: 1.5rem;
                        transform: translateX(calc(var(--active-index) * -1 * (var(--card-width) + var(--card-gap))));
                        transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
                      }

                      @media (min-width: 768px) {
                        .carousel-track {
                          --card-width: 600px;
                          --card-gap: 2rem;
                        }
                      }
                    `,
                  }}
                />

                <div
                  className="carousel-track flex gap-6 md:gap-10 w-max mx-auto lg:mx-0"
                  style={{ "--active-index": activeIndex } as CSSProperties}
                >
                  {TESTIMONIALS.map((testimonial, idx) => (
                    <div
                      key={idx}
                      className="w-[85vw] md:w-[600px] lg:w-[640px] shrink-0 pointer-events-auto"
                    >
                      <TestimonialCard
                        item={testimonial}
                        active={idx === activeIndex}
                        onClickNext={handleNext}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}