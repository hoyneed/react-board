import HotCard from "./HotCard";

function Hot() {
    return (
        <div className="hot h-108 min-h-108 w-full flex flex-col p-2">
            <div className="hot__header h-14 min-h-14 w-full flex flex-col gap-1">
                <div className="h-1/2 w-full flex items-center gap-2">
                    <img
                        src="/src/assets/img/fire.gif"
                        alt="fire"
                        className="size-7"
                    />
                    <span className="text-xl font-semibold">핫 토픽</span>
                </div>
                <span className="text-muted-foreground overflow-hidden text-ellipsis">
                    지금 가장 주목받는 주제들을 살펴보고, 다양한 관점의
                    인사이트를 얻어보세요.
                </span>
            </div>
            <div className="w-full flex-1 flex items-center gap-4 sm:gap-6 m-2 overflow-auto">
                <HotCard />
                <HotCard />
                <HotCard />
                <HotCard />
                <HotCard />
            </div>
        </div>
    );
}

export default Hot;
