import "./bootstrap";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Counter from "./components/Counter";
import { TopPage } from "./components/TopPage";
import { PostPage } from "./components/PostPage";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { Header } from "./components/Header";

const colors = {
    brand: {
        900: "#1a365d",
        800: "#153e75",
        700: "#2a69ac",
    },
};

const theme = extendTheme({ colors });

function App() {
    return (
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <Header />
                <div id="main" className="main">
                    <Routes>
                        <Route path="/" element={<TopPage />} />
                        <Route path="/posts" element={<PostPage />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </ChakraProvider>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
