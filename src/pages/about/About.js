import { React, memo } from "react";
import About__hero from "../../components/about hero/About__hero";
import Cards from "../../components/cards/Cards";
function About() {
  return (
    <div className="about">
      <About__hero />
      <br />
      <br />
      <br />
      <br />
      <Cards />
      <Cards />
    </div>
  );
}

export default memo(About);
