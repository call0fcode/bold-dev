// Components
import SummaryCard from "../ui/SummaryCard";
import DateSelectorBar from "../ui/DateSelectorBar";
import FilterButton from "../ui/buttons/FilterButton";

// Styles
import classes from "../../scss/components/sections/Overview.module.scss";

const Overview = () => {
  return (
    <section className={classes.overview}>
      <SummaryCard />
      <div className={classes.filters}>
        <DateSelectorBar />
        <div className={classes["filter-container"]}>
          <FilterButton title="Filtrar" />
        </div>
      </div>
    </section>
  );
};

export default Overview;
