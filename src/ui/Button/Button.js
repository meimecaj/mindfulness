import React from "react";
import { useSpring, animated, config } from "react-spring";
import { Link } from "react-router-dom";
import "./button.css";

export default function Button(props) {
  const buttonProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: false,
    reverse: false,
    config: config.molasses,
  });

  const animatedButton = () => {
    return (
      <animated.button
        onClick={props.onClick ? () => props.onClick() : null}
        className={`${props.className}`}
        style={{ ...buttonProps, visibility: props.visible }}
        title={props.title}
      >
        {props.icon ? (
          <Link to={props.link}>
            <img className="icon-button" src={props.icon} alt={props.iconAlt} />
          </Link>
        ) : (
          props.value
        )}
      </animated.button>
    );
  };

  return (
    <div className="button-container">
      {props.animated ? (
        animatedButton()
      ) : (
        <button
          onClick={() => props.onClick()}
          className={`${props.className}`}
          title={props.title}
        >
          {props.icon ? (
            <img className="icon-home" src={props.icon} alt={props.iconAlt} />
          ) : (
            props.value
          )}
        </button>
      )}
    </div>
  );
}
