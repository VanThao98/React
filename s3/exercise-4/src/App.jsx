// import React, { useState } from "react";
import React from "react";

function App() {
  /* Contants used in this component */
  const DOLLAR_TO_EURO_RATIO = 0.92;
  const DOLLAR_TO_DONG_RATIO = 24560;

  let valueDollars = 15;
  // const [valueDollars, setValueDollars] = useState('15');
  // const handleInputChange = (event) => {
    // setValueDollars(event.target.value); // Cập nhật giá trị mới từ input
    // const inputValue = event.target.value;
    // if ( parseInt(inputValue) >= 0) {
    //   setValueDollars(inputValue);
    // }
  // };

  // TODO : You need to implement and call this function in your JSX code
  // Convert the given value in dollars to a value in euro
  function dollarToEuro(valueInDollars) {
    let euro = valueInDollars * DOLLAR_TO_EURO_RATIO;
    return euro
  }

  // TODO : You need to implement and call this function in your JSX code
  // Convert the given value in dollars to a value in dong
  function dollarToDong(valueInDollars) {
    let dong = valueInDollars * DOLLAR_TO_DONG_RATIO;
    return dong;
  }

  return (
    <main>
      <h1>Device conversions</h1>

      <p>
        <label>Current value in dollars</label>
        {/* <input className="dollar" type="number" min='0'  value={valueDollars}  onChange={handleInputChange} /> */}
        <input disabled value={valueDollars} />

        {/* TODO This input need to display the value in dongs */}
        <label>Value in Dong</label>
        <input disabled value={dollarToDong(valueDollars)}/>

        {/* TODO This input need to display the value in euros */}
        <label>Value in Euro</label>
        <input disabled value={dollarToEuro(valueDollars)} />
      </p>
    </main>
  );
}

export default App;
