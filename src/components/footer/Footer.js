import React, { memo } from "react";
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import footerLogo from "../../assets/images/footer__logo.svg";

function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <img src={footerLogo} alt="" />
        <br />
        <br />
        <h1>
          Bespoke software <br /> solutions
        </h1>
        <br />
        <div className="icons">
          <FaFacebookF />
          <FaYoutube />
          <FaInstagram />
          <FaTwitter />
        </div>
        <br />
        <br />
        <br />
        <p>© All rights reserved – Finsweet</p>
      </div>
      <div className="footer_links">
        <h2>Company</h2>
        <li className="footer__items">About Us</li>
        <li className="footer__items">Careers</li>
        <li className="footer__items">Services</li>
        <li className="footer__items">Blog</li>
      </div>
      <div className="footer__address">
        <h2>Connect</h2>
        <li className="footer__items">hi@finsweet.com</li>
        <li className="footer__items">+(123) 456-7890</li>
      </div>
      <div className="login">
        <h2>Join Newsletter</h2> <br />
        <input type="text" placeholder="Type email here" />
        <br />
        <button>Subscribe</button>
        <a href="#">
          Privacy Policy <span>Terms & Conditions</span>
        </a>
      </div>
    </footer>
  );
}

export default memo(Footer);
