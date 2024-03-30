import { React, memo } from "react";
import heroImage from "../../assets/images/hero_img2.png";
import avatar from "../../assets/images/avatar.svg";
import { HiMiniArrowLongRight } from "react-icons/hi2";
function About__hero() {
  return (
    <div className="heroHome aboutHome">
      <div className="heroTitle second">
        <div className="ava">
          <img className="avatar" src={avatar} alt="" />
          <h4>Andrew Jonson</h4>
          <h4>Posted on 27th January 2021</h4>
        </div>
        <br />
        <br />
        <h1>Our internal process and longerm vision</h1>
        <br />
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The Maker is a
          decentralized. We aim to attain the
        </p>
        <br />
        <a href="#">
          Read more <HiMiniArrowLongRight />{" "}
        </a>
      </div>
      <img className="heroImage" src={heroImage} alt="Your Image" />
    </div>
  );
}

export default memo(About__hero);
