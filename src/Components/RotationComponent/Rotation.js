import React, { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";

function Rotation({ rotation = 0, timing = 150, children }) {
  const [isRotated, setIsRotated] = React.useState(false);
  const style = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden",
    transform: isRotated ? `rotate(${rotation}deg)` : `rotate(0deg)`,
    config: {
      tension: 300,
      friction: 10,
    },
  });
  React.useEffect(() => {
    if (!isRotated) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsRotated(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isRotated, timing]);
  const trigger = () => {
    setIsRotated(true);
  };
  return (
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
}

export default Rotation;
