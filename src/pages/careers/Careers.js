import { React, memo } from "react";
import CareersHero from "../../components/careers_hero/CareersHero";
import CareersText from "../../components/careers__text/Careers.text";
function Careers() {
  return (
    <div>
      <CareersHero />
      <CareersText />
    </div>
  );
}

export default memo(Careers);
