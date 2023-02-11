import React from "react";
import {
  NavInputField,
  AllToolsSVG,
  SearchSVG,
  ArticleSVG,
  ProductDescSVG,
  NotesSVG,
  FacebookSVG,
  SmcSVG,
  TwitterSVG,
  Footer,
} from "../components";
import { Link } from "react-router-dom";

const Tools = () => {
  return (
    <>
      <div className="p-4 sm:ml-64  bg-[#EEEDFA]">
        <nav class=" mt-12 border-gray-200  sm:px-4 py-4 rounded bg-transparent ">
          <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="/" class="flex items-center">
              <AllToolsSVG />
              <span class="self-center text-xl sm:text-4xl ml-2 font-bold whitespace-nowrap ">
                All Tools
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

        <div class=" rounded-lg mt-14 ">
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4 ">
            <div class="max-w-sm  p-3 justify-center bg-white rounded-lg shadow">
              <NotesSVG />

              <p class="mb-2 text-l md:xl font-poppins font-semibold tracking-tight text-gray-900 ">
                Notes +
              </p>
              <p class="mb-3 text-sm md:l text-gray-500 font-poppins">
                Go to this step by step guideline process on how to certify for
                your weekly benefits:
              </p>
            </div>
            <Link to={`bloggen`}>
              <div class="max-w-sm  p-3 justify-center bg-white rounded-lg shadow">
                <ArticleSVG />
                <p class="mb-2 text-l md:xl font-poppins font-semibold tracking-tight text-gray-900 ">
                  Blog Post Annilator
                </p>
                <p class="mb-3 text-sm md:l text-gray-500 font-poppins ">
                  Go to this step by step guideline process on how to certify
                  for your weekly benefits:
                </p>
              </div>
            </Link>
            <div class="max-w-sm  p-3 justify-center bg-white rounded-lg shadow">
              <SmcSVG />

              <p class="mb-2 text-l md:xl font-poppins font-semibold tracking-tight text-gray-900 ">
                Social Media Captions
              </p>
              <p class="mb-3 text-sm md:l text-gray-500 font-poppins">
                Go to this step by step guideline process on how to certify for
                your weekly benefits:
              </p>
            </div>
            <div class="max-w-sm  p-3 justify-center bg-white rounded-lg shadow">
              <ProductDescSVG fill="#660080" />

              <p class="mb-2 text-l md:xl font-poppins font-semibold tracking-tight text-gray-900 ">
                Product Description
              </p>
              <p class="mb-3 text-sm md:l text-gray-500 font-poppins ">
                Go to this step by step guideline process on how to certify for
                your weekly benefits:
              </p>
            </div>
            <div class="max-w-sm  p-3 justify-center bg-white rounded-lg shadow">
              <TwitterSVG fill={`#660080`} />

              <p class="mb-2 text-l md:xl font-poppins font-semibold tracking-tight text-gray-900 ">
                Twitter Threads
              </p>
              <p class="mb-3 text-sm md:l text-gray-500 font-poppins ">
                Go to this step by step guideline process on how to certify for
                your weekly benefits:
              </p>
            </div>
            <div class="max-w-sm  p-3 justify-center bg-white rounded-lg shadow">
              <FacebookSVG />

              <p class="mb-2 text-l md:xl font-poppins font-semibold tracking-tight text-gray-900 ">
                Facebook Headlines
              </p>
              <p class="mb-3 text-sm md:l text-gray-500 font-poppins ">
                Go to this step by step guideline process on how to certify for
                your weekly benefits:
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;
