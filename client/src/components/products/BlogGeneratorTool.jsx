import React from "react";

import { SpeedDail } from "../";

const BlogGeneratorTool = () => {
  return (
    <>
      <div class="p-4 sm:ml-64  bg-transparent">
        <nav class="bg-white mt-12 border-gray-200  sm:px-4 py-4 rounded ">
          <div class="container flex flex-wrap justify-center mx-auto text-center">
            <h1 class=" mb-4 text-3xl font-extrabold font-poppins tracking-tight leading-none text-gray-900 md:text-4xl lg:text-6xl ">
              Write quality blog posts with AI
            </h1>
            <p class="mb-8 text-sm font-normal font-poppins text-gray-500 lg:text-l sm:px-16 xl:px-48 ">
              Go from a blog idea to an engaging blog post in minutes by
              following the steps below.
            </p>
          </div>
        </nav>

        <div class=" mx-auto max-w-2xl   bg-white border border-gray-200 rounded shadow ">
          <ol class=" grid grid-cols-3 flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200  shadow-sm sm:text-base sm:p-4 sm:space-x-4">
            <li class="flex items-center text-blue-600 justify-center">
              <span class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-blue-600 rounded-full shrink-0 ">
                1
              </span>
              Personal <span class="hidden sm:inline-flex sm:ml-2">Info</span>
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 sm:ml-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                ></path>
              </svg>
            </li>
            <li class="flex items-center justify-center">
              <span class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                2
              </span>
              Account <span class="hidden sm:inline-flex sm:ml-2">Info</span>
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 sm:ml-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                ></path>
              </svg>
            </li>
            <li class="flex items-center justify-center">
              <span class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                3
              </span>
              Review
            </li>
          </ol>

          <form class="space-y-4 px-6 py-4 sm:p-6 md:p-8" action="#">
            <h5 class="text-l font-bold font-poppins text-gray-900">
              Describe the blog post that you want to create
            </h5>
            <div>
              <label
                for="message"
                class="block mb-2 text-sm font-medium font-poppins text-gray-600 "
              >
                About the Blog
              </label>
              <textarea
                id="message"
                rows="3"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded font-poppins "
                placeholder="Explain what your blog post is about (min. 40 characters).e.g A blog article explaining how SEO can be used to drive more traffic"
              ></textarea>
              <p
                id="helper-text-explanation"
                class="mt-2 text-xs text-gray-400 font-poppins "
              >
                ⚠️ 40 or more characters needed in your descripiton
              </p>
            </div>

            <div>
              <label
                for="countries"
                class="block mb-2 text-sm font-medium font-poppins text-gray-600"
              >
                Tone
              </label>
              <select
                id="Tones"
                class="bg-gray-200 text-gray-500 font-poppins text-sm rounded w-full p-2.5 "
              >
                <option selected>Choose a Tone</option>
                <option value="">Professional</option>
                <option value="">Friendly</option>
                <option value="">Bold</option>
                <option value="">Persuasive</option>
                <option value="">Empathetic</option>
                <option value="">Adventurous</option>
              </select>
            </div>

            <label
              for="helper-text"
              class="block mb-2 text-sm font-medium font-poppins text-gray-600 "
            >
              Targeted Keyword (optional)
            </label>
            <input
              type="email"
              id="helper-text"
              aria-describedby="helper-text-explanation"
              class="bg-gray-200  text-gray-900 text-sm rounded block w-full p-2.5 "
            />
            <select
              name="language"
              id="language"
              data-select2-id="select2-data-language"
              tabindex="-1"
              class="select2-hidden-accessible"
              aria-hidden="true"
            >
              <option
                data-code="us"
                value="English (US)"
                data-select2-id="select2-data-2-vk62"
              >
                English (US)
              </option>
              <option
                data-code="gb"
                value="English (UK)"
                data-select2-id="select2-data-14-u4ay"
              >
                English (UK)
              </option>
              <option
                data-code="fr"
                value="French"
                data-select2-id="select2-data-15-kjvi"
              >
                French
              </option>
              <option
                data-code="es"
                value="Spanish"
                data-select2-id="select2-data-16-5a8q"
              >
                Spanish
              </option>
             
            </select>

            <button
              type="submit"
              class="w-full font-poppins text-white bg-gray-200 hover:bg-[#660080] focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded text-base px-5 py-3 text-center"
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BlogGeneratorTool;
