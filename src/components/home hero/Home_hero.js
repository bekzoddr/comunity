import { React, memo } from "react";
import heroImage from "../../assets/images/hero_img.png";
function Home_hero() {
  return (
    <div className="heroHome">
      <div className="heroTitle">
        <h1>We hired people who are very passionate about what they do</h1>
        <br />
        <p>
          Through True Rich Attended does no end it his mother since real had
          half every him case in packages enquire we up ecstatic unsatiable saw.
        </p>
        <br />
        <button>View Positions</button>
      </div>
      <div className="img-container">
        <img src={heroImage} alt="Your Image" />
      </div>
    </div>
  );
}

export default memo(Home_hero);
