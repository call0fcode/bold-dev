import { useContext } from "react";

// Contexts
import { DatesContext } from "../../context/DatesContext";
import { AmountsContext } from "../../context/AmountsContext";

// Components
import InfoIcon from "../icons/InfoIcon";

// Styles
import classes from "../../scss/components/ui/SummaryCard.module.scss";

const SummaryCard = () => {
  const { selectedDate, dateTag } = useContext(DatesContext);
  const { totalAmount } = useContext(AmountsContext);

  return (
    <div className={classes.card}>
      <header className={classes.title}>
        <p>
          Total de ventas de {selectedDate === "semana" && "esta"}
          {selectedDate === "mes" && "este"} {selectedDate}
        </p>
        <InfoIcon />
      </header>
      <div className={classes.content}>
        <p className={classes["total-amount"]}>${totalAmount}</p>
        <p className={classes.date}>{dateTag}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
