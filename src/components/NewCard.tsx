import { ChartNoAxesColumnIncreasing, Heart } from "lucide-react";

function NewCard() {
    return (
        <div className="h-56 min-h-56 flex flex-col items-center justify-between gap-2 p-4 cursor-pointer bg-card text-card-foreground rounded-xl border shadow-sm">
            <div className="h-36 min-h-36 w-full flex items-center gap-6">
                <img
                    src=""
                    alt="본문 이미지"
                    className="size-30 bg-emerald-700"
                />
                <div className="h-full flex-1 flex flex-col items-center">
                    <span className="newTitleEllpsis">
                        사업을 한다는 것 vs 온라인 플랫폼을 만든다는 것
                    </span>
                    <span className="newEllpsis">
                        2025년이 어느 덧 7월 중순을 향해 달려가고 있다. 2025년도
                        60% 정도 흘렀다는 걸 의미하겠지. 32년이란 세월을
                        살아오면서 가장 주도적으로 그리고 주체적으로 살아가고
                        있음을 느끼는 요즘이다. 그만큼 내 인생에서 올해가 중요한
                        한 해라는 걸 의미하는지도 모른다.
                    </span>
                </div>
            </div>
            <div className="w-full h-10 min-h-10 gap-2 flex items-center">
                <img src="" alt="프로필 사진" className="size-9 rounded-full" />
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
