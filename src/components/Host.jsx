import React from 'react';

const Host = () => {
    const entbe = [
        { title: "Walk with ChangeMakers!", desc: "앙트비는 세상을 변화시키는 Change Maker를 키우는 회사입니다. 앙트비는 기업가정신과 미래기술 교육을 전문으로 하는 에듀테크 기업입니다. 사람들이 세상을 변화시키는데 필요한 역량을 함께 길러나갑니다. 앙트비는 세상을 더 나은 곳으로 만들기 위해 노력하고 있습니다.", imageurl: "/images/entbe-logo.png" },
    ];

    return (
        <section className="py-16 bg-neutral-800">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <h2 className="section-title text-center mb-16">HOSTED BY ENTBE</h2>
                
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 max-w-5xl mx-auto">
                    {/* Logo Column */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="p-8 rounded-lg w-full max-w-xs">
                            <img 
                                src={entbe[0].imageurl} 
                                alt="Entbe Logo" 
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                    
                    {/* Content Column */}
                    <div className="w-full md:w-2/3">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">{entbe[0].title}</h3>
                        <div className="h-1 w-16 bg-blue-500 mb-6"></div>
                        <p className="text-gray-200 leading-relaxed whitespace-pre-line">
                            {entbe[0].desc}
                        </p>
                        
                        {/* <div className="mt-8">
                            <a 
                                href="https://entbe.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                웹사이트 방문하기
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Host;