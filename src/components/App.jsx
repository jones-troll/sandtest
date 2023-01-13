import React from "react";

function App() {
  const [buttonColor, setButtonColor] = React.useState("white");
  function onMouseHandler() {
    setButtonColor("black");
  }
  function onMouseOutHandler() {
    setButtonColor("white");
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: buttonColor }}
        onMouseOver={onMouseHandler}
        onMouseOut={onMouseOutHandler}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
