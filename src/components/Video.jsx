import React from 'react';

const Video = () => {
  return (
    <section className="pt-20 pb-16 bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-0">
        {/* 반응형 비디오 컨테이너 - PC에서는 100% 너비 */}
        <div className="relative w-full">
          {/* 16:9 비율 유지를 위한 패딩 트릭 */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 비율 */ }}>
            <iframe
              src="https://www.youtube.com/embed/YyeM4ykfjoQ"
              title="Junction Asia 2025 Video"
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
