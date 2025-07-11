import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/Sign-up" element={<SignupPage />} />
                    <Route path="/Login" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
