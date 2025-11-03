import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../features/login/page/LoginPage.tsx";
import Navbar from "./navbar/Navbar.tsx";

export default function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login/" element={<LoginPage/>} />
                <Route path="/" element={<LoginPage/>} />
                <Route path="/menu/" element={<LoginPage/>} />
                <Route path="/menu/promociones/" element={<LoginPage/>} />
                <Route path="/locales/" element={<LoginPage/>} />
                <Route path="*" element={<LoginPage/>} />
            </Routes>
        </Router>
    );
}