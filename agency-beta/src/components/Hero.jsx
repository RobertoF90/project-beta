import React from "react";

function Hero() {
  const style = {
    fontSize: "36px",
    background: "-webkit-linear-gradient(#A8FF84, #4C8E44)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div className="">
      <h1 style={style}>Visibilità</h1>
    </div>
  );
}

export default Hero;
