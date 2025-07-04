import sparkle from '../assets/images/sparkle.png';

const timeline = [{date: '7/1', description: 'Participant \nApplication', kr_description: '참가자 \n모집 시작', sparkle: true},
                {date: '7/18', description: 'Participant \nApplication Close', kr_description: '참가자 \n모집 마감', sparkle: false},
                {date: '8/4', description: 'Notification of \nAcceptance', kr_description: '참가자 \n발표', sparkle: false},
                {date: '8/10', description: 'Confirmation of \nParticipation', kr_description: '팀\n 확정 마감', sparkle: false},
                {date: '8/17', description: 'Team Buiilding \nDeadline', kr_description: '팀\n 빌딩 마감', sparkle: false},
                {date: '8/22', description: 'JUNCTION \nASIA 2025', kr_description: 'JUNCTION \nASIA 2025', sparkle: true},
]

const disclaimer1 = '*The above schedule is subject to change depending on circumstances.'
const kr_disclaimer1 = '*해외거주자에 한해 합격여부가 사전발표될 예정입니다.'

const disclaimer2 = '*Abroad participants will be pre-announced.'
const kr_disclaimer2 = '*상기 일정은 상황에 따라 변경될 수 있습니다.'

function Timeline({language}) {
    const BackSparkle = () => {
        return <img className='absolute h-30 md:-translate-y-40 md:translate-x-2 -z-10' src={sparkle}/>
    }
    
    return(
    <>
        <div className='text-4xl font-bold text-center py-10'>
            TIMELINE
        </div>

        {/* vertical */}
        <div className="md:hidden relative mt-16 px-20">
          <div className="absolute ml-6 top-10 bottom-0 w-0.5" style={{backgroundColor:"#008cd6"}}></div>
          
          <div className="flex flex-col space-y-16">
            {timeline.map(function(item) {
                return(
                    <div key={item.date} className="flex flex-row items-start">
                        <div className="flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center z-20" 
                            style={{border: '1px solid #008cd6', backgroundColor:"#171717"}}>
                            <div className="text-white text-sm">{item.date}</div>
                        </div>
                        {item.sparkle && <BackSparkle />}
                        </div>
                        <div className="ml-12 pt-3">
                        <div className="text-sm"> {language === 'KR' ? item.kr_description : item.description} </div>
                        </div>
                    </div>
                )
            })}
          </div>
        </div>

        {/* horizontal */}
        <div className='max-md:hidden relative p-8 pt-16'>
            <div className='absolute top-60/100 left-0 w-full h-[0.5px] bg-sky-500 -translate-y-1/2 '>
            </div>

            <div className='flex  flex-row justify-evenly items-center lg:gap-10'>
                {timeline.map(function(item) {
                    return (
                        <div key={item.date} className='flex items-center flex-col'>
                            <div className='m-3 mb-6 px-7 py-1.5 rounded-full text-xs font-light border border-sky-500 bg-[#141414]'>
                                {item.date}
                            </div>
                            <div className='w-2 h-2 bg-[#141414] border border-sky-500 z-10'></div>
                            <div className="mt-3 w-30 min-h-10 text-center text-sm font-light whitespace-pre">
                            {language === 'KR' ? item.kr_description : item.description}
                            {item.sparkle && <BackSparkle />}
                            </div>
                        </div>
                        )
                    })}
            </div>
        </div>

        <div className='text-center text-xs font-light text-stone-400 p-8 mb-16 grid gap-2'>
            <div>{language === 'KR' ? kr_disclaimer1 : disclaimer1}</div>
            <div>{language === 'KR' ? kr_disclaimer2 : disclaimer2}</div>
        </div>
    </>
    )
}

export default Timeline