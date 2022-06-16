import React from "react";
import footerImg from "../../assets/images/footer.png";

const Footer = () => {
  const dynamicYear = new Date().getFullYear();
  return (
    <footer
      style={{ background: `url(${footerImg})`, backgroundSize: "cover" }}
      className="p-10"
    >
      <div>
        <div className="footer">
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
          <div>
            <span className="footer-title">Newsletter</span>
            <div className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full pr-16"
                />
                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='my-10 text-center'>
          <p>Copyright © {dynamicYear} - All right reserved by Limon Farazi (abidislamabir@gmail.com)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
