import { MousePointerClick } from "lucide-react";

function HotCard() {
    return (
        <div className="h-full w-[233px] min-w-[233px] flex flex-col items-center justify-between gap-2 cursor-pointer">
            <div className="w-full flex-1 rounded-2xl bg-blue-900 relative">
                <img src="" alt="본문 사진" />
                <div className="absolute bottom-0 left-0 w-full h-28 min-h-24 flex rounded-2xl p-2 overflow-hidden text-ellipsis">
                    <div className="hotEllpsis">
                        Atomic Design vs FSD, 프런트엔드 구조 설계의 길
                    </div>
                    <div className="absolute bottom-2 right-2 size-9 flex items-center justify-center bg-neutral-700 rounded-sm">
                        <MousePointerClick size={20} />
                    </div>
                </div>
            </div>
            <div className="w-full h-10 min-h-10 gap-2 flex items-center">
                <img
                    src=""
                    alt="프로필 사진"
                    className="size-9 bg-blue-500 rounded-full"
                />
                <div className="h-full flex-1 flex flex-col justify-center">
                    <div className="w-full h-4 text-[10px] text-muted-foreground font-medium flex gap-0.5">
                        <p>IT 및 기술 분야</p>
                        <p>·</p>
                        <p>소프트웨어 엔지니어</p>
                    </div>
                    <span className="w-full flex-1 text-sm font-medium">
                        개발자 9Diin
                    </span>
                </div>
            </div>
        </div>
    );
}

export default HotCard;
