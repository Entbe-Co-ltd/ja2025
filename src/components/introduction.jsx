import intro from '../assets/images/intro.png';
import kr_intro from '../assets/images/kr_intro.png';
import moving_bar from '../assets/images/moving_bar.png';
import transparentSparkle from '../assets/images/transparentSparkle.png';

function Introduction({language}) {
    return(
        <>
            <img className='right-20 grayscale absolute h-100 md:h-200' src = {transparentSparkle}/>
            <div>
                <div className='text-4xl font-bold p-8 pt-20'>
                    WHAT IS<br />
                    JUNCTION ASIA 2025
                </div>
            </div>

            <div className="w-full relative flex justify-end mt-10 pr-5 md:pr-20">
            <img
                src={language === 'KR' ? kr_intro : intro}
                alt="Junction Asia 2025"
                className="w-64 md:w-80 lg:w-[40%]"
            />
            </div>

            <div className="mt-30 overflow-hidden w-full">
                <div className="flex animate-scroll">
                    <img src={moving_bar} alt="Looping" className="w-[300%] md:min-w-full max-w-none" />
                    <img src={moving_bar} alt="Looping" className="w-[300%] md:min-w-full max-w-none" />
                </div>
            </div>

        </>
    )
}


export default Introduction 