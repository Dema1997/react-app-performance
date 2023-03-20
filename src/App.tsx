import React, { Profiler } from "react";
import "./App.css";
import InputsContainer from "./components/inputs-container";
import Main from "./components/main";

function App() {
  return (
    <div className="App">
      <main className="App-body">
        <Profiler
          id="MainComponent"
          onRender={() => {
            console.log("Profiler: Main Component");
            console.log("------------------------------------------");
          }}
        >
          <Main />
        </Profiler>

        <Profiler
          id="InputsContainerComponent"
          onRender={() => {
            console.log("Profiler: Inputs-Container Component");
            console.log("------------------------------------------");
          }}
        >
          <InputsContainer />
        </Profiler>
      </main>
    </div>
  );
}

export default React.memo(App);
