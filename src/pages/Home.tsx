import Footer from "@/components/Footer";
import Header from "@/components/Header";

function HomePage() {
    return (
        <div className="page">
            {/* 헤더 영역 */}
            <Header />
            <main className="main w-full flex-1 flex flex-col items-center">
                <div className="main__container w-full flex-1 flex flex-col"></div>
                <Footer />
            </main>
        </div>
    );
}

export default HomePage;
