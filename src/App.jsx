import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Video from './components/Video';
import Hero from './components/Hero';
import OurValue from './components/OurValue';
import Schedule from './components/Schedule';
import Timeline from './components/Timeline';
import Prize from './components/Prize';
import How from './components/How';
import Partnership from './components/Partnership';
import Faq from './components/Faq';
import Host from './components/Host';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // 동적 메타데이터 업데이트 (필요시)
    const updateMetaTags = () => {
      // 페이지 제목 동적 업데이트
      document.title = "Junction Asia 2025 - 아시아 최대 해커톤";
      
      // 메타 description 업데이트
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 
          '2025년 아시아 최대 규모의 해커톤 Junction Asia에 참여하세요. 48시간 동안 혁신적인 아이디어로 미래를 만들어가는 개발자, 디자이너, 기획자들의 축제입니다.'
        );
      }

      // OG 이미지 동적 업데이트 (필요시)
      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) {
        ogImage.setAttribute('content', `${window.location.origin}/images/hero.png`);
      }

      // 구조화된 데이터의 URL 업데이트
      const structuredData = document.querySelector('script[type="application/ld+json"]');
      if (structuredData) {
        const data = JSON.parse(structuredData.textContent);
        data.url = window.location.href;
        data.offers.url = window.location.href;
        structuredData.textContent = JSON.stringify(data, null, 2);
      }
    };

    updateMetaTags();

    // URL 변경 감지 (SPA 라우팅 시)
    const handleLocationChange = () => {
      updateMetaTags();
    };

    window.addEventListener('popstate', handleLocationChange);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
        <Navbar />
        <main>
            <Video id="video" />
            <Hero id="about" />
            <OurValue id="values" />
            <Schedule id="schedule" />
            <Timeline id="timeline" />
            <Prize id="prize" />
            <How id="how" />
            {/* <Partnership id="partnership" /> */}
            <Faq id="faq" />
            <Host id="host" />
            <Contact id="contact" />
            <Footer id="footer" />
        </main>
    </div>
  );
}

export default App;
