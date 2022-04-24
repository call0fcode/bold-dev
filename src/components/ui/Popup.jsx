// Components
import CloseIcon from "../icons/CloseIcon";

// Styles
import classes from "../../scss/components/ui/Popup.module.scss";

const Popup = ({ title, togglePopup, options }) => {
  const setFilterSettings = (e) => {
    console.log(`Setting filter options to: ${e.target.name} `);
  };

  const runFilter = () => {
    togglePopup();
  };

  return (
    <div className={`${classes.popup}`}>
      <header className={classes.header}>
        <p className={classes.title}>{title}</p>
        <CloseIcon closeFunc={togglePopup} styles={classes.close} />
      </header>
      <div className={classes.content}>
        <form className={classes.form}>
          {options.map((option, index) => {
            return (
              <div key={index} className={classes["input-group"]}>
                <input
                  type="checkbox"
                  name={option.id}
                  id={option.id}
                  onChange={setFilterSettings}
                />
                <label htmlFor={option.id}>{option.label}</label>
              </div>
            );
          })}
        </form>
        <button className={classes.button} onClick={runFilter}>
          Aplicar
        </button>
      </div>
    </div>
  );
};

export default Popup;
