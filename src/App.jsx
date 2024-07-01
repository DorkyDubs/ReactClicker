//! project is about organising and planning elements into folders and components

import { useEffect, useState } from "react";
import DataDisplay from "./Componenets/DataDisplay";
import "./App.css";

import Storedisplay from "./Componenets/StoreDisplay";
import ResetButton from "./Componenets/ResetButton";
import CookieButton from "./Componenets/CookieButton";
import WinState from "./Componenets/WinState";
// import {
//   resourceCount,
//   resourcePerSecond,
// } from "./Componenets/ResourceTracker";
// import resourceTracker from "./Componenets/ResourceTracker";
function App() {
  // const [count, setCount] = useState(0);

  // need 2 global variables: one to store  counts an one to store  per second

  const [cookies, setCookies] = useState(
    parseInt(localStorage.getItem("cookies")) || 0 //! set to 0 before release
  );
  function cookieSetter(data) {
    setCookies(data);
  }
  const [cookiesPerSecond, setCookiesPerSecond] = useState(
    parseInt(localStorage.getItem("cookiesPerSecond")) || 0
  );
  function cpsSetter(data) {
    setCookiesPerSecond(data);
  }
  const [secretTimer, setSecretTimer] = useState(
    parseInt(localStorage.getItem("timer")) || 0
  );

  useEffect(() => {
    localStorage.setItem("cookies", cookies.toString());
    localStorage.setItem("cookiesPerSecond", cookiesPerSecond.toString());
    localStorage.setItem("timer", secretTimer.toString());
  }, [cookies, cookiesPerSecond, secretTimer]);

  // upgardes should increase perSecond and decrease count

  //!Stretch: fetch API

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

  if (cookies >= 10 ** 15) {
    //! change before release 10**!5
    return (
      <>
        <WinState
          time={secretTimer}
          setTimer={setSecretTimer}
          cpsReset={cpsSetter}
          countReset={cookieSetter}
        />
      </>
    );
  } else {
    return (
      <>
        <div className="toppest-div">
          {/*//! for optimization*/}
          {/* need to display :Value of count-value of perSecond-element that user can click to increase count-list of (mapped) shop items the user can buy [//!stretch add visual feedback to show if user can buy it (conditional rendering)//].*/}
          <section className="top-container">
            <section className="data-display-screen">
              <DataDisplay count={cookies} perSecond={cookiesPerSecond} />
            </section>
            <ResetButton
              cpsReset={setCookiesPerSecond}
              countReset={setCookies}
              setTime={setSecretTimer}
              setTimeTo={secretTimer}
            />
            <CookieButton setCookies={setCookies} />
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
}
export default App;
