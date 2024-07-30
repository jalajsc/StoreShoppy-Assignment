import React from "react";
import { Link } from "react-router-dom";
import Production from "../pages/Production";

function OnboardingUpdate() {
  return (
    <div className="w-full">
      <div className="felx-col">
        <div className="text-white">Onboarding updates</div>
        <div className="card bg-[#1a212b] my-2 h-40 rounded-md flex">
          <div className="bg-blue-900 h-full w-20 rounded-l-md"></div>
          <div className="ml-4 flex-col py-4">
            <div className="text-2xl text-white">
              Open Your RazorPayX account.
            </div>
            <div className="text-gray-500 text-xs font-medium">
              Don't let bankache come in the way of your growth. Apply for your
              RazorPayX account with a few basic details
            </div>
            <div className="bg-[#4474ff] text-white w-44 py-2 px-4 mt-4 cursor-pointer rounded-[4px]">
              <Link to="/production">Start application -</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-green-700 bg-[#1a212b] mt-4">
        <div className="flex  text-white">
          <div className="px-4 mt-4 text-2xl  text-white w-[40%]">
            Amazon Instant Settlements
          </div>
          <div className="flex-col pb-6 mt-4">
            <div className="flex">
              <div className="flex items-center justify-center">
                <div className="animate-ping  flex justify-center items-center bg-blue-800 rounded-full w-4 h-4"></div>
                <div className="absolute bg-blue-400 rounded-full  justify-center w-[13px] h-[13px]"></div>
              </div>
              <div className="text-md px-2">Let's get you started</div>
            </div>
            <div className="text-sm ">
              Complete your application and get instant access to your Amazon
              payouts
            </div>
            <div className="bg-[#4474ff] w-28 my-1 p-2 rounded-sm cursor-pointer">
              <Link to="/production">APPLY NOW</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-green-700 bg-[#1a212b] mb-4">
        <div className="flex  text-white">
          <div className="px-4 mt-4 text-2xl  text-white w-[40%]">
            Creating Payouts in Live mode
          </div>
          <div className="flex-col pb-6 mt-4">
            <div className="flex">
              <div className="flex items-center justify-center">
                <div className="animate-ping  flex justify-center items-center bg-blue-800 rounded-full w-4 h-4"></div>
                <div className="absolute bg-blue-400 rounded-full  justify-center w-[13px] h-[13px]"></div>
              </div>
              <div className="text-md px-2">Let's get you started</div>
            </div>
            <div className="text-sm ">
              Complete your application and get instant access to your Amazon
              payouts
            </div>
            <div className="bg-[#4474ff] w-28 my-1 p-2 rounded-sm cursor-pointer">
              <Link to="/production">APPLY NOW</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnboardingUpdate;
