import { useState } from "react";

// Styles
import classes from "../../scss/components/ui/DateSelectorBar.module.scss";

// Get current month in long format (abril, diciembre, septiembre, etc)
const currentMonth = new Date().toLocaleString("default", { month: "long" });

// Two hardcoded items and the last one generated dynamically and capitalized.
const barItems = [
  "Hoy",
  "Esta semana",
  currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1),
];

const DateSelectorBar = () => {
  const [barItem, setBarItem] = useState(0);

  const selectDate = (e) => {
    const barItemIndex = +e.target.getAttribute("data-bar-item");
    setBarItem(barItemIndex);
  };

  return (
    <ul className={classes.bar}>
      {barItems.map((item, index) => {
        const active = index === barItem ? classes["is-active"] : "";
        return (
          <li
            key={index}
            data-bar-item={index}
            role="button"
            tabIndex="0"
            className={`${classes["bar-item"]} ${active}`}
            onClick={selectDate}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default DateSelectorBar;
