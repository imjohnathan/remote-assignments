import { useState } from "react";

const Hero = () => {
  const welcomeMsg = "Welcome Message";
  const [heroText, setHeroText] = useState(welcomeMsg);
  const handleClick = () => {
    if (heroText === welcomeMsg) {
      setHeroText("Have a Good Time!");
    } else {
      setHeroText(welcomeMsg);
    }
  };
  return (
    <section className="hero-section">
      <h1 onClick={handleClick}>{heroText}</h1>
    </section>
  );
};

export default Hero;
