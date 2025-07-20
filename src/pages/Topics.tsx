import { Footer, Header } from "@/components/common";
import { Button, SidebarProvider } from "@/components/ui";
import { AppSidebar } from "@/components/app-sidebar";
import NewCard from "@/components/NewCard";
import Hot from "@/components/Hot";
import { PencilLine } from "lucide-react";
import { Link } from "react-router-dom";
import { createClient } from "@/lib/client";
import { useEffect, useState } from "react";
import { type Topics } from "@/components/common";
import useCategory from "@/hooks/useCategory";

function TopicsPage() {
    const [topics, setTopics] = useState<Topics[]>([]);
    const [category, setCategory] = useState<string>("전체");
    useEffect(() => {
        const supabase = createClient();
        const unsubscribe = useCategory.subscribe(
            (state) => state.label,
            (newLabel, prevLabel) => {
                console.log(
                    `category changed from ${prevLabel} to ${newLabel}`
                );
                setCategory(newLabel);
            }
        );
        const fetchTopics = async () => {
            try {
                const { data, error } = await supabase.from("Topics").select();
                if (error) {
                    console.log("Error:", error);
                } else if (data && data.length > 0) {
                    let topicArray: Topics[] = [];
                    for (const element of data) {
                        topicArray.push({
                            title: element.topic_title,
                            category: element.category,
                            thumbnail: element.thumbnail,
                            content: element.content["content"][0]["text"],
                        });
                    }
                    setTopics(topicArray);
                }
            } catch (error: unknown) {
                console.log("Error:", error);
            }
        };
        fetchTopics();
    }, []);

    return (
        <div className="page">
            {/* 헤더 영역 */}
            <Header />
            <main className="main w-full flex-1 flex flex-col items-center overflow-auto">
                <div className="main__container w-full max-w-332 flex-1 flex p-6">
                    <SidebarProvider>
                        <AppSidebar />
                        <div className="main__container__contents h-full sm:w-[calc(100%-256px)] w-full flex flex-col relative">
                            <Hot />
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
                                <div className="w-full flex-1 grid lg:grid-cols-2 grid-cols-1 sm:gap-6 m-2 overflow-auto">
                                    {topics.length > 0 &&
                                        topics.map((topic, index) => {
                                            if (category === topic.title || "")
                                                return (
                                                    <NewCard
                                                        key={index}
                                                        title={topic.title}
                                                        category={
                                                            topic.category
                                                        }
                                                        thumbnail={
                                                            topic.thumbnail
                                                        }
                                                        content={topic.content}
                                                    />
                                                );
                                        })}
                                </div>
                            </div>
                            <div className="fixed right-1/2 bottom-10 translate-x-1/2 z-20 flex items-center gap-3 md:gap-4">
                                <Button
                                    asChild
                                    variant="destructive"
                                    className="flex items-center font-semibold h-9 w-50 md:py-6 md:text-base rounded-full"
                                >
                                    <Link to={"/Topics/new-topic"}>
                                        <PencilLine size={24} />
                                        토픽 작성하기
                                    </Link>
                                </Button>
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
