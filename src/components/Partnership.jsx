import React from 'react';

const Partnership = () => {
    const partners = [
        { level: "주최", imageUrl: "/images/partners/partner1.png", name: "경상북도" },
        { level: "주관", imageUrl: "/images/partners/partner2.png", name: "포스텍" },
        { level: "track", imageUrl: "/images/partners/partner3.png", name: "Microsoft" },
        { level: "track", imageUrl: "/images/partners/partner4.png", name: "YBM" },
        { level: "track", imageUrl: "/images/partners/partner5.png", name: "업스테이지" },
        { level: "track", imageUrl: "/images/partners/partner6.png", name: "산업의역군" },
        { level: "booth", imageUrl: "/images/partners/partner7.png", name: "카이스트 창업원" },
        { level: "booth", imageUrl: "/images/partners/partner8.png", name: "그룹바이" },
        { level: "booth", imageUrl: "/images/partners/partner9.png", name: "지금랩" },
        { level: "booth", imageUrl: "/images/partners/partner10.png", name: "레드불" },
    ];

    // Group partners by level
    const partnersByLevel = partners.reduce((acc, partner) => {
        if (!acc[partner.level]) {
            acc[partner.level] = [];
        }
        acc[partner.level].push(partner);
        return acc;
    }, {});

    // Order of partner levels for display
    const levelOrder = ["주최", "주관", "track", "booth"];

    return (
        <section className="py-16">
            <div className="w-full px-4 md:px-12">
                <h2 className="section-title text-center">PARTNERSHIP</h2>

                <div className="mt-16 space-y-16">
                    {levelOrder.map((level) => (
                        partnersByLevel[level] && (
                            <div key={level} className="mb-12">
                                <h3 className="text-center text-xl md:text-2xl font-bold mb-8 uppercase">
                                    {level === "track" ? "Track Partners" :
                                        level === "booth" ? "Booth Partners" : level}
                                </h3>

                                <div className={`grid gap-8 justify-items-center ${level === "주최" || level === "주관"
                                    ? partnersByLevel[level].length === 1
                                        ? "grid-cols-1"
                                        : partnersByLevel[level].length === 2
                                            ? "grid-cols-1 sm:grid-cols-2"
                                            : partnersByLevel[level].length === 3
                                                ? "grid-cols-1 sm:grid-cols-3"
                                                : "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
                                    : partnersByLevel[level].length === 1
                                        ? "grid-cols-1"
                                        : partnersByLevel[level].length === 2
                                            ? "grid-cols-1 sm:grid-cols-2"
                                            : partnersByLevel[level].length === 3
                                                ? "grid-cols-1 sm:grid-cols-3"
                                                : "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
                                    }`}>
                                    {partnersByLevel[level].map((partner, idx) => (
                                        <div
                                            key={idx}
                                            className={`flex flex-col items-center justify-center w-full ${level === "주최" || level === "주관"
                                                ? "max-w-xs mx-auto" // Add a maximum width for larger logos
                                                : ""
                                                }`}
                                        >
                                            <div className="bg-neutral-800 rounded-lg p-4 w-full aspect-[3/2] flex items-center justify-center">
                                                {partner.imageUrl ? (
                                                    <img
                                                        src={partner.imageUrl}
                                                        alt={partner.name}
                                                        className="max-w-full max-h-full object-contain"
                                                    />
                                                ) : (
                                                    <div className="text-gray-500 text-center">
                                                        {partner.name} Logo
                                                    </div>
                                                )}
                                            </div>
                                            <p className="mt-2 text-sm text-center">{partner.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-lg mb-6">함께하고 싶으신가요?</p>
                    <a
                        href="mailto:asia.partnership@hackjunction.com"
                        className="inline-block px-8 py-4 text-white font-bold rounded-lg transition-all duration-300 text-lg bg-gradient-to-r from-blue-500 via-[#008cd6] to-blue-700 bg-size-200 animate-gradient hover:scale-105"
                    >
                        파트너십 문의하기
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Partnership;
