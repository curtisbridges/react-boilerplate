let count = 0;
const minusOne = () => {
  count--;
  renderCounterApp();
};

const addOne = () => {
  count++;
  renderCounterApp();
};

const reset = () => {
  count = 0;
  renderCounterApp();
};

const renderCounterApp = () => {
  let templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={minusOne}>-1</button>
      <button onClick={addOne}>+1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  // Rendering

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
