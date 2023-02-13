import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Message } from "./pages/Message";
import { Buttons } from "./pages/Buttons";
import { Router } from "./pages/Router";

function App() {
  return (
    <div>
      <Message />
      <Buttons />
    </div>
  );
}

export default App;
