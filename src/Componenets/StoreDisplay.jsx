import { cookieUpgrades } from "../libs/UpgradeStore";
import ShopButton from "./ShopButton";

export default function Storedisplay() {
  return (
    <>
      {cookieUpgrades.map((upgrade, index) => (
        <div key={upgrade.key} className="store-div">
          <h3>{upgrade.name}</h3>
          <p>{upgrade.cost}</p>
          <ShopButton text={`+ {upgrade.toIncrease}} +`} />
        </div>
      ))}
    </>
  );
}
