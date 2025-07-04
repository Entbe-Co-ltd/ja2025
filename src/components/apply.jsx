import junction1 from '../assets/images/junction1.jpg';
import junction2 from '../assets/images/junction2.jpg';
import junction3 from '../assets/images/junction3.jpg';

const information =[
    {
        title: "200 Participants",
        description: "We invite 200 developers, designers and planners ages 19 and over to the global hackathon, Junction! We are looking for people who have a strong passion for implementing creative ideas with a challenging and innovative mindset.",
        image: junction1,
        kr_title: "200명의 참가자",
        kr_description: "19세 이상의 개발자, 디자이너, 기획자 300명을 글로벌 해커톤, 정션으로 초대합니다! 도전과 혁신의 마인드로 창의적인 아이디어를 구현하고자 하는 열정이 강한 분을 기다립니다."
    },
    {
        title: "Teams of up to 4",
        description: "Each team can consist of up to 4 people, including developers, designers, and planners (no minimum number of people required).",
        image: junction2,
        kr_title: "최대 4명의 한 팀",
        kr_description: "각 팀은 개발자, 디자이너, 기획자 등을 포함하여 최대 4명까지 구성가능합니다. (최소 인원 제한 없음)"
    },
    {
        title: "Both team and individuals are welcomed",
        description: "JUNCTION ASIA 2025 is open to both teams and individuals. Teams are evaluated as a whole, and partial acceptance is not possible. If you apply as an individual, team building will be conducted prior to the event.",
        image: junction3,
        kr_title: "팀/개인 지원 모두 가능",
        kr_description: "JUNCTION ASIA 2025는 팀/개인으로 모두 지원 가능합니다. 팀은 팀 전체를 평가하며, 부분 합격은 불가합니다. 개인으로 지원할 경우 본 행사 이전 팀 빌딩을 진행할 예정입니다."
    }
]

function Apply({language}) {
    return (
        <>
            <div className='text-4xl font-bold text-center py-15'>
                HOW TO APPLY
            </div>

            <div className="space-y-16 md:space-y-24 px-12 sm:px-24 md:px-32 lg:px-48 mt-16">
                {information.map(function(info, index) {
                return (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} gap-8 md:gap-16`}
                    >
                        {/* Image container */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <div className="w-full aspect-square bg-gray-800 rounded-lg overflow-hidden">
                                {info.image ? (
                                    <img
                                        src={info.image}
                                        alt={info.title}
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
                        <div className="w-full md:w-1/2 text-center md:text-left md:px-4 break-keep">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">{language === 'KR' ? info.kr_title: info.title}</h3>
                            <p className="text-gray-300 leading-relaxed break-keep">{language === 'KR' ? info.kr_description: info.description}</p>
                        </div>
                    </div>
                    )
                })}
            </div>

            <div className="flex justify-center mt-10">
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 text-white font-bold rounded-lg transition-all duration-300 text-lg bg-gradient-to-r from-[#008cd6] via-[#E3007F] to-blue-700 bg-size-200 animate-gradient hover:scale-105">
                    {language === 'KR' ? '참가 신청하기': 'Apply to Participate'}
                </a>
                </div>
                <div className='text-center text-xs font-light text-stone-200 p-8 pt-10 grid gap-2'>
                {language === 'KR' ? '* 이번 2025년 행사에 미성년자는 참여가 불가능합니다.': '*Minors are not allowed to participate in the 2025 event.'}
                
            </div>
        </>
    );
}

export default Apply;