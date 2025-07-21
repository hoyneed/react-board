import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import TopicsPage from "./pages/Topics";
import CreatePage from "./pages/Create";
import Detail from "./pages/Detail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
// import App from "./hooks/useStore.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/Sign-up" element={<SignupPage />} />
                    <Route path="/Login" element={<LoginPage />} />
                    <Route path="/Topics">
                        <Route index element={<TopicsPage />} />
                        <Route path=":id" element={<Detail />} />
                    </Route>
                    <Route path="/Topics/new-topic" element={<CreatePage />} />
                </Routes>
                <Toaster />
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>
);
