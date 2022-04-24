// Components
import SettingsIcon from "../../icons/SettingsIcon";

// Styles
import classes from "../../../scss/components/ui/buttons/FilterButton.module.scss";

const FilterButton = () => {
  return (
    <button className={classes.button}>
      <span>Filtrar</span>
      <SettingsIcon />
    </button>
  );
};

export default FilterButton;
