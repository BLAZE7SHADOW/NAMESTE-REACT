
import React, { createElement } from "react";
import ReactDOM, { createRoot } from "react-dom/client";



const heading = <h1 id="heading">NAMESTE BHIYA</h1>


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);



// jsx (transpiled before it reaches the JS) - PARCEL = Babel