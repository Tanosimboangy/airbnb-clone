import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Header />
            <main className="main">
                <ul>
                    <li><h2>Stays in Finland</h2></li>
                    <li></li>
                </ul>
                <div className="wrapper_main">
                    <Main className="main" />
                </div>
            </main>
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
