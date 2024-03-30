import { React, memo } from "react";

function ServiseHero() {
  return (
    <div className="servise__hero">
      <div className="hero__title">
        <h1>Testing Engineer</h1>
        <div className="info">
          <div className="job">
            <h2>Job Discription</h2>
            <p>
              Remote, India , 4 to 5 Years Of Experience Department: Website
              <br /> Design 5 Positions Available.
            </p>
          </div>
          <div className="describtion">
            <h2>Salary</h2>
            <p>$30000 Per Anum </p>
          </div>
        </div>
      </div>
      <div className="box__text">
        <div className="right__side">
          <h2 className="extra">Details</h2>
          <h2>Requirements</h2>
          <h2>Responsibilities</h2>
        </div>
        <div className="left__side">
          <p>
            Design & Create highly engaging industry-related content in both
            photo, gif & video format Publish Posts on various social media
            channels <br /> Promote content on social networks and monitor
            engagement (e.g. comments and shares) <br /> Research
            industry-related topics <br /> Editing audio and sound design on
            projects <br />
            Engage in opportunities to develop original content and concepts for
            web and mobile <br /> Create motion graphics and animations using 2D
            and 3D applications for marketing and promotional <br /> usage.{" "}
            <br /> <br />
            Manage the day-to-day handling of all social media channels such as
            LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and
            YouTube, adapting content to suit different channels
          </p>
        </div>
      </div>
    </div>
  );
}

export default memo(ServiseHero);
