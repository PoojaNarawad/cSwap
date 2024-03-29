
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import React from 'react';
// import React, { useState, useEffect } from 'react'
// import axios from "axios";



const Header = () => {
    
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get('https://stat.comdex.one/api/v2/cswap/overview')
  //     .then(response => {
  //       setData(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []); 

  return (
    <>
        <Popover className="relative bg-gray-900 ">
      <div className="max-w-full mx-auto sm:px-6">
        <div className="flex justify-between items-center mx-2 py-3 md:justify-start md:space-x-10">
        {/* {console.log(data.data)} */}
        <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#swap">
              <span className="sr-only">swap</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://cswap.one/static/media/cSwap-light-logo.abef418819a28fff378324bd9f99799b.svg"
                alt=""
              />
            </a>
        </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-20">
            

            <a href="/overview" className="text-base font-medium text-sky-100 hover:text-blue-900">
             Overview
            </a>
            <a href="/pool" className="text-base font-medium text-sky-100 hover:text-blue-900">
             Pools
            </a>
            <a href="/tokens" className="text-base font-medium text-sky-100 hover:text-blue-900">
              Tokens
            </a>

            
          </Popover.Group>
          <div className="hidden mx-8 mt-5 md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#launchapp" className="w-sm px-4 py-2 border border-transparent rounded-full shadow-sm  font-medium text-white bg-red-500">
             Launch App
            </a>
            
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://cswap.one/static/media/cSwap-light-logo.abef418819a28fff378324bd9f99799b.svg"
                    alt="Swap"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="/overview" className="text-base font-medium text-blue-900">
                  Overview
                </a>
                <a href="/pool" className="text-base font-medium text-blue-900">
                  Pools
                </a>

                <a href="/tokens" className="text-base font-medium text-blue-900">
                  Tokens
                </a>
               
              </div>
              <div>
                <a
                  href="#launchapp"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-indigo-700"
                >
                  Launch App
                </a>
                
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
    
    </>
  )
}

export default Header