import React, { memo } from "react";

function ServiseRegister() {
  return (
    <div className="registerBox">
      <h1>Apply Now</h1>
      <br />
      <form action="">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Email Id" />
        <input type="text" placeholder="Mobile No" />
      </form>
      <textarea placeholder="Why do you thing you are good fit for Ether?"></textarea>
      <button>Submit </button>
    </div>
  );
}

export default memo(ServiseRegister);
