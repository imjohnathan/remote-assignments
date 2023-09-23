import Header from "@/components/Header";
import Hero from "@/components/SectionHero";
import MainContent from "@/components/SectionContent";

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
