const sched = [{date: '8.22 FRI', events: [{time: '17:00-19:00', name: 'Reception', kr_name: '리셉션'},
                                            {time: '19:00-20:00', name: 'Opening', kr_name: '오프닝'},
                                            {time: '20:00-21:00', name: 'Track Release', kr_name: '트랙 공개'},
                                            {time: '21:00-22:00', name: 'Track Partner Workshop', kr_name: '트랙 파트너 워크숍'},
                                            {time: '24:00', name: 'Submission Mission 1', kr_name: '미션 1 체크'}]},
                {date: '8.23 SAT', events: [{time: '08:00', name: 'Day 2 Opening', kr_name: '2일차 오프닝'},
                                            {time: '9:00-18:00', name: "Track Partner's Feedback Session", kr_name: '트랙 별 피드백'},
                                            {time: '24:00', name: 'Submission Mission 2', kr_name: '미션 2 체크'}]},
                {date: '8.24 SUN', events: [{time: '08:00', name: 'Day 3 Opening', kr_name: '3일차 오프닝'},
                                            {time: '12:00', name: 'Submission Mission 3', kr_name: '미션 3 체크'},
                                            {time: '13:00-16:00', name: 'Demo Expo', kr_name: '데모 엑스포'},
                                            {time: '16:00-17:00', name: 'Final Pitch', kr_name: '파이널 피칭'},
                                            {time: '17:30-18:00', name: 'Closing', kr_name: '클로징'}]},                            
            ]


function Schedule({language}) {
    const Timetable = ({date, events}) => {
        return(
        <>
            <div className='text-sky-500 text-3xl py-2 font-bold'> {date} </div>

            <div className='flex flex-col divide-y divide-gray-600'>
            {events.map(function(event) {
                return (
                    <div key={event.name} className='flex gap-4 py-2 pt-5 items-baseline-last text-sm md:text-lg'>
                        <div className='w-30 text-gray-400 md:w-50'> {event.time} </div>
                        <div className='w-30 md:w-50'> {language === 'KR' ? event.kr_name : event.name} </div>
                    </div>
                    )
                })}
            </div>
        </>
    )
    }
    return(
        <>
            <div className='text-4xl font-bold text-center py-16'>
                GENERAL SCHEDULE
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 mb-25 px-8'>
            {sched.map(function(daySchedule) {
                return (
                    <div key={daySchedule.date} className = 'divide-y divide-sky-500 mx-8'>
                        <Timetable 
                        date = {daySchedule.date}
                        events = {daySchedule.events}
                        />
                    </div>
                    )
                })}
            </div>
        </>
    )
}

export default Schedule