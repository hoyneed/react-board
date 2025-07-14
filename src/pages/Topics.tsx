import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import HotCard from "@/components/HotCard";
import NewCard from "@/components/NewCard";

function TopicsPage() {
    return (
        <div className="page">
            {/* 헤더 영역 */}
            <Header />
            <main className="main w-full flex-1 flex flex-col items-center overflow-auto">
                <div className="main__container w-full max-w-332 flex-1 flex p-6">
                    <SidebarProvider>
                        <AppSidebar />
                        <div className="main__container__contents h-full w-[calc(100%-256px)] flex flex-col">
                            <div className="hot h-108 min-h-108 w-full flex flex-col p-2">
                                <div className="hot__header h-14 min-h-14 w-full flex flex-col gap-1">
                                    <div className="h-1/2 w-full flex items-center gap-2">
                                        <img
                                            src="/src/assets/img/fire.gif"
                                            alt="fire"
                                            className="size-7"
                                        />
                                        <span className="text-xl font-semibold">
                                            핫 토픽
                                        </span>
                                    </div>
                                    <span className="text-muted-foreground overflow-hidden text-ellipsis">
                                        지금 가장 주목받는 주제들을 살펴보고,
                                        다양한 관점의 인사이트를 얻어보세요.
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
                            <div className="new w-full flex-1 flex flex-col p-2">
                                <div className="new__header h-14 w-full flex flex-col gap-1">
                                    <div className="h-1/2 w-full flex items-center gap-2">
                                        <img
                                            src="/src/assets/img/writing-hand.gif"
                                            alt="writing hand"
                                            className="size-7"
                                        />
                                        <span className="text-xl font-semibold">
                                            NEW 토픽
                                        </span>
                                    </div>
                                    <span className="text-muted-foreground overflow-hidden text-ellipsis">
                                        새로운 시선으로, 새로운 이야기를
                                        시작하세요. 지금 바로 당신만의 토픽을
                                        만들어보세요.
                                    </span>
                                </div>
                                <div className="w-full flex-1 grid grid-cols-2 justify-between justify-items-center sm:gap-6 m-2 overflow-auto">
                                    <NewCard />
                                    <NewCard />
                                    <NewCard />
                                    <NewCard />
                                    <NewCard />
                                </div>
                            </div>
                        </div>
                    </SidebarProvider>
                </div>
                <Footer />
            </main>
        </div>
    );
}

export default TopicsPage;
