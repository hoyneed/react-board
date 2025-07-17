import { Footer, Header } from "@/components/common";
import {
    Button,
    Separator,
    Skeleton,
    Input,
    Label,
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
    Form,
} from "@/components/ui";
import { ArrowLeft, Asterisk, ImageOff, Rocket } from "lucide-react";
import { z } from "zod";

import TextEditor from "@/components/text-editor";
// 유효성 체크 (Validation Check)
const formSchema = z.object({
    title: z.string({
        message: "올바른 형식의 이메일 주소를 입력해주세요.",
    }),
    category: z.string({
        message: "카테고리를 선택해 주세요.",
    }),
    Thumbnail: z.string(),
    content: z.json({ message: "내용을 입력해 주세요" }),
});

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
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="주제 선택" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>
                                                토픽 Topics
                                            </SelectLabel>
                                            <SelectItem value="humanity">
                                                인문학
                                            </SelectItem>
                                            <SelectItem value="startup">
                                                스타트업
                                            </SelectItem>
                                            <SelectItem value="programming">
                                                IT•프로그래밍
                                            </SelectItem>
                                            <SelectItem value="services">
                                                서비스•전략 기획
                                            </SelectItem>
                                            <SelectItem value="marketing">
                                                마케팅
                                            </SelectItem>
                                            <SelectItem value="design">
                                                디자인•일러스트
                                            </SelectItem>
                                            <SelectItem value="self">
                                                자기계발
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
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
                        {/* 텍스트 Editor 영역 */}
                        <div className="w-full h-full -mr-8 flex-1 flex flex-col flex-wrap text-wrap break-all">
                            <TextEditor />
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    );
}

export default CreatePage;
