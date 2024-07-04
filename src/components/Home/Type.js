import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Big Data Engineer",
          "C++ Developer",
          "Software Engineer",
          "AI/ML Engineer",
          "Research Scientist",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
