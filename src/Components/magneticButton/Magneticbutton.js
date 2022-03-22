import React, { useEffect } from "react";
import "./magneticbutton.css";

function Magneticbutton() {
  function initialize() {
    const btns = document.querySelectorAll(".btn");
    btns.forEach((btn) => {
      btn.addEventListener("mousemove", function(e) {
        const position = btn.getBoundingClientRect();
        const x = e.pageX - position.left - position.width;
        const y = e.pageY - position.top - position.height;
        btn.children[0].style.transform = "translate(" + x + "px," + y + "px)";
      });
    });
  }

  return (
    <div className="body">
      <a className="btn" onclick={initialize}>
        <span>HELLO</span>
      </a>
    </div>
  );
}

export default Magneticbutton;
