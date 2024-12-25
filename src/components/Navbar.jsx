import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import logo from "../../public/icon.png";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa6";
import { RiVideoAddLine } from "react-icons/ri";
import { LiaBell } from "react-icons/lia";
import profile from "../../public/profile.jpg"
import Avatar from "react-avatar";





const Navbar = () => {
  return (
    <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2 items-center">
      <div className=" space-x-4 flex items-center">
        <IoMenuSharp className="text-4xl cursor-pointer hover:bg-gray-200 duration-200 " />
        <img className="w-28 cursor-pointer  hover:bg-gray-200 duration-200 " src={logo} alt="logo" />
      </div>
      <div className=" flex w-[35%]">
        <div className="w-[100%] px-6 py-2 rounded-l-full border border-gray-500">
          <input type="text" placeholder="search" className="outline-none" />
        </div>
        <button className="px-4 py-2 bg-gray-100 rounded-r-full border  border-gray-500">
          <CiSearch size={"24px"} />
        </button>

        <FaMicrophone size={"42px"} className="ml-3 rounded-full border p-2 cursor-pointer hover:bg-gray-200 duration-200" />


      </div>
      <div className=" space-x-5 items-center  flex">
        <RiVideoAddLine className="text-3xl cursor-pointer" />
        <LiaBell className="text-3xl cursor-pointer" />
        <Avatar size={"40"} round={true} src={profile} className="cursor-pointer" alt="profile" />

      </div>
    </div>
  );
};

export default Navbar;
