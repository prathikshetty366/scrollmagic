import React, { useRef, useState, useEffect } from "react";

import "./styles.css";
import Particle from "./paritcle/particle";
import Sequence from "./scrollmagic/Sequence/index";
import Card from "./Components/Card/Card";
import { Controller, Scene } from "react-scrollmagic";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  const characters = [
    {
      id: 1,
      name: "Wonder Woman",
      alterEgo:
        "lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      alignment:
        "herolkvjl ;gkr;tkhj ;kjdfhlj fksl;gkje ;kfjealghj ;fjkehkj d;fkjehlk",
    },
  ];
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const ref = useRef();
  return (
    <>
      <div className="App" styles={{ overflow: "hidden" }}>
        <Controller>
          <Scene duration="500%" triggerHook="onLeave" pin>
            {(progress) => (
              <div style={{ height: "100vh", position: "relative" }}>
                <Sequence ref={ref} progress={progress} />
              </div>
            )}
          </Scene>
        </Controller>
        <div data-aos="slide-left">
          {/* <Particle /> */}
          {characters.map((character) => {
            return <Card character={character} key={character.id} />;
          })}
        </div>
        <div data-aos="fade-up">
          {/* <Particle /> */}
          {characters.map((character) => {
            return <Card character={character} key={character.id} />;
          })}
        </div>
        <div data-aos="slide-right fade-up">
          {/* <Particle /> */}
          {characters.map((character) => {
            return <Card character={character} key={character.id} />;
          })}
        </div>
      </div>
    </>
  );
};
export default App;
