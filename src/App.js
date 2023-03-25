import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="sign-up" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
