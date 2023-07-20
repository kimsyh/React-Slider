import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";

export default function App() {
  const [startX, setStartX] = useState(); //처음 클릭한 x좌표

  //screenX, screenY (왼쪽 상단 모서리가 0,0)
  //pageX, pageY ()
  const pointer = document.querySelector("#point");

  const dragStartHandler = (e: any) => {
    //let posX = e.clientX;
    //let posY = e.clientY;

    //    let originalX = e.targe=t.offsetLeft;
    // let originalY = e.target.offsetTop;
    console.log("1", e);
  };

  pointer?.addEventListener("drag", (e) => {
    console.log("drag");
    dragStartHandler(e);
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
