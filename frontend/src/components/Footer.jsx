import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { BiPhone, BiEnvelope } from "react-icons/bi";
import { BsGeoAltFill } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full h-[66.66vh] bg-[#222831] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-around">
          {/* Contact Us */}
          <div className="flex flex-col items-center gap-2 w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-3xl mb-4 dancing-script">Contact Us</h3>
            <div className="flex flex-col gap-2 text-base items-center justify-center">
              <a
                href="https://maps.app.goo.gl/HuvpMD97mR4oBGov7"
                target="_blank"
                className="hover:text-yellow-500 flex items-center gap-2"
              >
                <BsGeoAltFill /> <span>Location</span>
              </a>
              <a
                href="/"
                className="hover:text-yellow-500 flex items-center gap-2"
              >
                <BiPhone /> <span>Call +01 1234567890</span>
              </a>
              <a
                href="/"
                className="hover:text-yellow-500 flex items-center gap-2"
              >
                <BiEnvelope /> <span>demo@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Brand & Social */}
          <div className="flex flex-col items-center gap-4 text-center w-full md:w-1/3 mb-8 md:mb-0">
            <Link to="/">
              <h1 className="text-4xl dancing-script">Feane</h1>
            </Link>
            <p className="text-gray-300 text-base">
              Necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with
            </p>
            <div className="flex gap-2 mt-2">
              {[
                FaFacebookF,
                FaTwitter,
                FaLinkedinIn,
                FaInstagram,
                FaPinterest,
              ].map((Icon, idx) => (
                <div
                  key={idx}
                  className="bg-white w-[30px] h-[30px] rounded-full flex items-center justify-center text-[#222831] hover:text-yellow-500 transition-all"
                >
                  <a href="/">
                    <Icon />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col items-center w-full md:w-1/3">
            <h3 className="text-3xl mb-4 dancing-script">Opening Hours</h3>
            <p className="text-center text-gray-300 text-base flex flex-col">
              Everyday
              <br />
              <br />
              10.00 AM - 10.00 PM
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-center text-base text-white">
          <div className="flex flex-col gap-4">
            <span>
              &copy; <span>{currentYear}</span> All Rights Reserved By{" "}
              <a href="https://html.design/">Free Html Templates</a>
            </span>
            <span>
              &copy; Distributed By{" "}
              <a
                href="https://themewagon.com/"
                target="_blank"
                rel="noreferrer"
              >
                ThemeWagon
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
