import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles";
import Header from "./components/Header";
import { UserProvider } from "./contexts/userContext";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserPage from "./pages/UserPage";

function App() {
    console.log('app')
    return (
        <UserProvider>
            <BrowserRouter>
                <GlobalStyle />
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/user/:userName" element={<UserPage />} />
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
}

export default App;
