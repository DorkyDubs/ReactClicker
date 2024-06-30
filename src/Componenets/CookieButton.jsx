import "./CookieButton.css";

export default function CookieButton({ setCookies }) {
  return (
    <button
      className="cookie-button"
      // cookieUpdateFunction={cookieSetter} //
      onClick={() => setCookies((count) => count + 1)}
    >
      <img src="../assets/images/cookie_bite.png" className="cookie-img"></img>
    </button>
  );
}
