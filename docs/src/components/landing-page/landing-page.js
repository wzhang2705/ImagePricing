import './landing-page.css';
import Rocket from "../../rocket-1.svg";

const LandingPage = () => {

  return (
    <div className = "landing">
        <div className="block">
          <img src={Rocket} alt="Rocket Image" />
        </div>
        <div className="block">
          <h1>Welcome!</h1>
          <p>Let us take you on an amazing adventure.
            Throughout this interactive game, we’ll be analyzing current perceptions 
            of art and the value that people assign to different art styles</p>
          <div>
            <p className="italicize">
              Let's begin!
            </p>
          </div>
        </div>
    </div>
  );
}

export default LandingPage;