import React from "react";
import { NavInputField, SearchSVG, MyContentSVG } from "../components";

const MyContent = () => {
  return (
    <>
      <div class="p-4 sm:ml-64 h-screen bg-transparent">
        <nav class="bg-white mt-12 border-gray-200  sm:px-4 py-4 rounded ">
          <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="/" class="flex items-center">
              <MyContentSVG width={`26`} height={`26`} className={`text-gray-900`} />
              <span class="self-center text-xl sm:text-4xl ml-2 font-bold whitespace-nowrap ">
                My Content
              </span>
            </a>
            <div class="flex md:order-2">
              <div class="relative  md:block">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <SearchSVG />
                  <span class="sr-only">Search icon</span>
                </div>
                <NavInputField />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MyContent;
