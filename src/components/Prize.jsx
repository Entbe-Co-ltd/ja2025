import React from 'react';

const Prize = () => {
  return (
    <section className="py-16" style={{backgroundImage: 'url(/images/prize-bg.png)', backgroundSize: 'cover'}}>
      <div className="container">
        <h2 className="section-title text-center">PRIZE</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-10">
          {/* Final Winner */}
          <div className="flex flex-col items-center justify-center bg-black rounded-lg p-8">
            <h3 className="text-xl font-bold inline-flex items-center justify-center">
              <span className="tracking-wider" style={{fontFamily:"boba-mono"}}>FINAL</span>
              <img src="/images/logo.png" className="w-12 -mt-2" />
              <span className="tracking-wider" style={{fontFamily:"boba-mono"}}>WINNER</span>
            </h3>
            <div className="w-full flex justify-between items-center">
                <div className="w-2 h-2" style={{border: '1px solid #008cd6', backgroundColor:"#171717"}}></div>
                <div className="w-full h-0.5" style={{backgroundColor:"#008cd6"}}></div>
                <div className="w-2 h-2" style={{border: '1px solid #008cd6', backgroundColor:"#171717"}}></div>
            </div>
            <div className="pt-4">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="mr-2" style={{fontFamily:"boba-mono"}}>>></span>
                  <span>Junction 2025 참여 티켓</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2" style={{fontFamily:"boba-mono"}}>>></span>
                  <span>최종 우승 상금 3,000,000원</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Track Winner */}
          <div className="flex flex-col items-center justify-center bg-black rounded-lg p-8">
            <h3 className="text-xl font-bold inline-flex items-center">
              <span className="tracking-wider" style={{fontFamily:"boba-mono"}}>TRACK</span>
              <img src="/images/logo.png" className="w-12 -mt-2" />
              <span className="tracking-wider" style={{fontFamily:"boba-mono"}}>WINNER</span>
            </h3>
            <div className="w-full flex justify-between items-center">
                <div className="w-2 h-2" style={{border: '1px solid #008cd6', backgroundColor:"#171717"}}></div>
                <div className="w-full h-0.5" style={{backgroundColor:"#008cd6"}}></div>
                <div className="w-2 h-2" style={{border: '1px solid #008cd6', backgroundColor:"#171717"}}></div>
            </div>
            <div className="pt-4">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="mr-2" style={{fontFamily:"boba-mono"}}>>></span>
                  <span>트랙 우승 상금 2,000,000</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2" style={{fontFamily:"boba-mono"}}>>></span>
                  <span>트랙 준우승 상금 1,000,000</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center text-sm text-white/70">
          <p>*수상 상품 및 혜택은 상황에 따라 변동될 수 있습니다.</p>
          <p>*해외여행에 결격사유가 있는 분은 혜택에 제한이 있을 수 있습니다.</p>
        </div>
      </div>
    </section>
  );
};

export default Prize;
