import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-neutral-900 border-t border-neutral-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="flex flex-col items-center space-y-6">
                    {/* 소셜 링크 */}
                    <div className="flex items-center space-x-6">
                        {/* 이메일 */}
                        <a 
                            href="mailto:asia@hackjunction.com"
                            className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14
                                     bg-neutral-800 hover:bg-neutral-700 
                                     rounded-full transition-all duration-300
                                     hover:scale-110 hover:shadow-lg"
                            aria-label="이메일 문의"
                        >
                            <svg 
                                className="w-6 h-6 sm:w-7 sm:h-7 text-neutral-400 group-hover:text-blue-400 
                                         transition-colors duration-300" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                                />
                            </svg>
                        </a>

                        {/* 인스타그램 */}
                        <a 
                            href="https://instagram.com/junctionasia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14
                                     bg-neutral-800 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500
                                     rounded-full transition-all duration-300
                                     hover:scale-110 hover:shadow-lg"
                            aria-label="인스타그램"
                        >
                            <svg 
                                className="w-6 h-6 sm:w-7 sm:h-7 text-neutral-400 group-hover:text-white 
                                         transition-colors duration-300" 
                                fill="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                    </div>

                    {/* 구분선 */}
                    <div className="w-full max-w-xs border-t border-neutral-700"></div>

                    {/* Copyright */}
                    <div className="text-center">
                        <p className="text-sm sm:text-base text-neutral-400">
                            © {new Date().getFullYear()} JUNCTION ASIA 2025. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;