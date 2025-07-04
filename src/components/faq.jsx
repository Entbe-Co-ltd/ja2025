import { useState, useRef, useEffect } from 'react';

const questions =[
    {
        category: 'Application and Participation',
        question: 'How do I apply for Junction Asia 2025?',
        answer: 'You can apply by filling out the application form and answering the questions on the JUNCTION PLATFORM application homepage below.'
    },{
        category: 'Application and Participation',
        question: 'Who can participate in Junction Asia 2025?',
        answer: 'Any high school student, college student, or general developer, designer, or planner interested in the global hackathon can participate.'
    },{
        category: 'Application and Participation',
        question: 'Can I participate as an individual?',
        answer: 'Individual applications are accepted, but each team must include at least one developer, designer, and planner, and you can meet new team members through team building sessions later!'
    },{
        category: 'Application and Participation',
        question: 'Is it possible to apply as a team?',
        answer: 'Each team can consist of up to 4 people, including developers, designers, and planners.'
    },{
        category: 'Team Building',
        question: 'I want to participate as a team, but I haven\'t formed a team yet. What should I do?',
        answer: 'After final selection, team building sessions will be held online prior to the competition.'
    },{
        category: 'Participant Selection',
        question: 'Is JUNCTION ASIA 2025 first come, first served?',
        answer: 'No! We will select approximately 200 developers, designers, and planners based on the application forms and responses you submitted.'
    },{
        category: 'Other',
        question: 'Is there a fee to participate in Junction Asia 2025?',
        answer: 'No! All you need is a passion and will to participate in the hackathon.'
    },{
        category: 'Other',
        question: 'If I attend Junction Asia 2025, will you provide support for my travel to Pohang?',
        answer: 'No, individuals must arrange their own travel to Pohang. We will only provide meals and snacks during the event.'
    },{
        category: 'Other',
        question: 'Who owns the intellectual property (IP) of the projects',
        answer: 'The intellectual property rights (IP) of the project go to the team that planned, developed, and designed the project, and JUNCTION ASIA does not own any IP.'
    }
]
const kr_questions = [
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

// Group by category
const groupedQuestions = questions.reduce((acc, item) => {
  acc[item.category] = acc[item.category] || [];
  acc[item.category].push(item);
  return acc;
}, {});

const kr_groupedQuestions = kr_questions.reduce((acc, item) => {
  acc[item.category] = acc[item.category] || [];
  acc[item.category].push(item);
  return acc;
}, {});

function Dropdown({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const scrollHeight = contentRef.current.scrollHeight;
      setHeight(scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="rounded-lg border border-gray-700 overflow-hidden transition-all duration-300">

        <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-6 py-3 cursor-pointer hover:bg-gray-700 rounded-lg rounded-b-none flex justify-between items-center text-left">
      
        <span className="text-lg text-white">{question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        ref={contentRef}
        style={{ height: isOpen ? height : 0 }}
        className="transition-all duration-300 ease-in-out overflow-hidden"
      >
        <div className="border-t border-gray-600 "></div>
        <div className="px-6 py-4 text-gray-300 opacity-100 transition-opacity duration-300">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

function Faq({language}) {
  return (
    <div className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">FAQ</h2>

      <div className="space-y-12">
        {Object.entries(language === 'KR' ? kr_groupedQuestions : groupedQuestions).map(([category, items], index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold mb-6 text-white">{category}</h3>
            <div className="space-y-6">
              {items.map((item, idx) => (
                <Dropdown
                  key={idx}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

       <div className="mt-16 text-center">
            <p className="text-lg mb-6">{language === 'KR' ? '자세한 내용이 궁금하시다면?': 'Want to know more?'}</p>
            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 text-white font-bold rounded-lg transition-all duration-300 text-lg bg-gradient-to-r from-blue-500 via-[#008cd6] to-blue-700 bg-size-200 animate-gradient hover:scale-105"                >
                {language === 'KR' ? '가이드북 확인하기': 'Check the guidebook'}
            </a>
        </div>
      
    </div>

    
  );
}

export default Faq;