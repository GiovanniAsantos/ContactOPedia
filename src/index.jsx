import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./Components/Header";
import Counter from "./Components/Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Header />
        <Counter />
    </React.StrictMode>
);