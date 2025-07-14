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
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

function SignupPage() {
    const [check, setCheck] = useState([
        { id: 0, label: "All", state: false },
        { id: 1, label: "Service", state: false },
        { id: 2, label: "Personal", state: false },
        { id: 3, label: "marketing", state: false },
    ]);
    const handleCheck = (prevIsChecked: boolean) => {
        const updatedItems = check.map((item) =>
            prevIsChecked ? { ...item, state: true } : { ...item, state: false }
        );
        setCheck(updatedItems);
    };
    const singleCheck = (id: number) => {
        const updatedItem = check.map((item) =>
            item.id === id
                ? item.state
                    ? { ...item, state: false }
                    : { ...item, state: true }
                : { ...item }
        );
        setCheck(updatedItem);
    };
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
                        <form className="w-full h-fit flex flex-col p-2">
                            <div className="w-full h-11 flex items-center gap-3 rounded-sm p-4 bg-neutral-800">
                                <Checkbox
                                    id="all"
                                    checked={check[0].state}
                                    onCheckedChange={(checked: boolean) =>
                                        handleCheck(checked)
                                    }
                                />
                                <Label htmlFor="all">전체 동의</Label>
                            </div>
                            <Separator className="my-4" />
                            <div className="w-full h-fit flex flex-col items-center p-2 gap-2">
                                <span className="w-full text-sm font-semibold">
                                    필수 동의항목
                                </span>
                                <div className="w-full flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Checkbox
                                            id="service"
                                            checked={check[1].state}
                                            onCheckedChange={() =>
                                                singleCheck(1)
                                            }
                                        />
                                        <Label
                                            htmlFor="service"
                                            className="text-sm"
                                        >
                                            서비스 이용약관 동의
                                        </Label>
                                    </div>
                                    <Link
                                        to={"#"}
                                        className="h-full w-fit flex items-center gap-2 cursor-pointer text-neutral-400"
                                    >
                                        <span className="text-sm">
                                            자세히 보기
                                        </span>
                                        <ChevronRight size={14} />
                                    </Link>
                                </div>
                                <div className="w-full flex items-center justify-between">
                                    <div className="flex items-center gap-2 ">
                                        <Checkbox
                                            id="personal"
                                            checked={check[2].state}
                                            onCheckedChange={() =>
                                                singleCheck(2)
                                            }
                                        />
                                        <Label
                                            htmlFor="personal"
                                            className="text-sm"
                                        >
                                            개인정보 수집 및 이용동의
                                        </Label>
                                    </div>
                                    <Link
                                        to={"#"}
                                        className="h-full w-fit flex items-center gap-2 cursor-pointer text-neutral-400"
                                    >
                                        <span className="text-sm">
                                            자세히 보기
                                        </span>
                                        <ChevronRight size={14} />
                                    </Link>
                                </div>
                            </div>
                            <Separator className="my-4" />
                            <div className="w-full h-fit flex flex-col items-center p-2 gap-2">
                                <span className="w-full text-sm font-semibold">
                                    선택 동의항목
                                </span>
                                <div className="w-full flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Checkbox
                                            id="marketing"
                                            checked={check[3].state}
                                            onCheckedChange={() =>
                                                singleCheck(3)
                                            }
                                        />
                                        <Label
                                            htmlFor="marketing"
                                            className="text-sm"
                                        >
                                            마케팅 및 광고 수신 동의
                                        </Label>
                                    </div>
                                    <Link
                                        to={"#"}
                                        className="h-full w-fit flex items-center gap-2 cursor-pointer text-neutral-400"
                                    >
                                        <span className="text-sm">
                                            자세히 보기
                                        </span>
                                        <ChevronRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex-col gap-4 p-2 -mb-4">
                        <div className="h-9 w-full flex items-center justify-between p-2 gap-4">
                            <Button
                                type="submit"
                                variant="outline"
                                className="w-42 font-semibold"
                            >
                                이전
                            </Button>
                            <Button
                                variant="destructive"
                                className="w-42 font-semibold"
                            >
                                다음
                            </Button>
                        </div>
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
