import React from "react";

function ActivityFeed() {
  return (
    <div className="w-full flex-col bg-[#1a212b] ">
      <div className="flex p-4 justify-between">
        <div className="flex">
          <div className="text-white text-sm font-semibold">Activity Feed</div>
          <div className="text-gray-400 text-xs">
            &nbsp; updated a few seconds ago
          </div>
        </div>
        <div className="text-blue-800 cursor-pointer">Show Filters</div>
      </div>
      <div className="flex justify-center items-center h-20 text-gray-400 font-bold">
        There is no Activity
      </div>
    </div>
  );
}

export default ActivityFeed;
