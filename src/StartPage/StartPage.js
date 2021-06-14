import React, { useState } from "react";
import Text from "../ui/Text/Text";
import Button from "../ui/Button/Button";
import "./start-page.css";
import { useHistory } from "react-router-dom";

export default function StartPage() {
  const history = useHistory();
  const [visibility, setVisibility] = useState("hidden");

  const routeChange = (path) => {
    history.push(`/mindfulness/:${path}`);
  };

  const animationRested = (isRested) => {
    setVisibility(isRested);
  };

  const moods = [
    "happy",
    "stressed",
    "anxious",
    "relaxed",
    "angry",
    "tired",
    "peaceful",
    "sad",
  ];

  return (
    <div className="start-page-container">
      <Text animationRest={animationRested} />
      <table className="button-table">
        <tbody>
          <tr>
            {moods.map((title) => {
              return (
                <td key={Math.random() * 100 + 1}>
                  <Button
                    value={title}
                    onClick={() => routeChange(title)}
                    className="button"
                    visible={visibility}
                    icon={null}
                    animated={true}
                  />
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
