"use client";
import { Footer, Header } from "@/components/common";
import {
    Button,
    Separator,
    Input,
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Label,
} from "@/components/ui";
import { ArrowLeft, Asterisk, Image, ImageOff, Rocket } from "lucide-react";
import { z } from "zod";

import TextEditor from "@/components/text-editor";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createClient } from "@/lib/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useRef, useState } from "react";
import { v4 as uuid4 } from "uuid";
// 유효성 체크 (Validation Check)
const formSchema = z.object({
    title: z.string().min(2, {
        message: "제목을 입력해주세요.",
    }),
    category: z.string().min(4, {
        message: "카테고리를 선택해 주세요.",
    }),
});

function CreatePage() {
    const [thumbnail, setThumbnail] = useState<File | string | null>(null);
    const [thumbURL, setThumbURL] = useState<string>("");
    const [passage, setPassage] = useState<string>("");
    const [uuid, setUuid] = useState<string>("");
    const [filePath, setFilePath] = useState<string>("");
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            category: "",
        },
    });
    // 파일 변경 감지 및 상위 컴포넌트로 전달
    const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.files);
        const file = event.target.files?.[0];
        setThumbnail(file ?? null);
        // 동일 파일 선택 가능하도록 value 초기화
        event.target.value = "";
    };
    const handleRenderPreview = () => {
        console.log(thumbnail);

        if (typeof thumbnail === "string") {
            return (
                <img
                    src={thumbnail}
                    alt="thumbnail"
                    className="w-full aspect-video object-cover border rounded-lg"
                />
            );
        } else if (thumbnail instanceof File) {
            return (
                <img
                    src={URL.createObjectURL(thumbnail)}
                    alt="thumbnail"
                    className="w-full aspect-video object-cover border rounded-lg"
                />
            );
        }

        return (
            <div className="w-full flex items-center justify-center aspect-video border rounded-lg bg-card">
                <Button
                    variant={"ghost"}
                    size={"icon"}
                    onClick={() => fileInputRef.current?.click()}
                >
                    <Image />
                </Button>
            </div>
        );
    };

    // 토픽 발행
    const supabase = createClient();
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        if (thumbnail instanceof File) {
            const fileExt = thumbnail.name.split(".").pop();
            setFilePath(`topics-thumbnail/${uuid4()}.` + fileExt);
        } else if (typeof thumbnail === "string") {
            const response = await fetch(thumbnail);
            const blob = await response.blob();
            const fileExt = thumbnail.split(".").pop();
            const filename = `${uuid4()}.` + fileExt;
            setFilePath("topics-thumbnail/" + filename);
            const myfile = new File([blob], filename, { type: blob.type });
            setThumbnail(myfile);
        } else {
            toast.error("썸네일이 없습니다!");
            return;
        }

        try {
            const { data } = await supabase.storage
                .from("topics")
                .upload(filePath, thumbnail, { upsert: true });
            if (data) {
                console.log("Uploaded filePath: ", filePath);
                setThumbURL(
                    `${import.meta.env
                        .VITE_SUPABASE_URL!}/storage/v1/object/public/topics/${filePath}`
                );
            } else {
                toast.error("썸네일 업로드 실패!");
                return;
            }
        } catch (error: unknown) {
            console.log("error: ", error);
            toast.error("썸네일 업로드 실패!");
            return;
        }

        console.log("thumbURL: ", thumbURL);
        try {
            const { data } = await supabase.auth.getSession();
            if (typeof data.session?.user.id === "string") {
                setUuid(data.session?.user.id);
            }
            console.log("user id:", uuid);
        } catch (error: unknown) {
            toast.error("로그인 된 유저가 아닙니다.");
            return;
        }
        const storageString = localStorage.getItem("editorContent");
        if (typeof storageString === "string") {
            const aqw = JSON.parse(storageString);
            console.log(aqw.length);
            setPassage(aqw);
        } else {
            toast.error("내용이 없습니다!");
            return;
        }
        // 토픽 발행 요청
        try {
            const { data } = await supabase
                .from("Topics")
                .insert({
                    topic_title: values.title,
                    category: values.category,
                    thumbnail: thumbURL,
                    user_id: uuid,
                    content: passage,
                })
                .select();
            if (data) {
                toast.success("토픽 발행을 완료했습니다.");
                localStorage.removeItem("editorContent");
                navigate("/Topics");
            }
        } catch (error: unknown) {
            console.log("Error", error);
            toast.error("오류가 발생했습니다!");
            return;
        }
    };
    return (
        <div className="page">
            {/* 헤더 영역 */}
            <Header />
            <main className="main w-full flex-1 flex flex-col items-center overflow-auto">
                <div className="main__container w-full max-w-332 flex-1 flex flex-col p-6 gap-4">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="flex flex-col gap-3"
                        >
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="토픽 제목을 입력하세요."
                                                maxLength={50}
                                                {...field}
                                                className="h-8 md:h-16 min-h-8 font-semibold text-sm placeholder:font-semibold md:!text-xl"
                                            />
                                        </FormControl>
                                        <FormMessage className="text-xs font-normal" />
                                    </FormItem>
                                )}
                            />
                            <Separator />
                            <div className="w-full flex-1 flex flex-col-reverse items-start gap-4 sm:gap-6 lg:flex-row">
                                {/* 카테고리 & 썸네일 UI */}
                                <div className="w-full sm:max-w-[308px] h-full flex flex-col gap-4 sm:gap-6 lg:w-1/4 lg:min-w-[308px]">
                                    {/* 버튼 박스 UI */}
                                    <div className="w-full flex items-center gap-2">
                                        <Button
                                            variant="secondary"
                                            className="size-9"
                                        >
                                            <ArrowLeft size={20} />
                                        </Button>
                                        <Button
                                            variant="secondary"
                                            className="h-9 min-h-9 px-4"
                                        >
                                            임시 저장
                                        </Button>
                                        <Button
                                            type="submit"
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
                                        <FormField
                                            control={form.control}
                                            name="category"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="h-[14px] flex items-center gap-2">
                                                        <Asterisk
                                                            color="red"
                                                            size={14}
                                                        />
                                                        카테고리
                                                    </FormLabel>
                                                    <Select
                                                        onValueChange={
                                                            field.onChange
                                                        }
                                                    >
                                                        <FormControl>
                                                            <SelectTrigger className="w-full">
                                                                <SelectValue placeholder="주제 선택" />
                                                            </SelectTrigger>
                                                        </FormControl>
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
                                                                    서비스•전략
                                                                    기획
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
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    {/* 썸네일 UI */}
                                    <div className="flex flex-col space-y-2.5 gap-2">
                                        <Label className="h-[14px] flex items-center gap-2">
                                            썸네일
                                        </Label>
                                        {handleRenderPreview()}

                                        <Input
                                            type="file"
                                            ref={fileInputRef}
                                            onChange={handleChangeFile}
                                            className="hidden"
                                        />
                                        <Separator className="-mt-2 -mb-[1px]" />
                                        {/* 썸네일 제거 버튼 */}
                                        <Button
                                            variant="outline"
                                            onClick={() => setThumbnail(null)}
                                        >
                                            <ImageOff />
                                            썸네일 제거
                                        </Button>
                                    </div>
                                </div>
                                {/* 텍스트 Editor 영역 */}
                                <div className="w-full h-full -mr-8 flex-1 flex flex-col flex-wrap text-wrap break-all">
                                    <div className="w-full min-h-120 flex-1 md:h-full">
                                        <TextEditor />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </Form>
                </div>
                <Footer />
            </main>
        </div>
    );
}

export default CreatePage;
