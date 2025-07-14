import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Link } from "react-router-dom";

function SignupPage() {
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
                        서비스를 이용하려면 회원가입을 진행해주세요.
                    </span>
                </div>
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <div className="w-full flex items-center justify-between">
                            <CardTitle className="text-lg">약관동의</CardTitle>
                        </div>
                        <CardDescription>
                            필수 이용약관에 먼저 동의해주세요
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="flex items-center gap-3">
                                <Checkbox id="terms" />
                                <Label htmlFor="terms">전체 동의</Label>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                        <Button type="submit" className="w-full font-semibold">
                            로그인
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full font-semibold"
                        >
                            <img
                                src="src/assets/img/google.svg"
                                alt="구글 이미지"
                                className="size-4"
                            />
                            <a href="https://www.google.com/">
                                구글로 로그인하기
                            </a>
                        </Button>
                        <div className="flex items-center gap-6  text-sm">
                            <span>이미 계정이 있으신가요?</span>
                            <Link to="/login" className="underline">
                                로그인
                            </Link>
                        </div>
                    </CardFooter>
                </Card>
            </div>
            <Footer />
        </div>
    );
}

export default SignupPage;
