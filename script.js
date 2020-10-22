import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Main className="main"/>
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
