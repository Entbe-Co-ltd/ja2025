import React from 'react';

const Timeline = () => {
  const milestones = [
    { date: '7/1', description: '참가자 모집 시작', check:1 },
    { date: '7/18', description: '참가자 모집 마감' },
    { date: '8/4', description: '참가자 발표' },
    { date: '8/10', description: '팀 확정 마감' },
    { date: '8/17', description: '팀 빌딩 마감' },
    { date: '8/22', description: 'JUNCTION ASIA 2025', check:1 },
  ];

  return (
    <section className="py-16">
      <div className="w-full">
        <h2 className="section-title text-center">TIMELINE</h2>

         {/* Mobile Timeline (vertical) */}
        <div className="md:hidden relative mt-16 px-20">
          <div className="absolute ml-6 top-10 bottom-0 w-0.5" style={{backgroundColor:"#008cd6"}}></div>
          
          <div className="flex flex-col space-y-16">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-row items-start">
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center z-20" 
                       style={{border: '1px solid #008cd6', backgroundColor:"#171717"}}>
                    <div className="text-white text-sm">{milestone.date}</div>
                  </div>
                  {milestone.check === 1 && (
                    <img src="/images/hero-bg.png" alt="Check" 
                         className="absolute w-36 mt-8 z-10" />
                  )}
                </div>
                <div className="ml-12 pt-3">
                  <div className="text-sm">{milestone.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Timeline (horizontal) */}
        <div className="hidden md:flex relative mt-16 flex-col justify-center">
          {/* Timeline line */}
          <div className="absolute h-0.5 w-full" style={{backgroundColor:"#008cd6"}}></div>
          
          {/* Timeline points */}
          <div className="flex justify-between relative px-32">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-8 flex flex-col items-center">
                    <div className="absolute w-24 h-8 rounded-full flex items-center justify-center z-20" style={{border: '1px solid #008cd6', backgroundColor:"#171717"}} >
                        <div className="text-white text-sm z-20">{milestone.date}</div>
                    </div>
                    {milestone.check === 1 ? (
                        <img src="/images/hero-bg.png" alt="Check" className="absolute w-32 z-10 -mt-8" />
                    ) : (
                        <></>
                    )}
                </div>
                <div className="w-2 h-2 my-3" style={{border: '1px solid #008cd6', backgroundColor:"#171717"}}></div>
                <div className="text-xs text-center max-w-[100px]">{milestone.description}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center text-sm text-gray-400">
          <p>*해외거주자에 한해 합격여부가 사전발표될 예정입니다.</p>
          <p>*상기 일정은 상황에 따라 변경될 수 있습니다.</p>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
