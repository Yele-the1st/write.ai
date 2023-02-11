import { useState } from "react";

import logo from "../../assets/logo.svg";
import { DashboardSVG, MenuSVG } from "../";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [asideIsShown, setAsideIsShown] = useState(true);
  // const [menuIsShown, setMenuIsShown] = useState(false);

  // const showMenuHandler = () => {
  //   setMenuIsShown(true)
  // }
  // const hideMenuHandler = () => {
  //   setMenuIsShown(false)
  // }

  const asideHandler = () => {
    setAsideIsShown(true);
    if (asideIsShown) {
      setAsideIsShown(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-[#EEEDFA] border-b border-gray-200 ">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                onClick={asideHandler}
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              >
                <span className="sr-only">Open sidebar</span>
                <MenuSVG />
              </button>
              <a href="/" className="flex ml-2 md:mr-24">
                <img src={logo} className="h-8 mr-3" alt="FlowBite Logo" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">
                  Write.ai
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow "
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      Neil Sims
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate "
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        role="menuitem"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  "
                        role="menuitem"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform pt-20 bg-[#EEEDFA] border-r border-gray-200 ${
          asideIsShown ? "-translate-x-full" : null
        } sm:translate-x-0`}
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-[#EEEDFA] ">
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="group flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100"
              >
                <DashboardSVG />
                <span className="ml-3 font-poppins font-medium text-gray-500 transition duration-75 group-hover:text-gray-900">
                  Dashboard
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="tools"
                className="group flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 "
              >
                <svg
                  className="flex-shrink-0 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 11L10.6422 15.8211C10.7734 15.8867 10.839 15.9195 10.9078 15.9324C10.9687 15.9438 11.0313 15.9438 11.0922 15.9324C11.161 15.9195 11.2266 15.8867 11.3578 15.8211L21 11M1 16L10.6422 20.8211C10.7734 20.8867 10.839 20.9195 10.9078 20.9324C10.9687 20.9438 11.0313 20.9438 11.0922 20.9324C11.161 20.9195 11.2266 20.8867 11.3578 20.8211L21 16M1 6L10.6422 1.17889C10.7734 1.1133 10.839 1.0805 10.9078 1.0676C10.9687 1.05616 11.0313 1.05616 11.0922 1.0676C11.161 1.0805 11.2266 1.1133 11.3578 1.17889L21 6L11.3578 10.8211C11.2266 10.8867 11.161 10.9195 11.0922 10.9324C11.0313 10.9438 10.9687 10.9438 10.9078 10.9324C10.839 10.9195 10.7734 10.8867 10.6422 10.8211L1 6Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap font-poppins font-medium text-gray-500 transition duration-75 group-hover:text-gray-900">
                  All Tools
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="content"
                className=" group flex items-center p-2 text-base font-normal text-gray-500  rounded-lg hover:bg-gray-100 "
              >
                <svg
                  className="flex-shrink-0  text-gray-500 transition duration-75 group-hover:text-gray-900 "
                  width="22"
                  height="22"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19,3H12.472a1.019,1.019,0,0,1-.447-.1L8.869,1.316A3.014,3.014,0,0,0,7.528,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V8A5.006,5.006,0,0,0,19,3ZM5,3H7.528a1.019,1.019,0,0,1,.447.1l3.156,1.579A3.014,3.014,0,0,0,12.472,5H19a3,3,0,0,1,2.779,1.882L2,6.994V6A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V8.994l20-.113V18A3,3,0,0,1,19,21Z"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap font-poppins font-medium text-gray-500 transition duration-75 group-hover:text-gray-900">
                  My Content
                </span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-gray-200 bg-secondary rounded-full transition duration-75 group-hover:text-white">
                  3
                </span>
              </Link>
            </li>
            <li className="pb-4">
              <a
                href="#"
                className="group flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 "
              >
                <svg
                  className="flex-shrink-0 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                  width="22"
                  height="22"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 424.2 424.2"
                  xml:space="preserve"
                >
                  <path d="M67.9 424.2c-18.2-.1-35.2-7.2-48-20C7.1 391.4 0 374.3 0 356.2V68.1c0-18.1 7.1-35.2 19.9-48C32.7 7.2 49.8.1 67.9 0h224.3c18.2 0 35.2 7.1 48 20 12.8 12.8 19.9 29.9 19.9 48.1v33.5c16.7 1 32.2 7.9 44.1 19.8 12.8 12.8 19.9 29.9 19.9 48v186.8c0 18.1-7.1 35.2-19.9 48-12.8 12.8-29.9 19.9-48 20H67.9zm.2-384.3c-7.5 0-14.6 2.9-19.9 8.2C42.9 53.4 40 60.5 40 68v288.1c0 7.5 2.9 14.6 8.2 19.9 5.3 5.3 12.4 8.2 19.9 8.2h288.1c7.5 0 14.6-2.9 19.9-8.2 5.3-5.3 8.2-12.4 8.2-19.9V169.4c0-7.5-2.9-14.5-8.2-19.8-4.4-4.4-9.9-7.1-15.9-7.9v199.6c-.7 6.7-4.8 12.6-10.9 15.6-2.8 1.4-5.9 2.1-9 2.1-3.5 0-7-.9-10.1-2.7-5.9-3.4-9.5-9.5-9.9-16.3V68.1c0-7.5-2.9-14.6-8.2-19.9-5.3-5.3-12.4-8.2-19.9-8.2H68.1z"></path>
                  <path d="M246.2 308.4c-.8 0-1.5 0-2.3-.1H116.3c-.7.1-1.5.1-2.2.1-4.8 0-9.5-1.9-12.9-5.3-3.9-3.9-5.8-9.4-5.2-14.8-.6-5.5 1.3-11 5.2-14.9 3.4-3.4 8.1-5.4 12.9-5.4.7 0 1.5 0 2.2.1h127.6c.7-.1 1.5-.1 2.3-.1 4.8 0 9.5 1.9 12.8 5.3 3.9 3.9 5.8 9.4 5.1 14.8.7 5.5-1.2 11-5.1 14.9-3.3 3.4-8 5.4-12.8 5.4zM246.2 232.3c-.8 0-1.5 0-2.3-.1H116.3c-.7.1-1.5.1-2.2.1-4.9 0-9.4-1.9-12.9-5.3-3.9-3.9-5.8-9.4-5.2-14.8-.6-5.4 1.3-11 5.2-14.8 3.4-3.4 8.1-5.3 12.9-5.3.7 0 1.5 0 2.2.1h127.6c.7-.1 1.5-.1 2.3-.1 4.8 0 9.5 1.9 12.8 5.3 3.9 3.9 5.8 9.4 5.1 14.8.6 5.4-1.3 10.9-5.1 14.8-3.4 3.3-8.1 5.3-12.8 5.3zM246.2 156.2c-.8 0-1.5 0-2.3-.1H116.3c-.7.1-1.5.1-2.2.1-4.9 0-9.4-1.9-12.9-5.3-3.9-3.9-5.8-9.4-5.2-14.8-.6-5.4 1.3-11 5.2-14.8 3.4-3.4 8.1-5.3 12.9-5.3.7 0 1.5 0 2.2.1h127.6c.7-.1 1.5-.1 2.2-.1 4.8 0 9.5 1.9 12.8 5.3 3.9 3.9 5.8 9.4 5.1 14.8.6 5.4-1.3 10.9-5.1 14.8-3.3 3.3-8 5.3-12.7 5.3z"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap font-poppins font-medium text-gray-500 transition duration-75 group-hover:text-gray-900">
                  Template
                </span>
              </a>
            </li>

            <li className="border-t border-gray-300 pt-4">
              <a
                href="#"
                className="group flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 "
              >
                <svg
                  className="flex-shrink-0 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M7 15h0M2 9.5h20" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap font-poppins font-medium text-gray-500 transition duration-75 group-hover:text-gray-900">
                  Premium
                </span>
                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-200 bg-secondary rounded-full transition duration-75 group-hover:text-white ">
                  Pro
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="group flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 "
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 100 100"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                >
                  <g>
                    <path d="m82.7 5.5h-65c-9.6 0-17.7 8.1-17.7 17.8v53.4c0 9.7 8.1 17.8 17.8 17.8h64.5c9.6 0 17.8-8.1 17.8-17.8v-53.4c.4-9.7-7.7-17.8-17.4-17.8zm7.1 71.7c0 4.1-3 7.6-7.1 7.6h-65c-4.1 0-7.6-3.6-7.6-7.6v-53.9c0-4.1 3.6-7.6 7.6-7.6h64.5c4.1 0 7.6 3.6 7.6 7.6z"></path>
                    <path d="m73.6 22.8c-2 0-4.1 1-5.6 2.5s-2 3.1-2 5.1c0 4.1 3.6 7.6 7.6 7.6s7.6-3.6 7.6-7.6-3.6-7.6-7.6-7.6z"></path>
                    <path d="m67.5 43.6c-1.5-3.6-6.6-4.1-9.1-1l-6.6 9.7c-2 3.1-6.6 3.1-8.6 0l-2-2.5c-2-3.1-6.6-2.5-8.6.5l-11.3 17.8c-2 3.6 0 8.1 4.6 8.1h47.7c3.6 0 6.1-4.1 4.6-7.6z"></path>
                  </g>
                </svg>

                <span className="flex-1 ml-3 whitespace-nowrap font-poppins font-medium text-gray-500 transition duration-75 group-hover:text-gray-900">
                  AI Image
                </span>
              </a>
            </li>

            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="w-12 h-12 mb-2 text-[#660080] "
              >
                <path
                  d="m416 512h-320c-53.023438 0-96-42.976562-96-96v-320c0-53.023438 42.976562-96 96-96h320c53.023438 0 96 42.976562 96 96v320c0 53.023438-42.976562 96-96 96zm0 0"
                  fill="#F0F5F8"
                ></path>
                <path
                  d="m354.671875 128h-197.34375c-16.175781 0-29.328125 13.152344-29.328125 29.328125v197.328125c0 16.191406 13.152344 29.34375 29.328125 29.34375h197.328125c16.191406 0 29.34375-13.152344 29.34375-29.328125v-197.34375c0-16.175781-13.152344-29.328125-29.328125-29.328125zm-42.671875 138.671875h-45.328125v45.328125c0 5.886719-4.769531 10.671875-10.671875 10.671875-5.886719 0-10.671875-4.785156-10.671875-10.671875v-45.328125h-45.328125c-5.886719 0-10.671875-4.785156-10.671875-10.671875s4.769531-10.671875 10.671875-10.671875h45.328125v-45.328125c0-5.886719 4.769531-10.671875 10.671875-10.671875 5.886719 0 10.671875 4.785156 10.671875 10.671875v45.328125h45.328125c5.886719 0 10.671875 4.785156 10.671875 10.671875s-4.769531 10.671875-10.671875 10.671875zm0 0"
                  fill="currentColor"
                ></path>
              </svg>

              <a href="#">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                  Request a new tool
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-500 ">
                Do you need a tool that we are missing or one that you think
                write.ai could be good at?
              </p>
              <a
                href="#"
                class="inline-flex items-center text-secondary hover:underline"
              >
                lets grow together
                <svg
                  class="w-5 h-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
              </a>
            </div>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
