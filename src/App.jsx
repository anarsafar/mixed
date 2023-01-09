import { Children, useEffect, useLayoutEffect, useState } from "react";
import Example from "./Example";
import Home from "./component/UI/home/hero/";
// import { func } from "prop-types";
const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  console.log("test");

  useEffect(() => {
    console.log("update");
  }, [count]);

  useLayoutEffect(() => {
    //meye lazimdi
    // niye fetch burda etmeyim ki
    // for (let i = 0; i <= 10000000000; i++) {
    //   console.log("this runs first");
    // }
    console.log(`X:${window.pageXOffset} Y: ${window.pageYOffset}`);
  }, [count]);

  return (
    <div className="App">
      <Example
        firstName={"name"}
        age={30}
        movies={["silent hill", "interstellar"]}
        data={{
          theme: "#000",
        }}
        datas={[1, 2, 3, 4]}
      />
      {count}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <Home />
    </div>
  );
}

export default App;
