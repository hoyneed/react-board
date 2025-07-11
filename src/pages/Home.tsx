function HomePage() {
    return (
        <div className="page">
            <header className="header w-full h-13 flex items-center justify-between gap-4 px-6 bg-neutral-800">
                <div className="header__front h-full flex-1 flex items-center justify-start gap-4">
                    <img src="" alt="logo" className="w-10 h-10" />
                    <button className="text-white text-sm font-semibold cursor-pointer">
                        클래스
                    </button>
                    <button className="text-white text-sm font-semibold cursor-pointer pr-4 border-r-2 border-neutral-500">
                        배움 노트
                    </button>
                    <button className="text-white text-sm font-semibold cursor-pointer pr-4 border-r-2 border-neutral-500">
                        토픽 인사이트
                    </button>
                    <button className="text-white text-sm font-semibold cursor-pointer">
                        밍랩
                    </button>
                    <button className="text-white text-sm font-semibold cursor-pointer pr-4 border-r-2 border-neutral-500">
                        밍고 스테이지
                    </button>
                    <button className="text-white text-sm font-semibold cursor-pointer">
                        밍고 스토어
                    </button>
                    <button className="text-white text-sm font-semibold cursor-pointer">
                        밍거진
                    </button>
                </div>
                <div className="header__back h-full w-40 min-w-40 flex items-center justify-between">
                    <a href="/Login" className="text-sm text-neutral-300">
                        로그인
                    </a>
                    <a href="" className="text-sm text-neutral-300">
                        우리가 하는 일
                    </a>
                </div>
            </header>
            <main className="main w-full flex-1">ㅇㅇ</main>
            <footer className="footer w-full h-52 p-6 mb-6 flex flex-col items-center gap-4">
                <div className="footer__top w-full h-5 flex items-center gap-4 pb-8 border-b-2 border-neutral-800">
                    <a
                        href=""
                        className="text-white text-sm pr-4 border-r-2 border-neutral-800"
                    >
                        이용약관
                    </a>
                    <a
                        href=""
                        className="text-white text-sm pr-4 border-r-2 border-neutral-800"
                    >
                        개인정보처리방침
                    </a>
                    <a href="" className="text-white text-sm">
                        클래스 론칭 문의
                    </a>
                </div>
                <div className="footer__bottom w-full flex-1 flex items-center">
                    <div className="w-139 min-w-180 h-full">
                        <div className="w-full h-1/2 flex items-center pl-6">
                            <img
                                src="src/assets/img/logo_large.svg"
                                alt="large_logo"
                                className="w-20"
                            />
                        </div>
                        <div className="w-full h-1/2 flex flex-wrap gap-4">
                            <span className="text-sm text-neutral-100">
                                대표이사 : 박성재
                            </span>
                            <span className="text-sm text-neutral-100">
                                사업자 번호 : 696-48-01248
                            </span>
                            <span className="text-sm text-neutral-100">
                                통신판매신고번호 : 2025-서울서초-1014
                            </span>
                            <span className="text-sm text-neutral-100">
                                대표번호 : 070-8080-4429
                            </span>
                            <span className="text-sm text-neutral-100">
                                주소 : 서울특별시 서초구 서초대로 15길 33
                            </span>
                            <span className="text-sm text-neutral-100">
                                © Mingo Team all rights reserved
                            </span>
                        </div>
                    </div>
                    <div className="h-full flex-1 flex flex-col p-2">
                        <span className="h-1/2 text-neutral-100 font-bold">
                            고객센터
                        </span>
                        <div className="h-1/2 flex flex-col text-sm gap-4">
                            <p>평일 오전 10시 ~ 오후 6시</p>
                            <p>문의 : mingoteam@naver.com</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default HomePage;
