import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    ArrowLeft,
    Asterisk,
    ChevronDown,
    Image,
    ImageOff,
    Rocket,
} from "lucide-react";

function CreatePage() {
    return (
        <div className="page">
            {/* 헤더 영역 */}
            <Header />
            <main className="main w-full flex-1 flex flex-col items-center overflow-auto">
                <div className="main__container w-full max-w-332 flex-1 flex flex-col p-6 gap-4">
                    <Input
                        placeholder="토픽 제목을 입력하세요."
                        maxLength={50}
                        className="h-8 md:h-16 min-h-8 font-semibold text-sm placeholder:font-semibold md:!text-xl"
                    />
                    <Separator />
                    <div className="w-full flex-1 flex flex-col-reverse items-start gap-4 sm:gap-6 lg:flex-row">
                        {/* 카테고리 & 썸네일 UI */}
                        <div className="w-full sm:max-w-[308px] h-full flex flex-col gap-4 sm:gap-6 lg:w-1/4 lg:min-w-[308px]">
                            {/* 버튼 박스 UI */}
                            <div className="w-full flex items-center gap-2">
                                <Button variant="secondary" className="size-9">
                                    <ArrowLeft size={20} />
                                </Button>
                                <Button
                                    variant="secondary"
                                    className="h-9 min-h-9 px-4"
                                >
                                    임시 저장
                                </Button>
                                <Button
                                    variant="destructive"
                                    className="h-9 min-h-9 flex-1 flex items-center gap-2"
                                >
                                    <Rocket className="size-4" />
                                    토픽 발행하기
                                </Button>
                            </div>
                            <Separator />
                            {/* 카테고리 UI */}
                            <div className="w-full h-fit flex flex-col space-y-2.5">
                                <Label className="h-[14px] flex items-center gap-2">
                                    <Asterisk color="red" size={14} />
                                    카테고리
                                </Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className="data-[empty=true]:text-muted-foreground w-full justify-between p-2 text-left text-neutral-400 font-normal"
                                        >
                                            <p>주제 선택</p>
                                            <ChevronDown size={36} />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="min-w-[308px] p-0 flex flex-col">
                                        <Label>토픽 Topic</Label>
                                        <Button
                                            variant="secondary"
                                            className="w-full"
                                        >
                                            인문학
                                        </Button>
                                        <Button
                                            variant="secondary"
                                            className="w-full"
                                        >
                                            스타트업
                                        </Button>
                                        <Button
                                            variant="secondary"
                                            className="w-full"
                                        >
                                            IT•프로그래밍
                                        </Button>
                                        <Button
                                            variant="secondary"
                                            className="w-full"
                                        >
                                            서비스•전략 기획
                                        </Button>
                                        <Button
                                            variant="secondary"
                                            className="w-full"
                                        >
                                            마케팅
                                        </Button>
                                        <Button
                                            variant="secondary"
                                            className="w-full"
                                        >
                                            디자인•일러스트
                                        </Button>
                                        <Button
                                            variant="secondary"
                                            className="w-full"
                                        >
                                            자기계발
                                        </Button>
                                    </PopoverContent>
                                </Popover>
                            </div>
                            {/* 썸네일 UI */}
                            <div className="flex flex-col space-y-2.5 gap-2">
                                <Label className="h-[14px] flex items-center gap-2">
                                    <Asterisk color="red" size={14} />
                                    썸네일
                                </Label>
                                <Skeleton className="w-full aspect-video" />
                                <Separator className="-mt-2 -mb-[1px]" />
                                {/* 썸네일 제거 버튼 */}
                                <Button variant="outline">
                                    <ImageOff />
                                    썸네일 제거
                                </Button>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </main>
        </div>
    );
}

export default CreatePage;
