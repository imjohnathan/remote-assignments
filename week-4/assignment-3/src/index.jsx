import Header from "./components/header";
import Hero from "./components/sectionHero";
import MainContent from "./components/sectionContent";

import "./style.css";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Hero />
        <MainContent />
      </main>
    </div>
  );
}
