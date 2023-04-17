// import React from 'react'
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid';
import Areachart from '../Charts/Areachart';
import Barchart from '../Charts/Barchart';
import React, { useState, useEffect } from 'react'
import axios from "axios";

 


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const TokensOverview = () => {

  const [data, setData] = useState([]);
  const stats = [
    { id: 1, name: 'Total Value Locked', stat:data.data?.total_value_locked},
    { id: 2, name: '24 hrs Volume',stat:data.data?.voume_24h,change:'5.02%',changeType: 'increase' },
    { id: 2, name: 'CMDX Price', stat: data.data?.trades_24h,  change: '5.02%', changeType: 'increase' },
    { id: 2, name: '24 hrs volume change', stat:data.data?.volume_24h_change},
    { id: 3, name: 'Interchain Transfer', stat: data.data?.intechain_transfers_24h},
  ]

  useEffect(() => {
    axios.get('https://stat.comdex.one/api/v2/cswap/overview')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  return (
    <>
    <div className="bg-gradient-to-r from-[#1e1d46] to-[rgba(10,17,50,1)] p-5 ">
    <h3 className="mt-5 leading-6  p-5 text-white text-2xl font-medium ">Tokens Overview</h3>
    {/* {console.log(data.data)} */}
   <div className=' shadow-white max-w-7xl mx-auto resize rounded-2xl  bg-slate-900  p-5 '>
   <div className='text-white flex justify-start align-middle flex-shrink text-2xl font-medium'>
   <img className="h-6 rounded-full sm:h-10" src="data:image/png;base64,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"
    alt="CMDX"/> CMDX </div>
    <dl className=" grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-5">
      {stats.map((item) => (
        <div
         key={item.id} 
         className="relative bg-slate-900 pt-5 px-4 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden" >
          <dt><p className="ml-16 text-sm font-medium text-white truncate">{item.name}</p></dt>
          <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
          <p className="text-2xl font-semibold  text-white"> { Math.round(item.stat)}</p>
           <p className={classNames
           (item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
           'ml-2 flex items-baseline text-sm font-semibold')}>
              {item.changeType === 'increase' ? (
                <ArrowSmUpIcon className="self-center flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
              ) : (
                <ArrowSmDownIcon className="self-center flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />
              )}
              <span className="sr-only">{item.changeType === 'increase' ? 'Increased' : 'Decreased'} by</span>
              {item.change}
            </p>   
          </dd>
        </div>
      ))}
    </dl>
    </div>
    <div>
   </div>
   </div> 

   {/* second part */}


   <div className=' text-white m-20 text-2xl'>
   CMDX - Volume & Liquidity
   <div className="flex justify-evenly m-10 min-w-full p-10  mt-3">
    <div className='bg-[#14143f] rounded-lg px-40 py-40'>
      <Areachart />
    </div>
    <div className='bg-[#14143f] rounded-lg px-40 py-40'>
      <Barchart />
    </div>
   </div>
   </div>
  </>
  )
}

export default TokensOverview