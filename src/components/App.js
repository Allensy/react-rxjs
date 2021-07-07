import React, { useState, useEffect } from "react";
import List from "./List";
import { useObservable } from "../hooks/useObservable";
import { names$ } from "../store";
const App = () => {
  const names = useObservable(names$, []);

  return (
    <div className="App">
      <h1>RxJS with React</h1>

      <List items={names} />
    </div>
  );
};

export default App;
