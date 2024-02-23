import logo from "@/public/images/logo_paintters-pm62id7wvwj8wgwfwlpq1is0m2uuzuqbdznwvf6yo0.png";
import moment from "moment";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const years = moment().format("YYYY");

  return (
    <footer className="h-full pt-14 pl-2 xl:mx-20 ">
      <div className="grid pb-10 grid-cols-5">
        <div className="col-span-2">
          <Image src={logo} alt="painter" />
          <p className="text-[#6b7280] mt-5 w-96">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            dignissim nunc, id maximus ex. Etiam nec dignissim elit, at
            dignissim enim.
          </p>
        </div>
        <div className="">
          <h2 className="text-2xl text-[#1f2937] font-semibold">Services</h2>
          <div className="text-[#6b7280] text-sm space-y-3 mt-5">
            <p className="hover_effect">Exterior Painting</p>
            <p className="hover_effect">Interior Painting</p>
            <p className="hover_effect">Object Painting</p>
            <p className="hover_effect">Residential Painting</p>
            <p className="hover_effect">Furniture Painting</p>
          </div>
        </div>
        <div className="">
          <h2 className="text-2xl  text-[#1f2937] font-semibold">Support</h2>
          <div className="text-[#6b7280] text-sm space-y-3 mt-5">
            <p className="hover_effect">Help Center</p>
            <p className="hover_effect">FAQ</p>
            <p className="hover_effect">Ticket Support</p>
            <p className="hover_effect">Contact Us</p>
          </div>
        </div>
        <div className="">
          <h2 className="text-2xl text-[#1f2937] font-semibold">Contact Us</h2>
          <div className="text-[#6b7280] text-sm space-y-3 mt-5 tracking-tight">
            <p>Jln Cempaka Wangi No 22, Jakarta - Indonesia</p>
            <p className="inline-flex group cursor-pointer">
              <FaEnvelope className="mr-2 mt-1 text-[#009b83] duration-300 group-hover:text-[#f02e84]" />
              <span>support@yourdomain.tld</span>
            </p>
            <p className=" inline-flex group cursor-pointer">
              <FaPhoneAlt className="mr-2 mt-1 text-[#009b83] duration-300 group-hover:text-[#f02e84]" />{" "}
              <span>+6221.2002.2012</span>
            </p>
          </div>
        </div>
      </div>
      <hr className=" border-gray-200 sm:mx-auto lg:mt-8" />

      {/* Copyright section */}

      <div className="flex justify-between items-center">
        <p className="block text-base text-[#7889a0] text-center  my-5">
          Copyright © {years} . All Rights Reserved.
        </p>
        <div className="inline-flex mt-5 space-x-3">
          <a
            href=""
            className="bg-[#6b7280] p-1 rounded-full hover:bg-[#009b83] duration-700"
          >
            <FaFacebookF className=" text-white " />
          </a>

          <a
            className="bg-[#6b7280] p-1 rounded-full hover:bg-[#009b83] duration-700"
            href=""
          >
            <FaTwitter className="socialIcon text-white" />
          </a>
          <a
            className="bg-[#6b7280] p-1 rounded-full hover:bg-[#009b83] duration-700"
            href=""
          >
            <FaInstagram className="socialIcon text-white" />
          </a>
          <a
            href=""
            className="bg-[#6b7280] p-1 rounded-full hover:bg-[#009b83] duration-700"
          >
            <FaLinkedinIn className="socialIcon text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
