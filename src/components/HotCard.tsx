import { MousePointerClick } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function HotCard() {
    return (
        <div className="h-full w-[233px] min-w-[233px] flex flex-col items-center justify-between gap-2 cursor-pointer">
            <div className="w-full flex-1 rounded-2xl bg-blue-900 relative">
                <img src="" alt="본문 사진" />
                <div className="absolute bottom-0 left-0 w-full h-32 min-h-24 flex rounded-2xl p-2 overflow-hidden text-ellipsis">
                    <div className="hotEllpsis">
                        개발자도 브랜딩을 해야할까? 답은 YES!
                    </div>
                    <div className="absolute bottom-2 right-2 size-9 flex items-center justify-center bg-neutral-700 rounded-sm">
                        <MousePointerClick size={20} />
                    </div>
                </div>
            </div>
            <div className="w-full h-10 min-h-10 gap-2 flex items-center">
                <Avatar className="size-9 rounded-full">
                    <AvatarImage
                        src="https://github.com/evilrabbit.png"
                        alt="@evilrabbit"
                    />
                    <AvatarFallback>ER</AvatarFallback>
                </Avatar>
                <div className="h-full flex-1 flex flex-col justify-center">
                    <div className="w-full h-4 text-[10px] text-muted-foreground font-medium flex gap-0.5">
                        <p>IT 및 기술 분야</p>
                        <p>·</p>
                        <p>교육</p>
                        <p>·</p>
                        <p>비즈니스</p>
                    </div>
                    <span className="w-full flex-1 text-sm font-medium">
                        밍고 Team
                    </span>
                </div>
            </div>
        </div>
    );
}

export default HotCard;
