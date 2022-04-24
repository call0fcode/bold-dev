import { useState, useContext } from "react";

// Contexts
import { DatesContext } from "../../context/DatesContext";
import { AmountsContext } from "../../context/AmountsContext";

// Styles
import classes from "../../scss/components/ui/DateSelectorBar.module.scss";

// Helpers
import formatDate from "../../helpers/formatDate";

const barItems = ["Hoy", "Esta semana", formatDate(new Date()).monthLongFormat];

const DateSelectorBar = () => {
  const { setSelectedDate } = useContext(DatesContext);
  const { setTotalAmount } = useContext(AmountsContext);

  const [barItem, setBarItem] = useState(0);

  const selectDate = (e) => {
    const barItemIndex = +e.target.getAttribute("data-bar-item");
    setBarItem(barItemIndex);
    if (barItemIndex == 0) {
      setTotalAmount("2’345.600");
      setSelectedDate("hoy");
    }
    if (barItemIndex == 1) {
      setTotalAmount("5’725.420");
      setSelectedDate("semana");
    }
    if (barItemIndex == 2) {
      setTotalAmount("16’372.900");
      setSelectedDate("mes");
    }
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
