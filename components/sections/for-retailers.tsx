"use client"

interface FeatureCardProps {
    title: string
    body: string
    iconSrc: string
}

function FeatureCard({ title, body, iconSrc }: FeatureCardProps) {
    return (
        <div className="flex flex-col justify-start items-start p-[36px] pt-[90px] rounded-[32px] bg-[#F7F7F7] h-[320px] relative w-full">
            <div className="absolute top-[24px] right-[24px] w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center shadow-sm">
                <img src={iconSrc} alt="" className="w-[24px] h-[24px] object-contain" />
            </div>

            <h3
                className="text-[#000000] font-normal text-left mb-[12px] whitespace-pre-line text-[28px] leading-[34px] md:text-[32px] md:leading-[38px] lg:text-[36px] lg:leading-[42px] min-h-[70px] md:min-h-[80px] lg:min-h-[90px]"
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
            iconSrc: "/account-setting-01.svg",
        },
        {
            title: "Always\nFresh",
            body: "A direct line to professional styling expertise and consultations. Our stylists are here to help whenever you have questions.",
            iconSrc: "/phone-check.svg",
        },
        {
            title: "Built for\nConversion",
            body: "Our one-of-a-kind marketplace is curated just for you. Your taste, guaranteed in-stock, in your size, updated every day from Revolve, SSENSE, and Mytheresa.",
            iconSrc: "/thumbs-up.svg",
        },
    ]

    return (
        <section id="retailers" className="w-full bg-white py-4 lg:py-14 px-6 md:px-12 flex flex-col items-center scroll-mt-28">
            <div className="max-w-[1400px] mx-auto w-full flex flex-col items-center">
                <div className="flex flex-col items-center text-center mb-4 lg:mb-10 w-full">
                    <span
                        className="text-[#FF1058] font-medium text-center mb-[12px] text-[16px] leading-[22px] md:text-[20px] md:leading-[24px] lg:text-[24px] lg:leading-[28px]"
                        style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                    >
                        FOR RETAILERS
                    </span>

                    <div className="w-full max-w-[1180px] mx-auto">
                        <h1
                            className="text-[#000000] font-medium text-center mb-[10px] tracking-[-0.02em] text-[28px] leading-[25px] sm:text-[36px] sm:leading-[44px] md:text-[35px] md:leading-[56px] lg:text-[40px] lg:leading-[1.08]"
                            style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                        >
                            <span className="hidden lg:block whitespace-nowrap">
                                Your customers expect to feel understood. We
                            </span>
                            <span className="hidden lg:block whitespace-nowrap">
                                make that possible at scale.
                            </span>

                            <span className="hidden md:block lg:hidden">
                                Your customers expect to feel understood. We make at possible
                                that scale.
                            </span>

                            <span className="md:hidden">
                                Your customers expect to feel understood. We make that possible
                                at scale.
                            </span>
                        </h1>
                    </div>

                    <p
                        className="text-[#000000] font-normal text-center max-w-[760px] text-[14px] leading-[20px] md:text-[18px] md:leading-[28px] lg:text-[20px] lg:leading-[32px]"
                        style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                    >
                        Your customers expect to feel understood. We make that possible at
                        scale.
                    </p>
                </div>

                <div className="max-w-[1100px] w-full mx-auto mb-[16px] lg:mb-[20px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[24px] w-full">
                        {features.map((feature, index) => (
                            <FeatureCard key={index} {...feature} />
                        ))}
                    </div>
                </div>

                <div className="w-full mt-0 lg:mt-2 pt-2">
                    <div className="max-w-[1100px] mx-auto w-full flex flex-col lg:flex-row items-center lg:items-center justify-between lg:justify-start lg:flex-nowrap gap-6 lg:gap-[28px]">
                        <h3
                            className="text-[#000000] font-medium text-center lg:text-left text-[18px] leading-[28px] md:text-[22px] md:leading-[32px] lg:text-[24px] lg:leading-[36px] shrink-0 w-full lg:w-[240px]"
                            style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                        >
                            Trusted by leading{" "}
                            <br className="hidden lg:block" />
                            global retailers
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-[14px] w-full lg:w-auto overflow-hidden lg:overflow-visible no-scrollbar">
                            {[
                                {
                                    src: "/revolve.png",
                                    alt: "Revolve",
                                    boxClass: "lg:w-[255px] lg:h-[55px]",
                                    lgLogoWidth: "150px",
                                },
                                {
                                    src: "/Ssense.png",
                                    alt: "SSENSE",
                                    boxClass: "lg:w-[265px] lg:h-[55px]",
                                    lgLogoWidth: "130px",
                                },
                                {
                                    src: "/Mytheresa.png",
                                    alt: "Mytheresa",
                                    boxClass: "lg:w-[255px] lg:h-[55px]",
                                    lgLogoWidth: "150px",
                                },
                            ].map((logo, index) => (
                                <div
                                    key={index}
                                    className={`bg-white border border-[#CCCCCC] rounded-[20px] h-[72px] flex items-center justify-center shrink-0 w-full ${logo.boxClass}`}
                                >
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="object-contain h-auto"
                                        style={{
                                            width: "80%",
                                            maxWidth: logo.lgLogoWidth,
                                            maxHeight: "26px",
                                        }}
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