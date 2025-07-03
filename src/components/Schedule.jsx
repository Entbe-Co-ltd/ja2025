import React from 'react';

const Schedule = () => {
  const scheduleData = {
    day1: [
      { time: '17:00-19:00', event: '리셉션' },
      { time: '19:00-20:00', event: '오프닝' },
      { time: '20:00-21:00', event: '트랙 공개' },
      { time: '21:00-22:00', event: '트랙 파트너 워크숍' },
      { time: '24:00', event: '미션 1 체크' }
    ],
    day2: [
      { time: '08:00', event: '2일차 오프닝' },
      { time: '09:00-18:00', event: '트랙 별 피드백' },
    ],
    day3: [
      { time: '08:00', event: '3일차 오프닝' },
      { time: '12:00', event: '미션3 체크' },
      { time: '13:00-16:00', event: '데모 엑스포' },
      { time: '16:00-17:00', event: '파이널 피칭' },
      { time: '17:30-18:00', event: '클로징' }
    ]
  };

  return (
    <section className="py-16">
      <div className="w-full px-12">
        <h2 className="section-title text-center">GENERAL SCHEDULE</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Day 1 */}
          <div className="md:px-24 sm:px-6">
            <h3 className="text-2xl font-bold mb-6" style={{color:"#008cd6", borderBottom: '1px solid #008cd6'}}>8.22 FRI</h3>
            <div className="space-y-4">
              {scheduleData.day1.map((item, index) => (
                <div key={index} className="flex pb-2" style={{borderBottom: '1px solid #c4c5bf44'}}>
                  <span className="text-gray-400 w-24">{item.time}</span>
                  <span className="flex-1 ml-8">{item.event}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Day 2 */}
          <div className="md:px-24 sm:px-6">
            <h3 className="text-2xl font-bold mb-6" style={{color:"#008cd6", borderBottom: '1px solid #008cd6'}}>8.23 SAT</h3>
            <div className="space-y-4">
              {scheduleData.day2.map((item, index) => (
                <div key={index} className="flex pb-2" style={{borderBottom: '1px solid #c4c5bf44'}}>
                  <span className="text-gray-400 w-24">{item.time}</span>
                  <span className="flex-1 ml-8">{item.event}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Day 3 */}
          <div className="md:px-24 sm:px-6">
            <h3 className="text-2xl font-bold mb-6" style={{color:"#008cd6", borderBottom: '1px solid #008cd6'}}>8.24 SUN</h3>
            <div className="space-y-4">
              {scheduleData.day3.map((item, index) => (
                <div key={index} className="flex pb-2" style={{borderBottom: '1px solid #c4c5bf44'}}>
                  <span className="text-gray-400 w-24">{item.time}</span>
                  <span className="flex-1 ml-8">{item.event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
