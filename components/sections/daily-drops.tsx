"use client"

import { motion } from "framer-motion"

const CHECKLIST = [
    "Sync Your Closet",
    "We take your size preference",
    "Find daily drops in your size",
    "Get from store",
]

/*
|--------------------------------------------------------------------------
| EDIT PHONE SIZE HERE
|--------------------------------------------------------------------------
| Change only these values whenever you want to make the phones bigger
| or smaller later.
*/
const PHONE_SIZES = {
    mobile: {
        back: "w-[180px]",
        front: "w-[200px]",
        containerHeight: "h-[170px]",
    },
    desktop: {
        back: "md:w-[300px] lg:w-[350px]",
        front: "md:w-[330px] lg:w-[380px]",
        containerHeight: "md:min-h-[400px] lg:min-h-[450px]",
    },
}

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
        <div className={`relative shrink-0 overflow-visible ${className}`}>
            <img
                src={src}
                alt={alt}
                className="relative z-10 block w-full h-auto object-contain select-none pointer-events-none"
            />
        </div>
    )
}

export function DailyDropsSection() {
    const backPhoneImage = "/daily-drops-phone1-mockup.png"
    const frontPhoneImage = "/daily-drops-phone2-mockup.png"

    return (
        <section
            id="daily-drops"
            className="w-full bg-white py-4 md:py-14 px-6 md:px-12 scroll-mt-28"
        >
            <div className="max-w-[1300px] mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-16">
                    {/* Left side */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Mobile layout only */}
                        <div
                            className={`relative mx-auto flex w-full max-w-[350px] items-end justify-center md:hidden ${PHONE_SIZES.mobile.containerHeight}`}
                        >
                            {/* Gray background box */}
                            <div className="absolute left-[15px] right-[15px] top-[20px] bottom-[10px] rounded-[20px] bg-[#f5f5f5]" />

                            {/* Back phone */}
                            <PhoneImage
                                src={backPhoneImage}
                                alt="Daily Drops screen 1"
                                className={`absolute left-[60px] bottom-[10px] z-2 ${PHONE_SIZES.mobile.back}`}
                            />

                            {/* Front phone */}
                            <PhoneImage
                                src={frontPhoneImage}
                                alt="Daily Drops screen 2"
                                className={`absolute right-[25px] bottom-[10px] z-2 ${PHONE_SIZES.mobile.front}`}
                            />
                        </div>

                        {/* Desktop / tablet layout */}
                        <div
                            className={`relative hidden w-full items-end justify-center md:flex ${PHONE_SIZES.desktop.containerHeight}`}
                        >
                            {/* Light background box */}
                            <div className="absolute inset-x-0 bottom-0 top-[26px] lg:top-[40px] rounded-[40px] bg-[#f5f5f5] mx-0 lg:mx-[10px]" />

                            {/* Back phone */}
                            <PhoneImage
                                src={backPhoneImage}
                                alt="Daily Drops screen 1"
                                className={`absolute left-[12%] lg:left-[14%] bottom-[40px] lg:bottom-[2px] z-10 ${PHONE_SIZES.desktop.back}`}
                            />

                            {/* Front phone */}
                            <PhoneImage
                                src={frontPhoneImage}
                                alt="Daily Drops screen 2"
                                className={`absolute right-[8%] lg:right-[12%] bottom-[20px] lg:bottom-[2px] z-20 ${PHONE_SIZES.desktop.front}`}
                            />
                        </div>
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
                            Personalized Daily <br className="hidden sm:block" />
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
                            We&apos;re the only platform that knows what you own in your closet
                            before we recommend what you should add to it.
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