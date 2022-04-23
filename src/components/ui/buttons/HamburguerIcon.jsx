import { useState } from "react";

import classes from "../../../scss/components/ui/buttons/HamburguerIcon.module.scss";

const HamburguerIcon = ({ setShowMobileMenu }) => {
  const [menuActive, setMenuActive] = useState(false);
  const active = menuActive ? classes["is-active"] : "";

  const toggleMenu = () => {
    menuActive ? setMenuActive(false) : setMenuActive(true);
    setShowMobileMenu((prevState) => !prevState);
  };

  return (
    <button
      className={`${classes.hamburger} ${classes["hamburger--spring"]} ${active}`}
      type="button"
      onClick={toggleMenu}
    >
      <span className={classes["hamburger-box"]}>
        <span className={classes["hamburger-inner"]}></span>
      </span>
    </button>
  );
};

export default HamburguerIcon;
