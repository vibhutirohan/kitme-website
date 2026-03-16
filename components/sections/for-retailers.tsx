"use client"

interface FeatureCardProps {
    title: string
    body: string
    iconSrc: string
}

function FeatureCard({ title, body, iconSrc }: FeatureCardProps) {
    return (
        <div
            className="flex flex-col justify-start items-start p-[24px] pt-[50px] rounded-[32px] bg-[#F7F7F7] h-[320px] relative w-full"
        >
            {/* Icon Badge */}
            <div className="absolute top-[20px] right-[20px] w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center shadow-sm">
                <img src={iconSrc} alt="" className="w-[24px] h-[24px] object-contain" />
            </div>

            {/* Content */}
            <h3
                className="text-[#000000] font-normal text-left mb-[8px] whitespace-pre-line text-[24px] leading-[30px] md:text-[28px] md:leading-[34px] lg:text-[32px] lg:leading-[38px]"
                style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
            >
                {title}
            </h3>
            <p
                className="text-[#000000] font-light text-left text-[14px] leading-[22px] md:text-[15px] md:leading-[24px] lg:text-[15px] lg:leading-[22px]"
                style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
            >
                {body}
            </p>
        </div>
    )
}

export function ForRetailersSection() {
    const features = [
        {
            title: "Hyper\nPersonalized",
            body: "Tell us what you're dressing for and we'll pull together outfits straight from your own closet. Whether it's a wedding, a meeting, or a first date, just ask and we'll handle the rest.",
            iconSrc: "/account-setting-01.svg"
        },
        {
            title: "Always\nFresh",
            body: "A direct line to professional styling expertise and consultations. Our stylists are here to help whenever you have questions.",
            iconSrc: "/phone-check.svg"
        },
        {
            title: "Built for\nConversion",
            body: "Our one-of-a-kind marketplace is curated just for you. Your taste, guaranteed in-stock, in your size, updated every day from Revolve, SSENSE, and Mytheresa.",
            iconSrc: "/thumbs-up.svg"
        }
    ]

    return (
        <section className="w-full bg-white py-[60px] lg:py-[80px] px-6 md:px-12 flex flex-col items-center">
            <div className="max-w-[1400px] mx-auto w-full flex flex-col items-center">
                <div className="flex flex-col items-center text-center mb-[40px] lg:mb-[48px]">
                    <span
                        className="text-[#FF1058] font-medium text-center mb-[12px] text-[16px] leading-[22px] md:text-[20px] md:leading-[24px] lg:text-[24px] lg:leading-[28px]"
                        style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                    >
                        FOR RETAILERS
                    </span>

                    <h2
                        className="text-[#000000] font-medium text-center mb-[12px] max-w-[1300px] text-[24px] leading-[32px] md:text-[40px] md:leading-[48px] lg:text-[52px] lg:leading-[62px]"
                        style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                    >
                        Your customers expect to feel understood. We make that possible at scale.
                    </h2>

                    <p
                        className="text-[#000000] font-medium text-center max-w-[1308px] text-[14px] leading-[20px] md:text-[18px] md:leading-[30px] lg:text-[20px] lg:leading-[32px]"
                        style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                    >
                        Your customers expect to feel understood. We make that possible at scale.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="max-w-[1100px] w-full mx-auto mb-[16px] lg:mb-[20px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[24px] w-full">
                        {features.map((feature, index) => (
                            <FeatureCard key={index} {...feature} />
                        ))}
                    </div>
                </div>

                {/* Brand Trust Row */}
                <div className="w-full mt-0 lg:mt-2 pt-2">
                    <div className="max-w-[1240px] mx-auto w-full flex flex-col lg:flex-row items-center justify-between lg:justify-start lg:flex-nowrap gap-8 lg:gap-[56px]">
                        <h3
                            className="text-[#000000] font-medium text-center lg:text-left text-[24px] leading-[32px] md:text-[34px] md:leading-[52px] lg:text-[40px] lg:leading-[64px] shrink-0 w-full lg:w-auto"
                            style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                        >
                            Trusted by leading{" "}
                            <br className="hidden lg:block" />
                            global retailers
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-[16px] w-full lg:w-auto overflow-hidden lg:overflow-visible no-scrollbar">
                            {[
                                { src: "/revolve.png", alt: "Revolve", logoWidth: "120px", lgLogoWidth: "160px" },
                                { src: "/Ssense.png", alt: "SSENSE", logoWidth: "100px", lgLogoWidth: "130px" },
                                { src: "/Mytheresa.png", alt: "Mytheresa", logoWidth: "140px", lgLogoWidth: "180px" }
                            ].map((logo, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-[#CCCCCC] rounded-[28px] h-[80px] lg:h-[106px] flex items-center justify-center shrink-0 w-full lg:w-[250px]"
                                >
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="object-contain h-auto"
                                        style={{ width: "80%", maxWidth: logo.lgLogoWidth, maxHeight: "30px" }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
