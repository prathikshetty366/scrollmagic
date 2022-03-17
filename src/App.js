import React, { useRef, useState, useEffect } from "react";

import "./styles.css";
import Particle from "./paritcle/particle";
import Sequence from "./scrollmagic/Sequence/index";
import Card from "./Components/Card/Card";
import { Controller, Scene } from "react-scrollmagic";
import Aos from "aos";
import "aos/dist/aos.css";
import Rotation from "./Components/RotationComponent/Rotation";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  const characters = [
    {
      id: 1,
      name: "Wonder Woman",
      alterEgo:
        "lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      alignment: "herolkvjldfffffffffffffffffffffffsdkjfkjhsjkhgkjhkjhjhbvjhgb",
    },
  ];
  useEffect(() => {
    Aos.init({
      // offset: 100,
      duration: 600,
      // easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  const ref = useRef();
  return (
    <>
      <div className="App" styles={{ overflow: "hidden" }}>
        {/* custom animated curson using "react-animated-cursor"  */}
        {/* <AnimatedCursor
          innerSize={8}
          outerSize={8}
          color="193, 11, 111"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
        /> */}
        <Controller>
          <Scene duration="500%" triggerHook="onLeave" pin>
            {(progress) => (
              <div style={{ height: "100vh", position: "relative" }}>
                <Sequence ref={ref} progress={progress} />
                {/* this the js particle implementation  */}
                <Particle />
              </div>
            )}
          </Scene>
        </Controller>
        <div>
          {/* Rotation on hover on the div or any component */}

          {/* <Rotation rotation={0.5} timing={200}> */}
          {/* slides in from the left  */}
          <div data-aos="slide-left">
            {characters.map((character) => {
              return <Card character={character} key={character.id} />;
            })}
          </div>
          <div data-aos="fade-up">
            {characters.map((character) => {
              return <Card character={character} key={character.id} />;
            })}
          </div>
          <div data-aos="fade-up">
            {characters.map((character) => {
              return <Card character={character} key={character.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
