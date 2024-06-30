import { cookieUpgrades } from "../libs/UpgradeStore";
import ShopButton from "./ShopButton";
import "./StoreDisplay.css";

export default function Storedisplay({
  cpsFunction,
  countFunction,
  cookieAmount,
  curentCPS,
}) {
  return (
    <>
      {cookieUpgrades.map((upgrade, index) =>
        //! think it's possible to conditional render each shop div here rather than in button component. would require some rearrranging but might get back to it

        (upgrade.cost * 10000) / cookieAmount > 1 &&
        cookieAmount >= upgrade.cost ? ( //this is to reredner the store in line with current cookie range
          <div key={upgrade.id} className="store-div">
            <h3>{upgrade.name}</h3>
            <p className="cost-display">Cost:{upgrade.cost}</p>
            <ShopButton
              //! this can probably look better at the bottom of this div
              text={upgrade.toIncrease} //could remove and not pass redundant data
              cpsUpdate={cpsFunction} // updates cps
              CPS={curentCPS} // shows current cps
              countUpdate={countFunction} //updates how many cookies you have
              currentCookie={cookieAmount} // shows how many cookies you have
              cookieCost={upgrade.cost}
              cookieIncrease={upgrade.toIncrease}
            />
          </div>
        ) : null
      )}

      {/*close function, close map method, close js section*/}
    </> //end of div containe
  ); //end of return
} //end of component function
