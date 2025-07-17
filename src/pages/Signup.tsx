import { Footer, Header } from "@/components/common";
import { SignUpForm } from "@/components/Auth/sign-up-form";

function SignUpPage() {
    return (
        <div className="page">
            <Header />
            <main className="main w-full flex-1 flex flex-col items-center overflow-auto">
                <div className="w-full flex flex-col items-center justify-start p-4 gap-4 sm:p-6 sm:gap-6">
                    <div className="flex flex-col items-center">
                        <h4 className="text-lg font-semibold mb-2">
                            안녕하세요 👋🏻
                        </h4>
                        <div className="flex flex-col items-center justify-center">
                            <div className="flex items-center gap-[2px]">
                                <small className="text-base font-medium text-[#F96859]">
                                    포트폴리오
                                </small>
                                <small className="text-sm text-muted-foreground">
                                    에 방문해주셔서 감사합니다.
                                </small>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                서비스를 이용하려면 회원가입을 진행해주세요.
                            </p>
                        </div>
                    </div>
                    <SignUpForm />
                </div>
                <Footer />
            </main>
        </div>
    );
}

export default SignUpPage;
