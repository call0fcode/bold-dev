import { useState } from "react";

// Components
import SettingsIcon from "../../icons/SettingsIcon";
import Popup from "../Popup";

// Styles
import classes from "../../../scss/components/ui/buttons/FilterButton.module.scss";

const options = [
  { id: "terminal", label: "Cobro con datáfono" },
  { id: "link", label: "Cobros con link de pago" },
  { id: "all", label: "Ver todos" },
];

const FilterButton = ({ title }) => {
  const [open, setOpen] = useState(false);

  const togglePopup = () => {
    setOpen((prevState) => setOpen(!prevState));
  };

  return (
    <div className={classes.wrapper}>
      <button className={classes.button} onClick={togglePopup}>
        <span>{title}</span>
        <SettingsIcon />
      </button>
      {open && (
        <Popup title={title} togglePopup={togglePopup} options={options} />
      )}
    </div>
  );
};

export default FilterButton;
