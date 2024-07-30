import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/RazorLogo.png";
import { FiHome } from "react-icons/fi";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaStamp } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaScroll } from "react-icons/fa6";
import { TbReportAnalytics } from "react-icons/tb";

function NavBar() {
  const pages = [
    {
      id: 1,
      name: "Home",
      icon: <FiHome size="17" />,
      href: "/",
    },
    {
      id: 2,
      name: "Payouts",
      icon: <MdOutlineArrowOutward size="17" />,
      href: "/production",
    },
    {
      id: 3,
      name: "Account Statement",
      icon: <FaFileAlt size="17" />,
      href: "/production",
    },
    {
      id: 4,
      name: "Contacts",
      icon: <MdPerson size="17" />,
      href: "/production",
    },
  ];

  const navigations = [
    {
      id: 1,
      name: "Loans",
      icon: <FaIndianRupeeSign size="15" />,
      new: (
        <div className="p-[1px] h-5 rounded-lg text-[10px] text-white bg-green-500">
          New
        </div>
      ),
      action: "",
    },
    {
      id: 2,
      name: "Vendor Payments",
      icon: <FaFileInvoiceDollar size="15" />,
      new: (
        <div className="p-[1px] h-5 rounded-lg text-[10px] text-white bg-green-500">
          New
        </div>
      ),
      action: "",
    },
    {
      id: 3,
      name: "Tax Payments",
      icon: <FaStamp size="15" />,
      action: "",
    },
    {
      id: 4,
      name: "Payout Links",
      icon: <FaLocationArrow size="15" />,
      action: "",
    },
    {
      id: 5,
      name: "Payroll",
      icon: <FaScroll size="15" />,
      action: "",
    },
    {
      id: 6,
      name: "Reports",
      icon: <TbReportAnalytics size="15" />,
      action: "",
    },
  ];
  return (
    <div className="fixed left-0 h-screen w-[15%] bg-[#1a212b] flex-col">
      <img src={logo} className="w-full"></img>
      <div className="flex flex-col pl-2 text-gray-400 text-sm font-medium">
        {pages.map((page) => (
          <Link key={page.id} to={page.href} className="p-2 flex">
            {page.icon} &nbsp;&nbsp;
            {page.name}
          </Link>
        ))}
      </div>
      <div className="w-full bg-slate-600 h-[1px] my-8"></div>
      <div className="flex flex-col pl-2 text-gray-400 text-sm font-medium">
        {navigations.map((nav) => (
          <div key={nav.id} className="cursor-pointer p-2 flex items-center">
            {nav.icon}&nbsp;&nbsp;{nav.name}&nbsp;&nbsp;
            {nav.new}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
