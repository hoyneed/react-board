import { Link } from "react-router-dom";
import { LogoutButton } from "@/components/Auth/logout-button";

function Header() {
    return (
        <div className="header w-full h-13 flex items-center justify-center bg-neutral-900">
            <div className="header w-full max-w-332 h-full flex items-center justify-between gap-4 px-6">
                <div className="header__front h-full flex-1 flex items-center justify-start gap-4">
                    <Link to="/">
                        <img
                            src="/src/assets/img/logo_small.svg"
                            alt="logo"
                            className="w-10 h-10"
                        />
                    </Link>
                    <Link to={"/"} className="text-white text-sm font-semibold">
                        클래스
                    </Link>
                    <Link
                        to={"/"}
                        className="text-white text-sm font-semibold pr-4 border-r-1 border-neutral-500"
                    >
                        배움 노트
                    </Link>
                    <Link
                        to={"/Topics"}
                        className="text-white text-sm font-semibold pr-4 border-r-1 border-neutral-500"
                    >
                        토픽 인사이트
                    </Link>
                    <Link to="/" className="text-white text-sm font-semibold">
                        밍랩
                    </Link>
                    <Link
                        to="/"
                        className="text-white text-sm font-semibold pr-4 border-r-1 border-neutral-500"
                    >
                        밍고 스테이지
                    </Link>
                    <Link to="/" className="text-white text-sm font-semibold">
                        밍고 스토어
                    </Link>
                    <Link to="/" className="text-white text-sm font-semibold">
                        밍거진
                    </Link>
                </div>
                <div className="header__back h-full w-48 min-w-48 flex items-center justify-end gap-2">
                    <LogoutButton />
                    <Link to="/" className="text-sm text-neutral-300">
                        우리가 하는 일
                    </Link>
                </div>
            </div>
        </div>
    );
}

export { Header };
