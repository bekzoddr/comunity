import { React, memo } from "react";
import Home_hero from "../../components/home hero/Home_hero";
import Boxes from "../../components/boxes/Boxes";
import Cards from "../../components/cards/Cards";
function Home() {
  return (
    <div className="home">
      <Home_hero />
      <Boxes />
      <Cards />
    </div>
  );
}

export default memo(Home);
