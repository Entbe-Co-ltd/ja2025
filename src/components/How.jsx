import React from 'react';

const How = () => {

    const procedures = [
        { title: '200명의 참가자', desc: '19세 이상의 개발자, 디자이너, 기획자 300명을 글로벌 해커톤, 정션으로 초대합니다! 도전과 혁신의 마인드로 창의적인 아이디어를 구현하고자 하는 열정이 강한 분을 기다립니다.', imageurl: '/images/Junction-1.jpg' },
        { title: '최대 4명의 한 팀', desc: '각 팀은 개발자, 디자이너, 기획자 등을 포함하여 최대 4명까지 구성가능합니다. (최소 인원 제한 없음)', imageurl: '/images/Junction-2.jpg' },
        { title: '팀/개인 지원 모두 가능', desc: 'JUNCTION ASIA 2025는 팀/개인으로 모두 지원 가능합니다. 팀은 팀 전체를 평가하며, 부분 합격은 불가합니다. 개인으로 지원할 경우 본 행사 이전 팀 빌딩을 진행할 예정입니다.', imageurl: '/images/Junction-3.jpg' },
    ];

    return (
        <section className="py-16">
            <div className="w-full px-12">
                <h2 className="section-title text-center">HOW TO APPLY</h2>
            </div>

            <div className="space-y-16 md:space-y-24 px-24 md:px-32 lg:px-48 mt-16">
                {procedures.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} gap-8 md:gap-16`}
                    >
                        {/* Image container */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <div className="w-full aspect-square bg-gray-800 rounded-lg overflow-hidden">
                                {item.imageurl ? (
                                    <img
                                        src={item.imageurl}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                                        Image Placeholder
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-1/2 text-center md:text-left px-4 break-keep">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h3>
                            <p className="text-gray-300 leading-relaxed break-keep">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>



            <div className="mt-16 text-center">
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 text-white font-bold rounded-lg transition-all duration-300 text-lg bg-gradient-to-r from-[#008cd6] via-[#E3007F] to-blue-700 bg-size-200 animate-gradient hover:scale-105"                >
                    참가 신청하기
                </a>

                <div className="mt-8 text-sm text-white/70">
                    <p>* 이번 2025년 행사에 미성년자는 참여가 불가능합니다.</p>
                </div>
            </div>
        </section>
    )
}

export default How;
