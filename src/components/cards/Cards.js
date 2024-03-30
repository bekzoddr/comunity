import React from "react";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { Cardss } from "../../static";
function Cards() {
  const card = Cardss?.map((el) => (
    <div key={el.id} className="card">
      <img src={el.img} alt="" />
      <div className="card-body">
        <h3 className="card-title">{el.title}</h3>
        <p className="card-text">{el.description}</p>
        <br />
        <a href="#">
          Learn more <HiMiniArrowLongRight />
        </a>
      </div>
    </div>
  ));
  return (
    <div className="home__cards">
      <h1>Latest Blog & News</h1>
      <div className="cards">{card}</div>
    </div>
  );
}

export default Cards;
