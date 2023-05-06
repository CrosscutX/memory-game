import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <header>
        <h1>Memory Fighter</h1>
        <div className="score">
          <span>Score: 0</span>
          <span>Best Score: 0</span>
        </div>
      </header>
    </div>
  );
}
