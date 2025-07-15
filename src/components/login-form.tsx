"use client";
import { cn } from "@/lib/utils";
import { createClient } from "@/lib/client";
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
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export function LoginForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const supabase = createClient();
        setIsLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });
            if (error) throw error;
            // Update this route to redirect to an authenticated route. The user already has an active session.
            navigate("/");
        } catch (error: unknown) {
            setError(
                error instanceof Error ? error.message : "An error occurred"
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            className={cn("w-full max-w-sm *:flex flex-col gap-6", className)}
            {...props}
        >
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">로그인</CardTitle>
                    <CardDescription>
                        로그인을 위한 정보를 입력해주세요
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleLogin}>
                    <CardContent>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">이메일</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="이메일 주소를 입력하세요"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="비밀번호">비밀번호</Label>
                                    <Link
                                        to="/auth/forgot-password"
                                        className="ml-auto inline-block text-sm text-neutral-500 underline-offset-4 hover:underline"
                                    >
                                        아이디/비밀번호 찾기
                                    </Link>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="비밀번호를 입력하세요"
                                    required
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col mt-4 gap-4">
                        {error && (
                            <p className="text-sm text-red-500">{error}</p>
                        )}
                        <Button
                            type="submit"
                            className="w-full font-semibold"
                            disabled={isLoading}
                        >
                            {isLoading ? "로그인 중..." : "로그인"}
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
                            <Link to="https://www.google.com/">
                                구글로 로그인하기
                            </Link>
                        </Button>
                        <div className="flex items-center gap-6  text-sm">
                            <span>계정이 없으신가요? </span>
                            <Link to="/sign-up" className="underline">
                                회원가입
                            </Link>
                        </div>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
