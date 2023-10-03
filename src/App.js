import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./app.css";

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/movie/:id" element={<Detail />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
