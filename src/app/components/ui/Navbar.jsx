import { useState } from "react";

const NavbarMain = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
    console.log(navbarOpen);
  };

  return (
    <div className="navbar">
      {!navbarOpen ? (
        <>
          <div className="navbar__logo">Angito</div>
          <div className="navbar__button" onClick={handleToggle}></div>
        </>
      ) : (
        <>
          <div className="navbar__logo logoChange">Angito</div>
          <div className="navbar__toggle" onClick={handleToggle}></div>
          <div className="navbar__menu">
            <div className="menu">
              <div className="nav">
                <div className="title">Mes Réalisations</div>
                <a href="#about" className="nav__link">
                  About
                </a>
                <a href="#projects" className="nav__link">
                  Projects
                </a>
              </div>
              <div className="contact">
                <div className="title">Me Contacter</div>
                <div className="nav__link">enzo.angot@gmail.com</div>
              </div>
              <div className="social">
                <div className="title">Mes Réseaux</div>
                <div className="social__link">
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
                    alt="github"
                  />
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png"
                    alt="linkdin"
                  />
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/000000/twitter.png"
                    alt="x"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NavbarMain;
