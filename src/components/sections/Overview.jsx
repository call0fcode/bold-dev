// Styles
import classes from "../../scss/components/sections/Overview.module.scss";
import SummaryCard from "../ui/SummaryCard";

const Overview = () => {
  return (
    <section className={classes.overview}>
      <SummaryCard totalAmount={"1’560.000"} />
      <div className={classes.filters}>Filters</div>
    </section>
  );
};

export default Overview;
