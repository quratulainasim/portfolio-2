import React from "react";
import "../../styles/footer.css";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">
  <div className="container">
  <ul className="links">
  <li>
    <Link className="icon" href="https://www.facebook.com/">
      <FaFacebookF />
    </Link>
  </li>
  <li>
    <Link className="icon" href="https://www.x.com/">
      <FaTwitter />
    </Link>
  </li>
  <li>
    <Link className="icon" href="https://www.linkedin.com/">
      <FaLinkedinIn />
    </Link>
  </li>
  <li>
    <Link className="icon" href="https://www.instagram.com/">
      <FaInstagram />
    </Link>
  </li>
</ul>








    
    </div>
    </footer>
  );
}

export default Footer;