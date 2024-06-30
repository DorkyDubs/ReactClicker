import { cookieUpgrades } from "../libs/UpgradeStore";
import ShopButton from "./ShopButton";
import "./StoreDisplay.css";
export default function Storedisplay(
  prop
  //     {
  // //   cpsFunction,
  // //   countFunction,
  // //   cookieAmount,
  // //   curentCPS,
  // }
) {
  return (
    <>
      {cookieUpgrades.map((upgrade, index) => (
        //! think it's possible to conditional render each shop div here rather than in button component. would require some rearrranging but might get back to it
        <div key={upgrade.id} className="store-div">
          <h3>{upgrade.name}</h3>
          <p className="cost-display">Cost:{upgrade.cost}</p>{" "}
          <ShopButton
            //! this can probably look better at the bottom of this div
            text={upgrade.toIncrease} //could remove and not pass redundant data
            cpsUpdate={prop.cpsFunction} // updates cps
            CPS={prop.curentCPS} // shows current cps
            countUpdate={prop.countFunction} //updates how many cookies you have
            currentCookie={prop.cookieAmount} // shows how many cokkies you have
            cookieCost={upgrade.cost}
            cookieIncrease={upgrade.toIncrease}
          />
        </div>
      ))}
      {/*close function, close map method, close js section*/}
    </> //end of div containe
  ); //end of return
} //end of component function
