// Components
import InfoIcon from "../icons/InfoIcon";

// Styles
import classes from "../../scss/components/ui/SummaryCard.module.scss";

const SummaryCard = ({ date, totalAmount }) => {
  return (
    <div className={classes.card}>
      <header className={classes.title}>
        <p>Total de ventas de septiembre</p>
        <InfoIcon />
      </header>
      <div className={classes.content}>
        <p className={classes["total-amount"]}>${totalAmount}</p>
        <p className={classes.date}>Septiembre 2021</p>
      </div>
    </div>
  );
};

export default SummaryCard;
