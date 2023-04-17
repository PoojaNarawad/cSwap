import React, { useState , useEffect } from 'react'
import Tokenstable from './Tokenstable'
import axios from 'axios';

const Tokens = () => {

  const [tokendata, setTokendata ] = useState([]);


   
  useEffect(() => {
    axios.get('https://stat.comdex.one/api/v2/cswap/tokens/all')
    .then(response => {
      setTokendata(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, [])
  


  return (
    <>
      <nav className=" text-white py-4">
    <div className=" mt-10  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
    {/* {console.log( tokendata)} */}
      <div>
        <h1 className="text-2xl font-md">All Tokens</h1>
      </div>
      <div>
        <form>
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative text-gray-400  focus-within:text-gray-600">
            <input
              type="search"
              name="search"
              id="search"
              className="bg-gray-700 text-blue-120 py-2 pr-20 pl-10 rounded-full border-blue-200  focus:outline-none focus:border-transparent"
              placeholder="Search Tokens"
            />
            <div className="absolute inset-y-0  flex items-center pl-3 pointer-events-none">
          {/* <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> */}
      </div>
          </div>
          
        </form>
      </div>
    </div>
  </nav>
  <div>
    <Tokenstable props={tokendata}/>
  </div>
    </>
  )
}

export default Tokens