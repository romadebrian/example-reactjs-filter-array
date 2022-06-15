import { Fragment, useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [number] = useState([]);
  const [isload, setIsload] = useState();
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);

  useEffect(() => {
    if (isload !== true) {
      console.log("is loaded");
      setIsload(true);

      let i = min;
      do {
        // console.log(i);
        number.push(i);

        i++;
      } while (i <= max);

      console.log("result: ", number);
    }
  }, [isload, number, min, max]);

  const handleFilter = (val) => {
    return val >= min && val <= max;
  };

  return (
    <div className="App">
      <h1>Filter array reactjs</h1>
      <label>set min array = </label>{" "}
      <input defaultValue={min} onChange={(e) => setMin(e.target.value)} />
      <label>set max array {max} = </label>{" "}
      <input defaultValue={max} onChange={(e) => setMax(e.target.value)} />
      <div>
        {number.length > 0 ? (
          <Fragment>
            {number.filter(handleFilter).map((No) => {
              return <p key={No}> {No} </p>;
            })}
          </Fragment>
        ) : null}
      </div>
    </div>
  );
}
