import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState('KR'); // Default language is Korean
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'KR' ? 'EN' : 'KR');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // 모바일 메뉴가 열려있을 때 스크롤 방지
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // 컴포넌트 언마운트 시 스크롤 복원
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-sm py-2' : 'bg-transparent py-4'
      }`}>
        <div className="w-full px-4 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/junction-logo-white.png"
              alt="Junction Asia 2025"
              className="h-4 md:h-10"
            />
            <span className="ml-2 text-sm md:text-lg font-bold text-white">
              JUNCTION ASIA 2025
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => {/* Apply 버튼 클릭 핸들러 */}}
              className="px-4 py-2 rounded border border-gray-400 hover:border-blue-400 
                         hover:bg-blue-400 hover:text-black transition-all duration-200 text-white"
            >
              Apply
            </button>
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded border border-gray-400 hover:border-blue-400 
                         transition-colors text-white"
            >
              <span className={`mr-2 ${language === 'KR' ? 'text-blue-400 font-bold' : 'text-gray-400'}`}>
                KR
              </span>
              |
              <span className={`ml-2 ${language === 'EN' ? 'text-blue-400 font-bold' : 'text-gray-400'}`}>
                EN
              </span>
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded transition-colors"
            aria-label="메뉴 열기"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          
          {/* Mobile Menu */}
          <div className="fixed top-0 right-0 h-full w-64 bg-black/90 backdrop-blur-md shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <span className="text-white font-bold text-lg">Menu</span>
                <button
                  onClick={closeMobileMenu}
                  className="text-white p-2 hover:bg-white/10 rounded transition-colors"
                  aria-label="메뉴 닫기"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Mobile Menu Content */}
              <div className="flex-1 p-4 space-y-6">
                {/* Apply Button */}
                <button
                  onClick={() => {
                    /* Apply 버튼 클릭 핸들러 */
                    closeMobileMenu();
                  }}
                  className="w-full px-4 py-3 rounded border border-gray-400 hover:border-blue-400 
                           hover:bg-blue-400 hover:text-black transition-all duration-200 text-white
                           font-semibold text-center"
                >
                  Apply
                </button>

                {/* Language Toggle */}
                <div className="space-y-2">
                  <span className="text-gray-300 text-sm">Language</span>
                  <button
                    onClick={() => {
                      toggleLanguage();
                      closeMobileMenu();
                    }}
                    className="w-full px-3 py-2 rounded border border-gray-400 hover:border-blue-400 
                             transition-colors text-white flex items-center justify-center"
                  >
                    <span className={`mr-2 ${language === 'KR' ? 'text-blue-400 font-bold' : 'text-gray-400'}`}>
                      KR
                    </span>
                    |
                    <span className={`ml-2 ${language === 'EN' ? 'text-blue-400 font-bold' : 'text-gray-400'}`}>
                      EN
                    </span>
                  </button>
                </div>

                {/* Navigation Links (필요시 추가) */}
                {/* <div className="space-y-4 pt-4 border-t border-gray-700">
                  <a 
                    href="#home" 
                    className="block text-white hover:text-blue-400 transition-colors py-2"
                    onClick={closeMobileMenu}
                  >
                    Home
                  </a>
                  <a 
                    href="#about" 
                    className="block text-white hover:text-blue-400 transition-colors py-2"
                    onClick={closeMobileMenu}
                  >
                    About
                  </a>
                  <a 
                    href="#schedule" 
                    className="block text-white hover:text-blue-400 transition-colors py-2"
                    onClick={closeMobileMenu}
                  >
                    Schedule
                  </a>
                  <a 
                    href="#contact" 
                    className="block text-white hover:text-blue-400 transition-colors py-2"
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;