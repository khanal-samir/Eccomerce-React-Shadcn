import { GithubIcon, InstagramIcon, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-950 text-gray-400 p-6">
      <div className="flex flex-col md:flex-row justify-around items-center font-semibold mb-4">
        <h2>Product Links</h2>
        <h2>Get in Touch</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="flex flex-col items-center gap-2 font-medium mb-4 md:mb-0">
          <h2>Categories</h2>
          <h2>New Arrival</h2>
          <h2>Collections</h2>
        </div>
        <div className="flex justify-center gap-4">
          <InstagramIcon />
          <Linkedin />
          <GithubIcon />
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-4">
        &copy; 2024 Samir Khanal. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
