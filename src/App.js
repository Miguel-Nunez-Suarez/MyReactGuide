import React from "react";
import "./App.css";
import Person from "./Person/Person";

const App = () => {
  return (
    <div className="App">
      <h1>My First React App</h1>
      <Person name="Miguel" age="36">
        {" "}
        And I love reading!{" "}
      </Person>
      <Person name="Brian" age="47" />
      <Person name="Laika" age="8" />
    </div>
    // React.createElement(
    //   "div",
    //   null,
    //   React.createElement("h1", { className: "App" }, "Hello React World")
    // )
  );
  //);
};

export default App;
