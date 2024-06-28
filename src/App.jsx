//! project is about organising and planning elements into folders and components

import { useEffect, useState } from "react";

import "./App.css";
import ShopButton from "./Componenets/ShopButton";
import Storedisplay from "./Componenets/StoreDisplay";

function App() {
  // const [count, setCount] = useState(0);

  // need 2 global variables: one to store  counts an one to store  per second

  const [cookies, setCookies] = useState(0);
  const [cookiesPerSecond, setCookiesPerSecond] = useState(0);
  const [secretTimer, setSecretTimer] = useState(0);
  // upgardes should increase perSecond and decrease count

  //!Stretch: fetch API

  const upgrades = [{}, {}];
  // need timer to track count value, monitoring per second
  // count goes up by perSecond value
  useEffect(() => {
    const theBiscuitIntervalTimer = setInterval(() =>
      //need to tell interval what action to perform every second
      {
        setCookies((currentCookies) => currentCookies + cookiesPerSecond);
        setSecretTimer((currentTime) => currentTime + 1);
      }, 1000);

    return () => {
      clearInterval(theBiscuitIntervalTimer);
    };
  }, [cookiesPerSecond]); // add persecond in the dpeendency array so when its value changes the useEffect triggers again

  // need a function so user can buy items from shop

  function attemptPurchase(cost, increase) {
    //increase value of perSecond
    // decrease count
  }

  return (
    <>
      {/* need to display :
  Value of count
  value of perSecond
  element that user can click to increase count
  list of (mapped) shop items the user can buy [//!stretch add visual feedback to show if user can buy it (conditional rendering)//
  ].

  */}

      <Storedisplay />
    </>
  );
}

export default App;
