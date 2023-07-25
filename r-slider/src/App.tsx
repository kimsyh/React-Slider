import React from "react";
import "./App.css";

export default function App() {
  const pointer = document.querySelector("#point");

  const dragStargetHandler = (e: any) => {
    let posX = e.clientX;
    let posY = e.clientY;

    let originalX = e.target.offsetLeft;
    let originalY = e.target.offsetTop;

    console.log("x", posX, "y", posY);
    console.log("originalX", originalX, "originalY", originalY);
  };

  pointer?.addEventListener("click", (event) => {
    dragStargetHandler(event);
  });

  return (
    <>
      <div className="slider">
        <div className="background">
          <div className="move" id="move"></div>
        </div>
        <div className="point" id="point"></div>
      </div>

      <div className="box" id="box"></div>
    </>
  );
}
