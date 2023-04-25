{/* <div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div> 
*/}
const parent = React.createElement(
    "div",
    { id: "parent" }
    , React.createElement(
        "div",
        { id: "child" }
        , React.createElement(
            "h1",
            {}
            , "I am an H1 tag"
        )
    )
);
const heading = React.createElement(
    "h1",
    {
        id: "heading"
        , xyz: "abc"
    },
    "Hello World From React!"
);

console.log(heading);  //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);