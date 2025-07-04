import React, { useState, useEffect } from 'react';
import teambuilding1 from '../assets/images/teambuilding1.png';
import teambuilding2 from '../assets/images/teambuilding2.png';
import teambuilding3 from '../assets/images/teambuilding3.png';
import teambuilding4 from '../assets/images/teambuilding4.png';
import teambuilding5 from '../assets/images/teambuilding5.png';
import teambuilding6 from '../assets/images/teambuilding6.png';

const Contact = ({language}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [modalTitle, setModalTitle] = useState('');

    // 마크다운 내용 데이터
    const modalContents = {
        "Support Rules": `
            1. A team can have a maximum of 4 members. 
            2. Individual applications are also welcome. Don't worry, a team-building process is in place to help you form a team!
            3. When applying as a team, selection will be done on a team basis. Therefore, after filling out the application form, the team leader must create a team and share the code with the team members for registration. 
            4. It is acceptable if the team does not include all roles (planner/developer/designer) when applying. 
            5. **We do not provide parking or accommodation.**

            1. 한 팀은 최대 4 명입니다. 
            2. 개인 신청도 가능하며, 팀 빌딩 프로세스가 준비되어 있으니 걱정말고 신청해주세요!
            3. 팀 지원시 팀 단위로 선발하므로 반드시 지원서 작성 후 팀장은 팀을 생성하여 코드를 팀원들에게 공유해 등록해주세요.
            4. 팀 신청 시, 기획자/개발자/디자이너가 모두 포함되어 있지 않아도 무관합니다. 
            5. **주차장과 숙박을 제공하지 않습니다.** 

            For any inquiries, please contact us at [asia@hackjunction.com](mailto:asia@hackjunction.com) or send a direct message on Instagram @junctionasia.

            문의 사항은 [asia@hackjunction.com](mailto:asia@hackjunction.com) 혹은 인스타그램 디엠 @junctionasia로 부탁드립니다.
        `,
        "Team Building Guide": `
            1. Click on the blue box to enter the page. 
            ![팀 빌딩 프로세스](${teambuilding1})
            2. Please click on "Team" in the category.
            ![팀 생성 화면](${teambuilding2})
            3. If you are the team leader, click on "MY TEAM" to create a team.
            ![팀 참여 방법](${teambuilding3})
            4. Fill in the details and click "Save Changes" to save.
            ![역할별 가이드](${teambuilding4})
            5. You can find information including the team code in "MY TEAM."
            ![팀 참여 방법](${teambuilding5})
            6. After the team leader creates a team code, please share it with the team members. The team members can join by entering the code in "Join team using a code."
            ![팀 매칭](${teambuilding6})


        `
    };

    const contacts = [
        { title: "Partnership questions", kr_title:"파트너십 문의", url: "mailto:asia.partnership@hackjunction.com", type: "external" },
        { title: "Participant questions", kr_title:"참가자 문의", url: "mailto:asia@hackjunction.com", type: "external" },
        { title: "Support Rules", kr_title:"지원 규칙", type: "modal" },
        { title: "Team Building Guide", kr_title:"팀 빌딩 가이드", type: "modal" },
    ];

    // URL 파라미터로 모달 자동 열기 (개선된 버전)
    useEffect(() => {
        const checkModalFromURL = () => {
            // URL 쿼리 파라미터에서 modal 확인
            const urlParams = new URLSearchParams(window.location.search);
            let modalParam = urlParams.get('modal');

            // 해시에서도 확인 (SPA 라우팅 지원)
            if (!modalParam && window.location.hash) {
                const hashParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
                modalParam = hashParams.get('modal');
            }

            if (modalParam) {
                // URL 디코딩 처리
                const decodedModal = decodeURIComponent(modalParam);

                console.log('Modal parameter found:', decodedModal); // 디버깅용
                console.log('Available modals:', Object.keys(modalContents)); // 디버깅용

                // 정확한 매칭 또는 유사한 매칭 찾기
                let matchedModal = null;

                // 정확한 매칭 먼저 시도
                if (modalContents[decodedModal]) {
                    matchedModal = decodedModal;
                } else {
                    // 대소문자 무시하고 매칭 시도
                    const modalKeys = Object.keys(modalContents);
                    matchedModal = modalKeys.find(key =>
                        key.toLowerCase() === decodedModal.toLowerCase()
                    );

                    // 부분 매칭 시도 (키워드 포함)
                    if (!matchedModal) {
                        matchedModal = modalKeys.find(key =>
                            key.includes(decodedModal) || decodedModal.includes(key)
                        );
                    }
                }

                if (matchedModal && modalContents[matchedModal]) {
                    console.log('Opening modal:', matchedModal); // 디버깅용
                    setModalTitle(matchedModal);
                    setModalContent(modalContents[matchedModal]);
                    setIsModalOpen(true);
                } else {
                    console.log('Modal not found for parameter:', decodedModal); // 디버깅용
                }
            }
        };

        // 페이지 로드 시 실행
        checkModalFromURL();

        // 브라우저 뒤로가기/앞으로가기 지원
        const handlePopState = () => {
            checkModalFromURL();
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [modalContents]);

    const handleContactClick = (contact) => {
        if (contact.type === "modal") {
            setModalTitle(contact.title);
            setModalContent(modalContents[contact.title]);
            setIsModalOpen(true);

            // URL에 파라미터 추가 (링크 공유용)
            const newUrl = new URL(window.location);
            newUrl.searchParams.set('modal', encodeURIComponent(contact.title));
            window.history.pushState({}, '', newUrl);
        } else if (contact.url) {
            window.open(contact.url, '_blank');
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent('');
        setModalTitle('');

        // URL에서 모달 파라미터 제거
        const newUrl = new URL(window.location);
        newUrl.searchParams.delete('modal');
        window.history.pushState({}, '', newUrl);
    };

    // 마크다운 렌더링 함수 (이미지 및 링크 지원)
    const renderMarkdown = (content) => {
        return content
            .split('\n')
            .map((line, index) => {
                // 헤딩 처리
                if (line.startsWith('# ')) {
                    return <h1 key={index} className="text-2xl font-bold text-white mb-4 mt-6">{line.substring(2)}</h1>;
                }
                if (line.startsWith('## ')) {
                    return <h2 key={index} className="text-xl font-semibold text-white mb-3 mt-5">{line.substring(3)}</h2>;
                }
                if (line.startsWith('### ')) {
                    return <h3 key={index} className="text-lg font-medium text-white mb-2 mt-4">{line.substring(4)}</h3>;
                }

                // 리스트 처리
                if (line.startsWith('- ')) {
                    return <li key={index} className="text-neutral-300 mb-1 ml-4">{line.substring(2)}</li>;
                }
                if (/^\d+\.\s/.test(line)) {
                    return <li key={index} className="text-neutral-300 mb-1 ml-4">{line.substring(line.indexOf(' ') + 1)}</li>;
                }

                // 이미지 처리
                if (line.includes('![') && line.includes('](')) {
                    const imageRegex = /!\[(.*?)\]\((.*?)\)/g;
                    const parts = [];
                    let lastIndex = 0;
                    let match;

                    while ((match = imageRegex.exec(line)) !== null) {
                        // 이미지 앞의 텍스트 추가
                        if (match.index > lastIndex) {
                            parts.push(line.substring(lastIndex, match.index));
                        }

                        // 이미지 추가
                        parts.push(
                            <img
                                key={`img-${index}-${match.index}`}
                                src={match[2]}
                                alt={match[1]}
                                className="max-w-full h-auto rounded-lg my-4 mx-auto block shadow-lg"
                                loading="lazy"
                            />
                        );

                        lastIndex = match.index + match[0].length;
                    }

                    // 이미지 뒤의 텍스트 추가
                    if (lastIndex < line.length) {
                        parts.push(line.substring(lastIndex));
                    }

                    return <div key={index} className="mb-2">{parts}</div>;
                }

                // 링크 처리
                if (line.includes('[') && line.includes('](') && !line.includes('![')) {
                    const linkRegex = /\[(.*?)\]\((.*?)\)/g;
                    const parts = [];
                    let lastIndex = 0;
                    let match;

                    while ((match = linkRegex.exec(line)) !== null) {
                        // 링크 앞의 텍스트 추가
                        if (match.index > lastIndex) {
                            parts.push(line.substring(lastIndex, match.index));
                        }

                        // 링크 추가
                        parts.push(
                            <a
                                key={`link-${index}-${match.index}`}
                                href={match[2]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
                            >
                                {match[1]}
                            </a>
                        );

                        lastIndex = match.index + match[0].length;
                    }

                    // 링크 뒤의 텍스트 추가
                    if (lastIndex < line.length) {
                        parts.push(line.substring(lastIndex));
                    }

                    return <p key={index} className="text-neutral-300 mb-2">{parts}</p>;
                }

                // 볼드 텍스트 처리
                if (line.includes('**')) {
                    const parts = line.split('**');
                    return (
                        <p key={index} className="text-neutral-300 mb-2">
                            {parts.map((part, i) =>
                                i % 2 === 1 ? <strong key={i} className="text-white font-semibold">{part}</strong> : part
                            )}
                        </p>
                    );
                }

                // 빈 줄
                if (line.trim() === '') {
                    return <br key={index} />;
                }

                // 일반 텍스트
                return <p key={index} className="text-neutral-300 mb-2">{line}</p>;
            });
    };

    return (
        <section className="py-16 bg-neutral-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Contact Us
                    </h2>
                    <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto">
                        {language === 'KR' ? '궁금한 점이 있으시면 언제든지 문의해 주세요': 'If you have any questions, please contact us at any time.'}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto ">
                    {contacts.map((contact, index) => (
                        <button
                            key={index}
                            className="group relative overflow-hidden bg-neutral-700 hover:bg-neutral-600 
                                     border border-neutral-600 hover:border-neutral-500 
                                     rounded-lg p-6 sm:p-8 lg:p-6 xl:p-8
                                     transition-all duration-300 ease-in-out
                                     transform hover:scale-105 hover:shadow-lg
                                     text-left w-full cursor-pointer"
                            onClick={() => handleContactClick(contact)}
                        >
                            {/* 배경 그라디언트 효과 */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 
                                          opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10">
                                <h3 className="text-base sm:text-lg lg:text-base xl:text-lg font-semibold text-white mb-2 
                                             group-hover:text-blue-300 transition-colors duration-300">
                                    {language === 'KR' ? contact.kr_title: contact.title}
                                </h3>

                                <div className="flex items-center text-neutral-400 group-hover:text-blue-400 
                                              transition-colors duration-300">
                                    {contact.title.includes("questions") ? 
                                    <span className="text-sm sm:text-base">{language === 'KR' ? '문의하기': 'Contact Us '}</span> : 
                                    <span className="text-sm sm:text-base">{language === 'KR' ? '확인하기': 'Check it out '}</span>}
                                    <svg
                                        className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* 모달 */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                        <div className="bg-neutral-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                            {/* 모달 헤더 */}
                            <div className="sticky top-0 bg-neutral-800 border-b border-neutral-700 px-6 py-4 flex justify-between items-center">
                                <h2 className="text-xl sm:text-2xl font-bold text-white">
                                    {modalTitle}
                                </h2>
                                <button
                                    onClick={closeModal}
                                    className="text-neutral-400 hover:text-white transition-colors duration-200"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* 모달 내용 */}
                            <div className="px-6 py-6">
                                <div className="prose prose-invert max-w-none">
                                    {renderMarkdown(modalContent)}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Contact;