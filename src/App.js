import { BrowserRouter, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles";
import Header from "./components/Header";

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header/>
            <Routes></Routes>
        </BrowserRouter>
    );
}

export default App;
