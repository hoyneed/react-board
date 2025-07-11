import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

function Topics() {
    return (
        <div className="page">
            {/* 헤더 영역 */}
            <Header />
            <main className="main w-full flex-1 flex flex-col items-center">
                <div className="main__container w-full flex-1 flex flex-col">
                    <SidebarProvider>
                        <AppSidebar />
                        <main>
                            <SidebarTrigger />
                            {children}
                        </main>
                    </SidebarProvider>
                </div>
                <Footer />
            </main>
        </div>
    );
}

export default Topics;
