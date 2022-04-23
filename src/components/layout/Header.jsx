// Components
import Navbar from "../ui/Navbar";
import HelpIcon from "../icons/HelpIcon";

// Assets
import BoldLogo from "../../assets/bold-logo.svg";

// Styles
import classes from "../../scss/components/layout/Header.module.scss";

const menuItems = [
  { tag: "Mi negocio", url: "#", icon: null },
  {
    tag: "Ayuda",
    url: "#",
    icon: <HelpIcon />,
  },
];

const logo = { img: BoldLogo, url: "https://bold.co/" };

const Header = () => {
  return (
    <header className={classes["main-header"]}>
      <Navbar logo={logo} menuItems={menuItems} />
    </header>
  );
};

export default Header;
