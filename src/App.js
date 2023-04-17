import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Message } from "./pages/Message";
import { Buttons } from "./pages/Buttons";
import { Router } from "./pages/Router";
import { Counters } from "./pages/Counters";
import { Items } from "./pages/Items";
import { List } from "./pages/List";
import { TicTacToe } from "./tictactoe/TicTacToe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Router />} >
          <Route index element={<Message />} />
          <Route path="buttons" element={<Buttons />} />
          <Route path="counters" element={<Counters />} />
          <Route path="items" element={<Items />} />
          <Route path="list" element={<List />} />
          <Route path="tictactoe" element={<TicTacToe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
