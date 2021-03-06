import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StartPage from "./StartPage/StartPage";
import MoodHelp from "./MoodHelp/MoodHelp";
import MeditationPage from "./MeditationPage/MeditationPage";
import BreathingPage from "./BreathingPage/BreathingPage";
import CountingPage from "./CountingPage/CountingPage";
import Button from "./ui/Button/Button";
import HomeSVG from "../public/material-icons/home_white_48dp.svg";
import "./app.css";

export default function App() {
  const navigateToHome = () => {
    window.location.replace("/mindfulness");
  };

  return (
    <div className="App">
      <Router>
        <Button
          className="home-button"
          title="Home"
          animated={false}
          icon={HomeSVG}
          iconAlt="Home"
          onClick={navigateToHome}
        />
        <Switch>
          <Route path="/meditation">
            <MeditationPage />
          </Route>
          <Route path="/breathing">
            <BreathingPage />
          </Route>
          <Route path="/counting">
            <CountingPage />
          </Route>
          <Route path="/mindfulness/:mood">
            <MoodHelp />
          </Route>
          <Route path="/mindfulness">
            <StartPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
