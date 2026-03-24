"use client"

import { motion } from "framer-motion"

const CHECKLIST = [
    "Sync Your Closet",
    "We take your size preference",
    "Find daily drops in your size",
    "Get from store",
]

function PhoneImage({
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
            <img
                src={src}
                alt={alt}
                className="block w-full h-auto object-contain"
            />
        </div>
    )
}

export function DailyDropsSection() {
    const backPhoneImage = "/daily drops phone2.png"
    const frontPhoneImage = "/daily drops phone1.png"

    return (
        <section id="daily-drops" className="w-full bg-white py-6 md:py-14 px-6 md:px-12 scroll-mt-28">
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
                        <div className="absolute inset-x-0 bottom-0 top-[85px] rounded-[30px] bg-[#f5f5f5]" />

                        {/* Back phone - visible on all breakpoints */}
                        <PhoneImage
                            src={backPhoneImage}
                            alt="Daily Drops screen 1"
                            className="absolute left-[8%] xs:left-[12%] md:left-[15%] lg:left-[5%] bottom-0 z-10 w-[120px] xs:w-[140px] md:w-[180px] lg:w-[240px]"
                        />

                        {/* Front phone - visible on all breakpoints */}
                        <PhoneImage
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
                                    <img
                                        src="/checkmark-circle-04.svg"
                                        alt="Check"
                                        className="h-8 w-8 shrink-0"
                                    />

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