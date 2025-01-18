import React from "react";

const Header = ({ setCurrentSection, currentSection }) => {
  const handleNavigation = (section) => {
    setCurrentSection(section);
  };

  return (
    <header>
      <h1>Kun Wansom</h1>
      <nav>
        <ul>
          {["About Me", "Portfolio", "Contact", "Resume"].map((section) => (
            <li
              key={section}
              onClick={() => handleNavigation(section)}
              className={currentSection === section ? "active" : ""}
            >
              {section}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
