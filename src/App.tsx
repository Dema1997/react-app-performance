import React, { Profiler } from "react";
import "./App.css";
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
      </main>
    </div>
  );
}

export default React.memo(App);
