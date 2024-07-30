import React, { useState } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { LiaSatelliteDishSolid } from "react-icons/lia";
import { BsPersonLinesFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { FaIndianRupeeSign } from "react-icons/fa6";
import Chart from "./Chart";
import OnboardingUpdate from "./OnboardingUpdate";
import ActivityFeed from "./ActivityFeed";

function MainWindow() {
  const [addClose, setAddClose] = useState(false);

  return (
    <div
      className="absolute right-0 w-[85%] "
      style={{ scrollbarWidth: "0px" }}
    >
      <div className="w-full h-full  bg-[#0d1219]">
        <div className="buttons absolute right-5 flex m-2">
          <button className="items-center bg-[#4474ff] text-slate-300 flex font-medium rounded-sm px-2">
            + PAYOUT <IoIosArrowDown />
          </button>
          <HiMiniMagnifyingGlass
            size="20"
            className="m-2 text-[#4474ff] cursor-pointer"
          />
          <LiaSatelliteDishSolid
            size="20"
            className="m-2 text-yellow-700 cursor-pointer"
          />
          <BsPersonLinesFill
            size="20"
            className="m-2 text-[#4474ff] cursor-pointer"
          />
        </div>
        <div className="content flex-col justify-center px-[20%] pt-20">
          <div className="balance_details flex-col justify-between items-center w-[50%]">
            <div className="flex text-slate-400">
              <div className="font-semibold text-sm">RazorPayX Lite &nbsp;</div>

              <div className="flex items-center text-[10px]">
                as of a few seconds ago Refresh
              </div>
            </div>
            <div className="flex justify-between">
              <div className="text-white text-3xl flex items-center pr-[50%]">
                <FaIndianRupeeSign size={20} />
                100
              </div>

              <div className="w-[1px] bg-slate-600 h-8 "></div>
              <div className="text-sky-600 text-sm flex font-semibold items-center cursor-pointer">
                + Add Balance
              </div>
            </div>
          </div>
          <div className="my-10 border-[1px] border-dashed flex px-6 py-3 border-slate-500 text-slate-500 items-center">
            🎉You are all caught up. There are no more items pending on you.
          </div>

          <OnboardingUpdate />
          {!addClose && (
            <div className="flex justify-between border-2 items-center border-indigo-600 h-24 overflow-hidden bg-[#171d26] transition-all duration-1000">
              <div className="relative -left-10 bg-violet-800 rotate-45 h-80 w-[20%] contain"></div>
              <div className="flex-col ml-6">
                <div className="text-md text-white">
                  📗Automate bookkeeping For Payouts
                </div>
                <div className="text-xs text-gray-500">
                  Close your books 60% faster and with better accuracy by
                  automating bookeeping for your Payouts.
                </div>
              </div>
              <div className="mr-10 ml-6 w-[24%] p-2 border-[2px] border-indigo-500 text-xs text-indigo-500 cursor-pointer">
                Connect Zoho Books -
              </div>
              <div
                className="close relative text-lg right-4 -top-8 text-gray-300 cursor-pointer"
                onClick={() => setAddClose(true)}
              >
                x
              </div>
            </div>
          )}
          <Chart className="w-full my-4" />
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
}

export default MainWindow;
