// import {cookieCount, cookiesPerSecond} from Resou
import "./DataDisplay.css";
export default function DataDisplay(prop) {
  return (
    <>
      <h1>Current cookies {prop.count}</h1>
      <h1>Cookies per Second {prop.perSecond}</h1>
    </>
  );
}
