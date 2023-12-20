import logo2 from "../../assets/images/logo2.png";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-blue-600 text-white">
        <aside>
          <div>
            <img src={logo2} alt="" className="w-40" />
          </div>
          <p>
            Task Management System
            <br />
            All the Rights are reserved.
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title"> Social</header>
          <a
            href="https://www.facebook.com/"
            className="link link-hover flex items-center gap-2"
          >
            <FaFacebook className="text-xl" />
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/"
            className="link link-hover flex items-center gap-2"
          >
            <FaLinkedin className="text-xl" />
            LinkedIn
          </a>
          <a
            href="https://www.github.com/"
            className="link link-hover flex items-center gap-2"
          >
            <FaGithub className="text-xl" />
            GitHub
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
