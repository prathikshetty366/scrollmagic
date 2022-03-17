import React, { useEffect } from "react";
import "./Card.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Particle from "../../paritcle/particle";
import { bounce } from "react-animations";
import Radium, { StyleRoot } from "radium";
import Rotation from "../RotationComponent/Rotation";
function Card(props) {
  useEffect(() => {
    Aos.init({
      // offset: 100,
      duration: 2000,
      // easing: "ease-in-sine",
      // delay: 100,
    });
  }, []);
  const styles = {
    bounceInDown: {
      animation: "y 5s",
      animationName: Radium.keyframes(bounce, "bounce"),
    },
  };
  return (
    <>
      <StyleRoot>
        <div className="card-container" style={styles.bounceInDown}>
          <div className="card">
            <p>
              <strong>{props.character.name}</strong>
            </p>
            <p>{props.character.alterEgo}</p>
            <p>{props.character.alignment}</p>
          </div>
        </div>
        {/* <Particle /> */}
      </StyleRoot>
    </>
  );
}

export default Card;
