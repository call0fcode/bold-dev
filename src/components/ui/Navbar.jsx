import { useState } from "react";

// Components
import HamburguerIcon from "./buttons/HamburguerIcon";

// Styles
import classes from "../../scss/components/ui/Navbar.module.scss";

const Navbar = ({ logo, menuItems }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const isActive = showMobileMenu ? classes["is-active"] : "";

  return (
    <nav className={classes.navbar}>
      <a
        href={logo.url}
        target="_blank"
        rel="noreferrer"
        className={classes.logo}
      >
        <img src={logo.img} alt="Logo de Bold.co" />
      </a>
      <HamburguerIcon setShowMobileMenu={setShowMobileMenu} />
      <ul className={`${classes.menu} ${isActive}`}>
        {menuItems.map((item) => (
          <li key={item.tag} className={classes["menu-item"]}>
            <a href={item.url} target="_blank" rel="noreferrer">
              <span className={item.icon && classes["link-with-icon"]}>
                {item.tag}
              </span>
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
