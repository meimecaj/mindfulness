import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
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
    window.location.replace("/");
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
          <Route path="/:mood">
            <MoodHelp />
          </Route>
          <Route path="/">
            <StartPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
