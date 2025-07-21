import { ChartNoAxesColumnIncreasing, Heart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui";
import { type Topics } from "./common";

function NewCard({ id, title, category, thumbnail, content }: Topics) {
    return (
        <div className="h-56 min-h-56 flex flex-col items-center justify-between gap-2 p-4 cursor-pointer bg-card text-card-foreground rounded-xl border shadow-sm relative">
            <p className="absolute top-1 left-1 text-xs">#{id}</p>
            <div className="h-36 min-h-36 w-full flex items-center gap-6">
                <img
                    src={thumbnail}
                    alt={category}
                    className="size-30 min-h-30 min-w-30 rounded-xl bg-emerald-700"
                />
                <div className="h-full flex-1 flex flex-col">
                    <span className="newTitleESllpsis">{title}</span>
                    <span className="newEllpsis">{content}</span>
                </div>
            </div>
            <div className="w-full h-10 min-h-10 gap-2 flex items-center">
                <Avatar className="size-9 rounded-full">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
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
                <div className="h-5.5 w-17  flex justify-between">
                    <div className="text-sm flex gap-1">
                        <ChartNoAxesColumnIncreasing size={20} />7
                    </div>
                    <div className="text-sm flex items-center gap-1">
                        <Heart size={16} color="red" />0
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewCard;
