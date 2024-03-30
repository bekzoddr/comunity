import { React, memo } from "react";
import ContactData from "../../components/contactData/ContactData";
function Contact() {
  return (
    <div>
      <ContactData />
    </div>
  );
}

export default memo(Contact);
