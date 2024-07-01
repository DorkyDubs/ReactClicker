import "./WinState.css";
import ResetButton from "./ResetButton";
export default function WinState(prop) {
  function timeSpent(time) {
    //! learn to write in Ternary, it's useful.
    if (time >= 60) {
      // however writing long form here helps track the parts tday
      let minutes = Math.round(time / 60);
      if (minutes >= 60) {
        let hours = (minutes - (minutes % 60)) / 60;
        let minutes = Math.round(minutes % 60);
        return `${hours} hours and ${minutes} minutes in unwittingly summoning The Great Obi. Let's hope he doesn't mistake you for a snack`;
      } else {
        return `${minutes} minutes in Honor of Lord Obi. Valor Morgulis, so let's hope it was time well spent`;
      }
    } else {
      return `only ${time} seconds in the service of Obi. Smart move.`;
    }
  }

  const playTime = timeSpent(prop.time);
  return (
    <div className="win-box">
      <img
        src="../assets/images/Obi_win.jpg"
        alt="You win! Here's a picture of the bestest boy for the bestest cookie collector"
        className="win-pic"
      ></img>
      <h1 className="epilogue">{`You have gathered so many cookies it has caught the attention of the unstoppable Obiactus, who has come to feed themselves on your fortune.
      
      In total you have spent ${playTime}`}</h1>
      <ResetButton
        cpsReset={prop.cpsReset}
        countReset={prop.countReset}
        setTimer={prop.setTimer}
        setTimeTo={0}
      />
    </div>
  );
}
