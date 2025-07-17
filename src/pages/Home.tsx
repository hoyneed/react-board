import { Header, Footer } from "@/components/common";
import Hot from "@/components/Hot";
import { Button, Textarea } from "@/components/ui";
import {
    BookOpenText,
    HeartHandshake,
    Podcast,
    School,
    Search,
    Store,
} from "lucide-react";
import { Link } from "react-router-dom";
const categories = [
    {
        id: 1,
        title: "클래스",
        description:
            "배우고 싶은 교육이 있으신가요? 여러분의 열정을 더욱 탄탄하게!",
        url: "/",
        icon: School,
        color: "#ea4e43",
    },
    {
        id: 2,
        title: "토픽 인사이트",
        description: "잠재력이 듬뿍 담긴 아이디어를 나누며 소통하는 열린 공간",
        url: "/Topics",
        icon: Podcast,
        color: "#FAA700",
    },
    {
        id: 3,
        title: "밍랩",
        description:
            "나의 지식을 밍고들과 나누어 우리의 창작물을 만들어보세요!",
        url: "/",
        icon: HeartHandshake,
        color: "#03C1BA",
    },
    {
        id: 4,
        title: "스테이지",
        description: "소개합니다. 우리의 반짝임! 밍고만의 소중한 결과를!",
        url: "/",
        icon: Store,
        color: "#0a85d1",
    },
    {
        id: 5,
        title: "밍거진",
        description: "특별하고 엄청난 성과를 이룬 밍고 스타들의 노하우!",
        url: "/",
        icon: BookOpenText,
        color: "#a855f7",
    },
];
function HomePage() {
    return (
        <div className="page">
            {/* 헤더 영역 */}
            <Header />
            <main className="main w-full flex-1 flex flex-col items-center overflow-auto">
                <div className="main__top w-full max-w-332 h-fit flex flex-col items-center gap-6 px-8 py-6">
                    <div className="w-full flex flex-col gap-6 lg:flex-row lg:gap-0 lg:items-end lg:justify-between lg:mt-10 text-2xl font-semibold overflow-auto">
                        <div className="flex flex-col gap-0.5">
                            <span>나만의 학습 여정이,</span>
                            <span>나만의 창작으로 이어지는 플랫폼</span>
                        </div>
                        <div className="h-fit w-fit flex items-center gap-4">
                            <Search />
                            <Textarea
                                placeholder="관심있는 주제의 클래스 검색하세요"
                                className="!h-9 !min-h-9 w-76 min-w-76 overflow-hidden placeholder:text-sm"
                            />
                            <Button className="text-white font-semibold bg-neutral-900 hover:bg-neutral-800">
                                검색
                            </Button>
                        </div>
                    </div>
                    <div className="hidden w-full sm:flex items-center gap-6 pb-2 overflow-auto">
                        {categories.map((item) => {
                            return (
                                <Link
                                    to={item.url}
                                    className="bg-card text-card-foreground border shadow-sm sm:min-w-[236.8px] w-[236.8px] h-31 min-h-31 flex flex-col justify-start items-start p-3 sm:p-4 sm:pt-5 rounded-md gap-3 cursor-pointer hover:bg-neutral-600"
                                >
                                    <div className="w-full h-fit flex items-center gap-4">
                                        <item.icon color={item.color} />
                                        <p className="text-lg font-semibold">
                                            {item.title}
                                        </p>
                                    </div>
                                    <div className="text-sm line-clamp-2 text-ellipsis break-keep">
                                        {item.description}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                    <Hot />
                </div>
                <Footer />
            </main>
        </div>
    );
}

export default HomePage;
