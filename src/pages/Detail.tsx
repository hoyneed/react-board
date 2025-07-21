import { Footer, Header } from "@/components/common";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
    Button,
    Separator,
} from "@/components/ui";
import { createClient } from "@/lib/client";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Detail() {
    const [title, setTitle] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [thumbnail, setThumbnail] = useState<string>("");
    const [uuid, setUuid] = useState<string>("");
    const [login, setLogin] = useState<string>("");
    const { id } = useParams();

    useEffect(() => {
        const supabase = createClient();

        const fetchContent = async () => {
            try {
                const { data } = await supabase
                    .from("Topics")
                    .select("*")
                    .eq("id", id);
                if (data) {
                    for (const element of data) {
                        setTitle(element.topic_title);
                        setCategory(element.category);
                        setThumbnail(element.thumbnail);
                        setUuid(element.user_id);
                    }
                }
            } catch (error: unknown) {
                console.log("error", error);
            }

            try {
                const { data } = await supabase.auth.getSession();
                if (typeof data.session?.user.id === "string") {
                    setLogin(data.session?.user.id);
                }
            } catch (error: unknown) {
                console.log("Not logged in ", error);
            }
        };
        fetchContent();
    }, []);

    return (
        <div className="page">
            <Header />
            <main className="main w-full flex-1 flex flex-col items-center overflow-auto">
                <div
                    className="main__title max-w-332 w-full h-72 flex flex-col items-center justify-center bg-cover bg-center gap-1 relative"
                    style={{ backgroundImage: `url(${thumbnail})` }}
                >
                    <div className="absolute top-8 left-8 h-8 w-fit flex gap-2">
                        <Button variant="secondary" className="w-8 h-8" asChild>
                            <Link to={"/Topics"}>
                                <ChevronLeft color="#fff" />
                            </Link>
                        </Button>
                    </div>
                    <div className="h-7 text-black text-sm"> #{category}</div>
                    <div className="h-9 text-black text-[30px]">{title}</div>
                    <div className="w-8 flex items-center justify-center">
                        <Separator className="my-4" />
                    </div>
                    <div className="h-7 text-black text-sm flex items-center justify-center">
                        {uuid === login && <p>작성자가 로그인 돼 있습니다.</p>}
                    </div>
                    <div className=""></div>
                </div>
                <div className="content max-w-332 w-full flex-1 flex flex-col"></div>

                <Footer />
            </main>
        </div>
    );
}

export default Detail;
