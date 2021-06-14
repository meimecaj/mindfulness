import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moodTitleTranslationService from "../utils/moodTitleTranslationService";
import "./mood-help.css";
import Button from "../ui/Button/Button";
import BreathingSVG from "../../public/material-icons/face_white_36dp.svg";
import CountingSVG from "../../public/material-icons/timelapse_white_36dp.svg";
import MeditationSVG from "../../public/material-icons/self_improvement_white_36dp.svg";
import { useSpring, animated, config } from "react-spring";

export default function MoodHelp(props) {
  let { mood } = useParams();

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [flip, set] = useState(false);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        const randomQuote = data[Math.floor(Math.random() * 1643)];
        setQuote(randomQuote.text);
        setAuthor(randomQuote.author);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const quoteProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: false,
    reverse: false,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  return (
    <div className="mood-help">
      <div className="quote-container">
        {moodTitleTranslationService(mood)}
        <animated.blockquote className="shadow" style={quoteProps}>
          <p>{quote}</p>
          <footer>{author}</footer>
        </animated.blockquote>
      </div>

      <table className="exercise-button-table">
        <tbody>
          <tr>
            <td>
              <Button
                className="logo-button"
                visible="visible"
                icon={BreathingSVG}
                iconAlt="Breathing exercise"
                title="Breathing exercise"
                animated={true}
                link="/breathing"
              />
            </td>
            <td>
              <Button
                className="logo-button"
                visible="visible"
                icon={CountingSVG}
                iconAlt="Counting exercise"
                title="Counting exercise"
                animated={true}
                link="/counting"
              />
            </td>
            <td>
              <Button
                className="logo-button"
                visible="visible"
                icon={MeditationSVG}
                iconAlt="Meditation"
                title="Meditation"
                animated={true}
                link="/meditation"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
