import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import MainRouter from "./app/routers/MainRouter";
import MainLayout from "./app/layouts/MainLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainLayout>
          <MainRouter />
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
