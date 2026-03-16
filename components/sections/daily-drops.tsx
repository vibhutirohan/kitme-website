"use client"

import { motion } from "framer-motion"

const CHECKLIST = [
    "Sync Your Closet",
    "We take your size preference",
    "Find daily drops in your size",
    "Get from store",
]

function PhoneMockup({
    src,
    alt,
    className = "",
}: {
    src: string
    alt: string
    className?: string
}) {
    return (
        <div className={`relative shrink-0 ${className}`}>
            <div className="relative w-full rounded-[38px] bg-black p-[4px] shadow-[0_18px_35px_rgba(0,0,0,0.28),0_6px_12px_rgba(0,0,0,0.18)]">
                <div className="relative overflow-hidden rounded-[34px] bg-white">
                    <div className="absolute left-1/2 top-[8px] z-20 -translate-x-1/2 rounded-full bg-black w-[66px] h-[18px]">
                        <span className="absolute right-[10px] top-1/2 h-[6px] w-[6px] -translate-y-1/2 rounded-full bg-[#1f1f1f] ring-1 ring-white/10" />
                    </div>

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

export function DailyDropsSection() {
    const backPhoneImage = "/m5.png"
    const frontPhoneImage = "/m6.png"

    return (
        <section id="daily-drops" className="w-full bg-white py-[60px] md:py-[80px] lg:py-[80px] px-6 md:px-12">
            <div className="max-w-[1300px] mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-16">
                    {/* Left side */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative flex items-end justify-center min-h-[380px] md:min-h-[440px] lg:min-h-[480px]"
                    >
                        {/* Light background box */}
                        <div className="absolute inset-x-0 bottom-0 top-[30px] rounded-[36px] bg-[#f5f5f5]" />

                        {/* Back phone */}
                        <PhoneMockup
                            src={backPhoneImage}
                            alt="Daily Drops screen 1"
                            className="absolute hidden lg:block left-[5%] xs:left-[8%] bottom-0 z-10 w-[140px] xs:w-[160px] md:w-[200px] lg:w-[220px]"
                        />

                        {/* Front phone */}
                        <PhoneMockup
                            src={frontPhoneImage}
                            alt="Daily Drops screen 2"
                            className="relative z-20 w-[180px] xs:w-[200px] md:w-[220px] lg:w-[280px] top-[-10px] md:top-[-20px] lg:top-0"
                        />
                    </motion.div>

                    {/* Right side */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.08 }}
                        className="max-w-[500px]"
                    >
                        <h2
                            className="text-black mb-4 text-3xl sm:text-4xl lg:text-[40px]"
                            style={{
                                fontFamily: "var(--font-outfit), Outfit, sans-serif",
                                fontStyle: "normal",
                                fontWeight: 500,
                                lineHeight: "1.2",
                            }}
                        >
                            Personalized Daily{" "}
                            <br className="hidden sm:block" />
                            Drops in your size
                        </h2>

                        <p
                            className="text-black mb-8"
                            style={{
                                fontFamily: "var(--font-outfit), Outfit, sans-serif",
                                fontSize: "17px",
                                fontStyle: "normal",
                                fontWeight: 400,
                                lineHeight: "26px",
                            }}
                        >
                            We&apos;re the only platform that knows what you own in your closet before we recommend what you should add to it.
                        </p>

                        <div className="flex flex-col gap-3">
                            {CHECKLIST.map((item) => (
                                <div key={item} className="flex items-center gap-4">
                                    <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#26354A] shrink-0">
                                        <svg
                                            width="15"
                                            height="12"
                                            viewBox="0 0 18 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1.5 7.5L6 12L16.5 1.5"
                                                stroke="white"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>

                                    <span
                                        style={{
                                            fontFamily: "var(--font-outfit), Outfit, sans-serif",
                                            fontSize: "16px",
                                            fontStyle: "normal",
                                            fontWeight: 400,
                                            lineHeight: "24px",
                                            color: "#000000",
                                        }}
                                    >
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}