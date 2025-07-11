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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <div className="w-full flex items-center justify-between">
                            <CardTitle className="text-lg">로그인</CardTitle>
                        </div>
                        <CardDescription>
                            로그인을 위한 정보를 입력해주세요
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">이메일</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="이메일 주소를 입력하세요"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="비밀번호">
                                            비밀번호
                                        </Label>
                                        <a
                                            href="#"
                                            className="ml-auto inline-block text-sm text-neutral-500 underline-offset-4 hover:underline"
                                        >
                                            아이디/비밀번호 찾기
                                        </a>
                                    </div>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="비밀번호를 입력하세요"
                                        required
                                    />
                                </div>
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
                            <span>계정이 없으신가요?</span>
                            <a href="/sign-up" className="underline">
                                회원가입
                            </a>
                        </div>
                    </CardFooter>
                </Card>
            </div>
            <Footer />
        </div>
    );
}

export default LoginPage;
