//! project is about organising and planning elements into folders and components

import { useEffect, useState } from "react";
import DataDisplay from "./Componenets/DataDisplay";
import "./App.css";
import ShopButton from "./Componenets/ShopButton";
import Storedisplay from "./Componenets/StoreDisplay";
// import {
//   resourceCount,
//   resourcePerSecond,
// } from "./Componenets/ResourceTracker";
// import resourceTracker from "./Componenets/ResourceTracker";

function App() {
  // const [count, setCount] = useState(0);

  // need 2 global variables: one to store  counts an one to store  per second

  const [cookies, setCookies] = useState(10000); //!Change this before final submit
  function cookieSetter(data) {
    setCookies(data);
  }
  const [cookiesPerSecond, setCookiesPerSecond] = useState(0);
  function cpsSetter(data) {
    setCookiesPerSecond(data);
  }
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

  // function attemptPurchase(cost, increase) {
  //increase value of perSecond
  // decrease count

  return (
    <>
      <div className="topest-div">
        {/* need to display :Value of count-value of perSecond-element that user can click to increase count-list of (mapped) shop items the user can buy [//!stretch add visual feedback to show if user can buy it (conditional rendering)//].*/}
        <section className="top-container">
          <section className="data-display-screen">
            <DataDisplay count={cookies} perSecond={cookiesPerSecond} />
          </section>
          <button
            className="cookie-button"
            // cookieUpdateFunction={cookieSetter} //
            onClick={() => setCookies((count) => count + 1)}
          >
            <img
              src="../assets/images/cookie_bite.png"
              className="cookie-img"
            ></img>
          </button>
        </section>
        <div className="side-cookie">
          <Storedisplay
            className="store"
            cpsFunction={cpsSetter}
            countFunction={cookieSetter}
            cookieAmount={cookies}
            curentCPS={cookiesPerSecond}
          />
        </div>
      </div>
    </>
  );
}
export default App;
