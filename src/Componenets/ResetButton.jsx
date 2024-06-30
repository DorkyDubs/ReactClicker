import "./ResetButton.css";
export default function ResetButton({ cpsReset, countReset }) {
  let noOfResets = 0;

  function handleReset() {
    noOfResets = noOfResets + 1; // thanks to structue of app.js this component is reset every second, so noOfReset is reset
    console.log(noOfResets); //! It is a bug that could cause problems in other instances, but here it is used as a debugging/cheat feature after quick clicking
    if (noOfResets >= 4) {
      cpsReset(0);
      countReset(9999990099999);
    } else {
      cpsReset(0);
      countReset(0);
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
