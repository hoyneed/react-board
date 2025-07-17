"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";
import { createClient } from "@/lib/client";
import { toast } from "sonner";

// 유효성 체크 (Validation Check)
const formSchema = z.object({
    email: z
        .string()
        .email({
            message: "올바른 형식의 이메일 주소를 입력해주세요.",
        })
        .toLowerCase(),
    password: z.string().min(8, {
        message: "비밀번호는 최소 8자 이상이어야 합니다.",
    }),
    confirmPassword: z.string().min(8, {
        message: "비밀번호 확인을 입력해주세요.",
    }),
});

function SignUpForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
    });
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] =
        useState<boolean>(false);

    const handleToggle = (field: string) => {
        if (field === "password") {
            setShowPassword((prevState) => !prevState);
        } else if (field === "confirmPassword") {
            setShowConfirmPassword((prevState) => !prevState);
        }
    };
    const navigate = useNavigate();

    // 회원가입
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const supabase = createClient();
        // 2. 회원가입 요청
        try {
            const { data } = await supabase.auth.signUp({
                email: values.email,
                password: values.password,
            });
            if (data) {
                toast.success("회원가입을 완료했습니다.");
                navigate("/Login");
            }
        } catch (error: unknown) {
            console.log("error");
        }
    };

    return (
        <Card className="w-full md:w-100 bg-transparent md:bg-accent/25 border-0 md:border">
            <CardHeader className="px-0 sm:px-6">
                <CardTitle className="text-lg">회원가입</CardTitle>
                <CardDescription>
                    회원가입을 위한 정보를 입력해주세요.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 px-0 sm:px-6">
                {/* 회원가입 폼 */}
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex flex-col gap-3"
                    >
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>이메일</FormLabel>
                                    <div className="flex items-center gap-2">
                                        <FormControl>
                                            <Input
                                                placeholder="이메일을 입력하세요."
                                                {...field}
                                            />
                                        </FormControl>
                                        <Button
                                            type="button"
                                            variant="secondary"
                                            className="border"
                                            disabled={!form.getValues("email")}
                                        >
                                            본인 인증
                                        </Button>
                                    </div>
                                    <FormMessage className="text-xs font-normal" />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="relative">
                                    <FormLabel>비밀번호</FormLabel>
                                    <FormControl>
                                        <Input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="비밀번호를 입력하세요."
                                            {...field}
                                        />
                                    </FormControl>
                                    <Button
                                        type="button"
                                        size={"icon"}
                                        className="absolute top-[22px] right-1 bg-transparent hover:bg-transparent"
                                        onClick={() => handleToggle("password")}
                                    >
                                        {showPassword ? (
                                            <Eye className="text-muted-foreground" />
                                        ) : (
                                            <EyeOff className="text-muted-foreground" />
                                        )}
                                    </Button>
                                    <FormMessage className="text-xs font-normal" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem className="relative">
                                    <FormLabel>비밀번호 확인</FormLabel>
                                    <FormControl>
                                        <Input
                                            type={
                                                showConfirmPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="비밀번호 확인을 입력하세요."
                                            {...field}
                                        />
                                    </FormControl>
                                    <Button
                                        type="button"
                                        size={"icon"}
                                        className="absolute top-[22px] right-1 bg-transparent hover:bg-transparent"
                                        onClick={() =>
                                            handleToggle("confirmPassword")
                                        }
                                    >
                                        {showConfirmPassword ? (
                                            <Eye className="text-muted-foreground" />
                                        ) : (
                                            <EyeOff className="text-muted-foreground" />
                                        )}
                                    </Button>
                                    <FormMessage className="text-xs font-normal" />
                                </FormItem>
                            )}
                        />
                        <div className="relative my-2">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="flex justify-center text-xs uppercase">
                                <span className="relative px-2 text-muted-foreground bg-black sm:bg-[#121212]">
                                    간편 회원가입을 원하시면 로그인 링크를
                                    클릭하세요.
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="w-full grid grid-cols-2 gap-4">
                                <Button
                                    type="button"
                                    variant="secondary"
                                    className="w-full"
                                >
                                    이전
                                </Button>
                                <Button
                                    type="submit"
                                    variant="destructive"
                                    className="w-full"
                                >
                                    회원가입
                                </Button>
                            </div>
                            <div className="mt-4 text-center text-sm">
                                이미 계정이 있으신가요?
                                <Link
                                    to={"/login"}
                                    className="underline text-sm ml-1"
                                >
                                    로그인
                                </Link>
                            </div>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}

export { SignUpForm };
