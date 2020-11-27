import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Main className="main"/>
            <Footer />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
