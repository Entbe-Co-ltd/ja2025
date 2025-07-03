import React, { useState } from 'react';

const Faq = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const questions = [
        { category: "참가신청", question: "JUNCTION ASIA 2025는 어떻게 신청하나요?", answer: "아래 JUNCTION PLATFORM 내 신청 홈페이지에서 신청서 및 소정의 질문에 대한 답변을 작성하면 신청이 완료됩니다." },
        { category: "참가신청", question: "JUNCTION ASIA 2025에는 누가 참가할 수 있나요?", answer: "글로벌 해커톤에 관심있는 고등학생, 대학생, 일반인 개발자, 디자이너, 기획자라면 누구나 참가 가능합니다." },
        { category: "참가신청", question: "혼자 참여하는 것도 가능할까요?", answer: "개별 신청은 가능하지만, 한 팀 당 최소 1명 이상의 개발자, 디자이너, 기획자가 포함되어야하며, 추후 팀 빌딩 세션을 통해 새로운 팀원을 만나볼 수 있습니다!" },
        { category: "참가신청", question: "팀 단위로 지원이 가능할까요?", answer: "가능합니다! 한 팀 당 최대 5인까지 참가 가능하며, 최소 1명 이상의 개발자, 디자이너, 기획자가 포함되어야합니다. 다만, 팀 단위 지원 시 개인별 평가가 아닌, 팀단위 평가로 일부 합격은 불가능하니, 이 점 참고하시기 바랍니다." },
        { category: "팀빌딩", question: "해커톤 진행 시 팀으로 진행하고 싶은데, 지원할 때 팀을 아직 구성하지 않았으면 어떻게 해야하나요?", answer: "최종 합격 이후 팀빌딩 세션이 대회전에 온라인으로 진행됩니다." },
        { category: "참가자 선발", question: "JUNCTION ASIA 2025는 선착순으로 뽑나요?", answer: "아닙니다! 작성해주신 신청서 및 답변을 토대로 심사를 진행하여 200여 명의 개발자, 디자이너, 기획자를 선발합니다." },
        { category: "기타", question: "JUNCTION ASIA 2025의 참가 비용이 있나요?", answer: "없습니다! 해커톤에 대한 열정과 의지만 가지고 오시면 됩니다." },
        { category: "기타", question: "JUNCTION ASIA 2025에 참석 시, 포항까지의 이동 요금을 지원해주나요?", answer: "포항까지의 이동 요금은 개별부담이고, 식사 및 간식 등 만 지원됩니다." },
        { category: "기타", question: "프로젝트의 지적 재산권(IP)은 누가 소유하나요?", answer: "프로젝트의 지적 재산권(IP)는 프로젝트를 기획, 개발, 디자인 한 팀에게 돌아가며, JUNCTION ASIA는 지적 재산권을 갖지 않습니다." },
    ];

    // Group questions by category
    const questionsByCategory = questions.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    // Order categories
    const categoryOrder = ["참가신청", "팀빌딩", "참가자 선발", "기타"];

    // Toggle question
    const toggleQuestion = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    return (
        <section className="py-16">
            <div className="w-full px-4 md:px-12 lg:px-24">
                <h2 className="section-title text-center mb-16">FAQ</h2>

                <div className="max-w-3xl mx-auto">
                    {categoryOrder.map((category) => (
                        questionsByCategory[category] && (
                            <div key={category} className="mb-12">
                                <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-700">{category}</h3>

                                <div className="space-y-4">
                                    {questionsByCategory[category].map((item, index) => {
                                        const questionId = `${category}-${index}`;
                                        return (
                                            <div key={questionId} className="border border-gray-700 rounded-lg overflow-hidden">
                                                <button
                                                    className="w-full text-left p-4 flex justify-between items-center hover:bg-neutral-800 transition-colors duration-200"
                                                    onClick={() => toggleQuestion(questionId)}
                                                    aria-expanded={activeQuestion === questionId}
                                                >
                                                    <span className="font-medium text-sm md:text-base">{item.question}</span>
                                                    <svg
                                                        className={`w-5 h-5 transition-transform duration-300 ${activeQuestion === questionId ? 'transform rotate-180' : ''}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>

                                                <div
                                                    className={`overflow-hidden transition-all duration-300 ${activeQuestion === questionId ? 'max-h-96 p-4 pt-0' : 'max-h-0'
                                                        }`}
                                                >
                                                    <div className="text-sm md:text-base text-gray-300 pt-2 pb-2 border-t border-gray-700 mt-0 break-keep">
                                                        {item.answer}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )
                    ))}
                    <div className="mt-16 text-center">
                        <p className="text-lg mb-6">자세한 내용이 궁금하시다면?</p>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-4 text-white font-bold rounded-lg transition-all duration-300 text-lg bg-gradient-to-r from-blue-500 via-[#008cd6] to-blue-700 bg-size-200 animate-gradient hover:scale-105"                >
                            가이드북 확인하기
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;