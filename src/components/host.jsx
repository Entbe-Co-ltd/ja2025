import entbe_logo from '../assets/images/entbe-logo.png';

const Entbe = {
    title: 'Walk with ChangeMakers!',
    description : 'Entbe is a company that fosters ChangeMakers who change the world. Entbe is an edutech company specializing in entrepreneurship and future technology education. We foster the capabilities that people need to change the world. Entbe is working to make the world a better place.',
    kr_description : '앙트비는 세상을 변화시키는 Change Maker를 키우는 회사입니다. 앙트비는 기업가정신과 미래기술 교육을 전문으로 하는 에듀테크 기업입니다. 사람들이 세상을 변화시키는데 필요한 역량을 함께 길러나갑니다. 앙트비는 세상을 더 나은 곳으로 만들기 위해 노력하고 있습니다.'
}

function Host({language}) {
    return (
        <div className='bg-neutral-800 p-16'>
            <div className='text-4xl font-bold text-center py-15'>
                HOSTED BY ENTBE
            </div>

            <div className='flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 max-w-5xl mx-auto'>
                <img className='w-full md:w-1/3 flex justify-center' src={entbe_logo} alt="Entbe Logo" />
            
                <div className='w-full md:w-2/3'>
                    <div className='text-2xl font-semibold text-white'>
                        {Entbe.title}
                    </div>
                    <div className="w-16 h-1 bg-blue-500 my-6"></div>
                    <div className='text-lg font-light text-gray-300 mb-6'>
                        {language === 'KR' ? Entbe.kr_description : Entbe.description}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Host;