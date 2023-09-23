import Header from "@/components/Header.js";
import Hero from "@/components/SectionHero.js";
import MainContent from "@/components/SectionContent.js";

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
