import "./ShopButton.css";
export default function ShopButton(prop) {
  function changeCount(funcHere) {
    //!dropped out middlefunction Joe suggested here as wasn't working
    funcHere((currentCount) => currentCount - prop.cookieCost);
  } //works here though so not sure why different. //!Think currentCount is a placeholder, directs to use inital value is useState as a basis

  const newCPS = (doUpdate) => {
    //this is a function in  a streamlined form

    doUpdate(prop.CPS + prop.cookieIncrease); //!CPS is passed down as prop, so not neccsary to use function to call back to inital useState value? more testing to confirm okay
  };

  function clickHandler() {
    newCPS(prop.cpsUpdate);
    changeCount(prop.countUpdate);
  }
  // conditional here to render button if enough cookies.

  return (
    <button
      className="shopbutton"
      onClick={
        () => clickHandler()
        // changeCount(prop.countUpdate)
      }
    >
      +{prop.cookieIncrease}+
    </button>
  );
}

/* // text={upgrade.toIncrease} //could remove and not pass redundant data
cpsUpdate={cpsSetter}
CPS = {curentCPS}
countUpdate={countFunction}
currentCookie={cookieAmount}
cookieCost={upgrade.cost}
cookieIncrease={upgrade.toIncrease}

const newCPS = ({ doUpdate }) => { */

{
  /* //   const sendCPS = () => { */
}
//     {
//       doUpdate(prop.cookieIncrease);
//     }
//   };
// };
// //!<button onClick={newCPS(prop.cpsUpdate)}></button>

//         const ChildComponent = ({ sendDataToParent }) => {
//             const sendData = () => {
//               sendDataToParent("Hello from Child");
//             }
