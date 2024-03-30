import { React, memo } from "react";
import { Box } from "../../static";
function Boxes() {
  const box = Box?.map((el) => (
    <div key={el.id} className="box">
      <h3>{el.title}</h3>
      <h4>{el.description}</h4>
      <br />
      <p>Apply Now</p>
    </div>
  ));
  return (
    <div className="boxes">
      <h1>See our open positions </h1>
      <div className="boxs">{box}</div>
    </div>
  );
}

export default memo(Boxes);
