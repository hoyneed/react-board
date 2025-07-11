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
import { ThemeProvider } from "./components/theme-provider";
function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="page">
                <div className="w-full h-full flex items-center justify-center">
                    <Card className="w-full max-w-xs">
                        <CardHeader>
                            <CardTitle className="text-lg">로그인</CardTitle>
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
                                            required
                                        />
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex-col gap-2">
                            <Button type="submit" className="w-full">
                                로그인
                            </Button>
                            <Button variant="outline" className="w-full">
                                <img
                                    src="src/assets/img/google.svg"
                                    alt="구글 이미지"
                                    className="size-4"
                                />
                                <span>구글로 로그인하기</span>
                            </Button>
                            <div className="flex items-center gap-6  text-sm">
                                <span>계정이 없으신가요?</span>
                                <a href="" className="hover:underline">
                                    회원가입
                                </a>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
