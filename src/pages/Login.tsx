import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { LoginForm } from "@/components/login-form";

function LoginPage() {
    return (
        <div className="page">
            <Header />
            <div className="w-full flex-1 flex flex-col items-center justify-center gap-6">
                <div className="w-full flex flex-col items-center justify-around gap-2">
                    <span className="text-xl font-semibold mb-4">
                        안녕하세요 👏
                    </span>
                    <div>
                        <span className="text-red-400">밍고</span>
                        <span className="text-sm">
                            에 방문해주셔서 감사합니다.
                        </span>
                    </div>
                    <span className="text-sm">
                        서비스를 이용하려면 로그인을 진행해주세요.
                    </span>
                </div>
                <LoginForm />
            </div>
            <Footer />
        </div>
    );
}

export default LoginPage;
