import React from "react";

const moodTitleTranslationService = (mood) => {
  switch (mood) {
    case ":sad":
      return (
        <p className="p-title-1">
          You are feeling sad. Let's do something about it.
        </p>
      );
    case ":angry":
      return (
        <p className="p-title-1">
          You are feeling angry. Let's do something about it.
        </p>
      );
    case ":anxious":
      return (
        <p className="p-title-1">
          You are feeling anxious. Let's do something about it.
        </p>
      );
    case ":stressed":
      return (
        <p className="p-title-1">
          You are feeling stressed. Let's do something about it.
        </p>
      );
    case ":tired":
      return (
        <p className="p-title-1">
          You are feeling tired. Let's do something about it.
        </p>
      );
    case ":happy":
      return (
        <p className="p-title-2">
          It is good that you feel happy. You could still choose to do a
          short exercise.
        </p>
      );
    case ":relaxed":
      return (
        <p className="p-title-2">
          It is good that you feel relaxed. You could still choose to do a
          short exercise.
        </p>
      );
    case ":peaceful":
      return (
        <p className="p-title-2">
          It is good that you feel peaceful. You could still choose to do a
          short exercise.
        </p>
      );
  }
};

export default moodTitleTranslationService;
