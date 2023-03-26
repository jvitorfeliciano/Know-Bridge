import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/user/:userName"></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
