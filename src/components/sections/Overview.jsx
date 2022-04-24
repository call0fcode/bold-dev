// Styles
import classes from "../../scss/components/sections/Overview.module.scss";
import FilterButton from "../ui/buttons/FilterButton";
import DateSelectorBar from "../ui/DateSelectorBar";
import SummaryCard from "../ui/SummaryCard";

const Overview = () => {
  return (
    <section className={classes.overview}>
      <SummaryCard totalAmount={"1’560.000"} />
      <div className={classes.filters}>
        <DateSelectorBar />
        <div className={classes["filter-container"]}>
          <FilterButton />
        </div>
      </div>
    </section>
  );
};

export default Overview;
