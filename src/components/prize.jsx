import sparkle from '../assets/images/sparkle.png';
import prize_dots from '../assets/images/prize_dots.png';

const winners = [{winner: 'FINAL', prize1: 'Junction 2025 Golden Ticket', prize2: 'Final Winner Prize 3,000,000', kr_prize1: 'Junction 2025 참여 티켓', kr_prize2: '최종 우승 상금 3,000,000원'},
                {winner: 'TRACK', prize1: 'Track Winner prize 2,000,000', prize2: 'Track Runner-up Prize 1,000,000', kr_prize1: '트랙 우승 상금 2,000,000', kr_prize2: '트랙 준우승 상금 1,000,000'},
]

const disclaimer1 = '*Prize and Benefits can be changed upon circumstances.'
const kr_disclaimer1 = '*수상 상품 및 혜택은 상황에 따라 변동될 수 있습니다.'

const disclaimer2 = '*A Person who with disqualifying for international travel may have limitations on benefits provided.'
const kr_disclaimer2 = '*해외여행에 결격사유가 있는 분은 혜택에 제한이 있을 수 있습니다.'

function Prize({language}) {
    const WinnerCard = ({ winner, prize1, prize2}) => {
        return(

        <div className = 'bg-[#141414] rounded-xl px-4 md:px-16 py-4 text-center gap-2 flex flex-col items-center justify-center p-8'>
            <div className="text-2xl sm:text-3xl font-bold inline-flex items-center justify-center">
                <span className="tracking-wider" style={{fontFamily:"boba-mono"}}>{winner}</span>
                <img src= {sparkle} className="h-8 sm:h-10" />
                <span className="tracking-wider" style={{fontFamily:"boba-mono"}}>WINNER</span>
            </div>
            
             <div className="relative w-full">
                <div className="absolute top-1/2 left-0 w-full h-[1.5px] bg-sky-500 -translate-y-1/2"></div>
                <div className="flex justify-between">
                    <div className="w-2 h-2 bg-[#141414] border border-sky-500 z-1"></div>
                    <div className="w-2 h-2 bg-[#141414] border border-sky-500 z-1"></div>
                </div>
            </div>
            <div className='text-lg font-light'>
                <ul className="space-y-3">
                    <li className="flex items-center text-left">
                        <span className="mr-2" style={{fontFamily:"boba-mono"}}>{'>>'}</span>
                        <span>{prize1}</span>
                    </li>
                    <li className="flex items-center text-left">
                        <span className="mr-2" style={{fontFamily:"boba-mono"}}>{'>>'}</span>
                        <span>{prize2}</span>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
    return(
        
        <div className='bg-sky-500 relative -z-10'>
            <img className='absolute -z-1 mix-blend-screen' src={prize_dots}/>
            <div className='text-4xl font-bold text-center py-15'>
                PRIZE
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-16 px-4 sm:px-8 md:px-24'>
            {winners.map(function(winner) {
                return (
                    <div key={winner.winner} className=''>
                        <WinnerCard 
                        winner = {winner.winner} 
                        prize1 = {language === 'KR' ? winner.kr_prize1 : winner.prize1} 
                        prize2 = {language === 'KR' ? winner.kr_prize2 : winner.prize2}  />
                    </div>
                    )
                })}
            </div>

            <div className='text-center text-xs font-light text-stone-200 p-8 pt-10 grid gap-2'>
                <div>{language === 'KR' ? kr_disclaimer1 : disclaimer1}</div>
                <div>{language === 'KR' ? kr_disclaimer2 : disclaimer2}</div>
            </div>
        </div>
    )
}

export default Prize