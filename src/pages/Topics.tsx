import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

function TopicsPage() {
    return (
        <div className="page">
            {/* 헤더 영역 */}
            <Header />
            <main className="main w-full flex-1 flex flex-col items-center">
                <div className="main__container w-full max-w-332 flex-1 flex">
                    <SidebarProvider>
                        <AppSidebar />
                        <main></main>
                    </SidebarProvider>
                </div>
                <Footer />
            </main>
        </div>
    );
}

export default TopicsPage;
