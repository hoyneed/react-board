function Footer() {
    return (
        <div className="footer w-full h-64 px-6 pt-6 pb-16 flex flex-col items-center gap-4 bg-neutral-900">
            <div className="footer__top max-w-332 w-full h-5 flex items-center px-6 gap-4 pb-8 border-b-2 border-neutral-800">
                <a
                    href=""
                    className="text-white text-sm pr-4 border-r-1 border-neutral-800"
                >
                    이용약관
                </a>
                <a
                    href=""
                    className="text-white text-sm pr-4 border-r-1 border-neutral-800"
                >
                    개인정보처리방침
                </a>
                <a href="" className="text-white text-sm">
                    클래스 론칭 문의
                </a>
            </div>
            <div className="footer__bottom w-full max-w-332 flex-1 flex items-center justify-between px-6">
                <div className="w-139 min-w-180 h-full">
                    <div className="w-full h-1/2 flex items-center pl-6">
                        <img
                            src="/src/assets/img/logo_large.svg"
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
                <div className="h-full flex-1 flex flex-col items-center p-2">
                    <div className="h-full w-fit flex flex-col justify-center">
                        <span className="h-1/2 text-neutral-100 font-bold">
                            고객센터
                        </span>
                        <div className="h-1/2 flex flex-col text-sm gap-4">
                            <p>평일 오전 10시 ~ 오후 6시</p>
                            <p>문의 : mingoteam@naver.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Footer };
