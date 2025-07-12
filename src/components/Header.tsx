function Header() {
    return (
        <div className="header w-full h-13 flex items-center justify-center bg-neutral-900">
            <div className="header w-full max-w-332 h-full flex items-center justify-between gap-4 px-6">
                <div className="header__front h-full flex-1 flex items-center justify-start gap-4">
                    <a href="/">
                        <img
                            src="src/assets/img/logo_small.svg"
                            alt="logo"
                            className="w-10 h-10"
                        />
                    </a>
                    <a
                        href="/"
                        className="text-white text-sm font-semibold cursor-pointer"
                    >
                        클래스
                    </a>
                    <a
                        href="/"
                        className="text-white text-sm font-semibold cursor-pointer pr-4 border-r-1 border-neutral-500"
                    >
                        배움 노트
                    </a>
                    <a
                        href="/Topics"
                        className="text-white text-sm font-semibold cursor-pointer pr-4 border-r-1 border-neutral-500"
                    >
                        토픽 인사이트
                    </a>
                    <a
                        href="/"
                        className="text-white text-sm font-semibold cursor-pointer"
                    >
                        밍랩
                    </a>
                    <a
                        href="/"
                        className="text-white text-sm font-semibold cursor-pointer pr-4 border-r-1 border-neutral-500"
                    >
                        밍고 스테이지
                    </a>
                    <a
                        href="/"
                        className="text-white text-sm font-semibold cursor-pointer"
                    >
                        밍고 스토어
                    </a>
                    <a
                        href="/"
                        className="text-white text-sm font-semibold cursor-pointer"
                    >
                        밍거진
                    </a>
                </div>
                <div className="header__back h-full w-40 min-w-40 flex items-center justify-between">
                    <a href="/Login" className="text-sm text-neutral-300">
                        로그인
                    </a>
                    <a href="" className="text-sm text-neutral-300">
                        우리가 하는 일
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
