import { React, memo } from "react";
import ServiseHero from "../../components/serviceHero/ServiseHero";
import ServiseRegister from "../../components/service_register/ServiseRegister";
function Service() {
  return (
    <div>
      <ServiseHero />
      <ServiseRegister />
    </div>
  );
}

export default memo(Service);
