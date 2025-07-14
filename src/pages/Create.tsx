import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { ImageOff } from "lucide-react";

function CreatePage() {
    return (
        <div className="page">
            {/* 헤더 영역 */}
            <Header />
            <main className="main w-full flex-1 flex flex-col items-center overflow-auto">
                <Input placeholder="토픽 제목을 입력하세요." maxLength={50} />
                <Separator />
                <div className="flex items-start">
                    {/* 카테고리 & 썸네일 UI */}
                    <div className="flex flex-col gap-6">
                        {/* 버튼 박스 UI */}
                        <div className="flex items-center gap-2"></div>
                        <Separator />
                        {/* 카테고리 UI */}
                        {/* 썸네일 UI */}
                        <Label className="size-[14px]"></Label>
                        <Skeleton className="w-full aspect-video" />
                        <Separator className="-my-4" />
                        {/* 썸네일 제거 버튼 */}
                        <Button variant="outline">
                            <ImageOff />
                            썸네일 제거
                        </Button>
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    );
}

export default CreatePage;
