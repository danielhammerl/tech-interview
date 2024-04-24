import "./styles.css";
import React from "react";
import {Navigation} from "./navigation/Navigation";

export default function App() {
  return (
    <div className="App">
      <h1>Daten zu Ihrer Baufinanzierung</h1>
        <div className="content-wrapper">
            <Navigation />
            <main>

            </main>
        </div>
    </div>
  );
}
