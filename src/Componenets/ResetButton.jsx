import "./ResetButton.css";
export default function ResetButton({
  cpsReset,
  countReset,
  setTimer,
  setTimeTo,
}) {
  let noOfResets = 0;

  function handleReset() {
    noOfResets = noOfResets + 1; // thanks to structue of app.js this component is reset every second, so noOfReset is reset
    console.log(setTimeTo);
    if (noOfResets >= 4) {
      //! There is a bug that could cause problems in other instances, but here it is used as a debugging feature
      cpsReset(0);
      countReset(99999999999999);
      setTimer(setTimeTo);
      localStorage.setItem("cookies", 999999999);
      localStorage.setItem("cookiesPerSecond", 0);
      localStorage.setItem("timer", { setTimeTo }); // use prop so only resets time once winstate hit, otheriwse keeps
    } else {
      cpsReset(0);
      countReset(0);
      setTimer(setTimeTo);
      localStorage.setItem("cookies", 0); // local storage uses strings as keys
      localStorage.setItem("cookiesPerSecond", 0);
      localStorage.setItem("timer", { setTimeTo });
    }
  }

  return (
    <>
      <button className="reset-button" onClick={() => handleReset()}>
        Reset
      </button>
    </>
  );
}
