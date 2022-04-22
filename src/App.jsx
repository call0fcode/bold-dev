import classes from "./App.module.scss";

function App() {
  return (
    <main>
      <p className={classes["highlighted-text"]}>
        Template designed with ❤ by{" "}
        <a
          href="https://github.com/call0fcode/Enhanced-React-JS-Template"
          target="_blank"
          rel="noreferrer"
        >
          call0fCode
        </a>
      </p>
    </main>
  );
}

export default App;
