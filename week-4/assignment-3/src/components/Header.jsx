import { useState } from "react";

const WebHeader = ({ toggleSlideMenu }) => (
  <header className="master-header">
    <div className="nav">
      {/* <!--Website Logo--> */}
      <div className="logo">
        <h1>Website Title / Logo</h1>
      </div>

      {/* <!--Menu Nav--> */}
      <nav className="menu">
        <div onClick={toggleSlideMenu} className="mobile-menu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.3 198.14">
            <g id="圖層_2" data-name="圖層 2">
              <g id="OBJECTS">
                <path d="M286.3,0V21.94H0V0Z" />
                <path d="M0,110V88.1H286.28V110Z" />
                <path d="M0,176.21H286.29v21.93H0Z" />
              </g>
            </g>
          </svg>
        </div>
        <ul className="desktop-menu">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
      </nav>
    </div>
  </header>
);

const MobileMenu = ({ isOpen, toggleSlideMenu }) => (
  <div
    onClick={toggleSlideMenu}
    className={`slide-menu ${isOpen ? "show" : ""}`}
  >
    <div className="slide-menu_wrapper">
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
      <button onClick={toggleSlideMenu} className="close">
        X
      </button>
    </div>
  </div>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSlideMenu = (e) => {
    if (
      e.target.closest(".slide-menu_wrapper") &&
      !e.target.classList.contains("close")
    )
      return; //prevent click inside the menu to close
    setIsOpen((prev) => !prev);
    e.stopPropagation();
  };
  return (
    <>
      <WebHeader toggleSlideMenu={toggleSlideMenu} />
      {/* <!--Mobile Menu--> */}
      <MobileMenu toggleSlideMenu={toggleSlideMenu} isOpen={isOpen} />
    </>
  );
};

export default Header;
