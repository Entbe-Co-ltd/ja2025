import React, { useState } from 'react';

const OurValue = () => {

    const values = [
        { imageUrl1: '/images/break1.png', imageUrl2: '/images/break2.png', url:'https://eu.junctionplatform.com/events/junction-asia-2025' },
        { imageUrl1: '/images/rebuild1.png', imageUrl2: '/images/rebuild2.png', url:'https://eu.junctionplatform.com/events/junction-asia-2025' },
        { imageUrl1: '/images/imagine1.png', imageUrl2: '/images/imagine2.png', url:'https://eu.junctionplatform.com/events/junction-asia-2025' }
    ];

    // Create an array of hover states for each card
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className="py-16">
            <div className="w-full px-12">
                <h2 className="section-title text-center">OUR VALUE</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center mb-12 sm:mb-0 cursor-pointer"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="flex justify-center">
                                <div className="rounded-lg overflow-hidden"
                                onClick={() => window.open(value.url, '_blank')}>
                                    <img
                                        src={hoveredIndex === index ? value.imageUrl2 : value.imageUrl1}
                                        alt={`Value ${index + 1}`}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurValue;
