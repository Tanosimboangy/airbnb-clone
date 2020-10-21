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

{/* <ul>
<li><h2>Stays in Finland</h2></li>
<li><p>12 + stays</p></li>
</ul> */}