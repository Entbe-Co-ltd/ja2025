import value_dots from '../assets/images/value_dots.png';
import swirl from '../assets/images/swirl.png';
import q_circle from '../assets/images/quarter_circle.png';
import rebuild_dots from '../assets/images/rebuild_dots.png';
import sparkle from '../assets/images/sparkle.png';
import circle from '../assets/images/circle.png';
import more_button from '../assets/images/more_button.png';
import React, { useState } from 'react';

const values = [ {valueName: 'BREAK', 
                description: 'Boldly dismantle the limitations, stereotypes, and familiar methods of standards.', 
                kr_description: '기준의 한계와 고정관념, 익숙한 방식들을 과감히 해체합니다'},
                {valueName: 'REBUILD', 
                description: 'Connect technology, ideas, and people to design new solutions, and implement more possibilities.',
                kr_description: '기술, 아이디어, 사람을 연결하여 새로운 해답을 설계하고, 팀과 함께 더 나온 가능성을 구현합니다.'},
                {valueName: 'IMAGINE', 
                description: 'Breaking boundaries to imagine the future — fueling innovation at the heart of our hackathon.',
                kr_description: '현실의 제약을 넘어 미래를 상상하고, 창의적 혁신의 씨앗이 되는 해커톤의 원동력을 만듭니다.'}
]

function Values({language}) {
    const BreakCover = () => {
        return(
            <div className=''>
                <div className='absolute bg-black w-55 h-55 z-10'></div>
                <div className="absolute top-1/2 left-0 w-full h-[1.5px] bg-sky-500 translate-y-28 skew-y-137 z-10"></div>
                <img src = {swirl} className='absolute h-35 translate-x-12 translate-y-10 z-10' />
            </div>
        )
    }

    const RebuildCover = () => {
        return(
            <>
                <div className='absolute bg-black w-55 h-55 z-10'></div>
                <img src = {q_circle} className='absolute object-fill z-10' />
                <img src = {rebuild_dots} className='absolute h-30 translate-x-14 translate-y-12 z-10' />
            </>
        )
    }

    const ImagineCover = () => {
        return(
            <>
                <div className='absolute bg-black w-55 h-55 z-10'></div>
                <img src = {circle} className='absolute h-55 translate-x-2 translate-y-0.5 z-10'/>
                <img src = {sparkle} className='absolute h-45 translate-x-10 translate-y-6 z-10'/>
            </>
        )
    }

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const ValueCard = ({value}) => {

        return(
        <div className = 'bg-black rounded-xl border border-sky-500 py-4 flex flex-col text-left gap-2 w-60 h-85'
            onMouseEnter={() => setHoveredIndex(value.valueName)}
            onMouseLeave={() => setHoveredIndex(null)}>
            
            <div className={`text-2xl font-medium flex py-6 pl-7 
            ${hoveredIndex === value.valueName && value.valueName === 'BREAK' ? 'text-sky-500': 
            hoveredIndex === value.valueName && value.valueName === 'IMAGINE'? 'text-pink-500' : 'text-white'}`}>
                {value.valueName}
            </div>
            <div className="relative w-full">
            <div className="absolute top-1/2 left-0 w-full h-[0.5px] bg-sky-500 -translate-y-1/2"></div>
            <div className="w-2 h-2 bg-black border border-sky-500 z-1 translate-x-40"></div>

            <div className='z-10'>
                {value.valueName === 'BREAK' && hoveredIndex !== value.valueName && <BreakCover />}
                {value.valueName === 'REBUILD' && hoveredIndex !== value.valueName && <RebuildCover />}
                {value.valueName === 'IMAGINE' && hoveredIndex !== value.valueName && <ImagineCover />}
            </div>
                
            </div>
            <div className='text-lg font-light py-4 px-6'> {language === 'KR' ? value.kr_description : value.description}</div>

            <div className='flex justify-end pr-6 z-0'>
                <a
                    href="https://eu.junctionplatform.com/events/junction-asia-2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='z-0'
                >
                    <img
                    src={more_button}
                    alt="More"
                    className="h-12 hover:scale-110 transition-transform duration-200 -translate-y-7"
                    />
                </a>
            </div>
        </div>
        )
    }

    return(
        <>
            <img className='absolute -z-1 mix-blend-screen grayscale' src={value_dots}/>
            <div className='text-4xl font-bold text-center py-16 md:pt-50'>
                OUR VALUES
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 justify-center place-items-center mb-10 md:mb-32'>
            {values.map(function(value) {
                return (
                    <div key={value.valueName} className='flex py-2 pt-5'>
                        <ValueCard value = {value}/>
                    </div>
                    )
                })}
            </div>

        </>
    )
}

export default Values