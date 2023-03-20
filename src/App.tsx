import React, { Profiler } from "react";
import "./App.css";
import InputsContainer from "./components/inputs-container";
import Main from "./components/main";

/* Wrap a component tree in a <Profiler> to measure its rendering performance. */

function App() {
  return (
    <div className="App">
      <main className="App-body">
        <Profiler
          id="MainComponent"
          onRender={(baseDuration, actualDuration) => {
            console.log("Profiler: Main Component");
            console.log(baseDuration, "BASE DURATION");
            console.log(baseDuration, "ACTUAL DURATION");
            console.log("------------------------------------------");
          }}
        >
          <Main />
        </Profiler>

        <Profiler
          id="InputsContainerComponent"
          onRender={(baseDuration, actualDuration) => {
            console.log("Profiler: Inputs-Container Component");
            console.log(baseDuration, "BASE DURATION");
            console.log(baseDuration, "ACTUAL DURATION");
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
