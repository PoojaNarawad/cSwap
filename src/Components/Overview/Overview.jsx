// import React from 'react';
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid';
import Areachart from '../Charts/Areachart';
import Barchart from '../Charts/Barchart';
import React, { useState, useEffect } from 'react'
import axios from "axios";

 


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Overview = () => {

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
      <h3 className="mt-5 leading-6  p-5 text-white text-2xl font-medium ">Overview - cSwap</h3>
     <div className=' shadow-white max-w-7xl mx-auto resize rounded-2xl  bg-slate-900  p-5 '>
     <img className="h-2 ml-20 -mb-3 shadow-white sm:h-10 " src="https://cswap.one/static/media/cSwap-light-logo.abef418819a28fff378324bd9f99799b.svg" alt=""/>
      <dl className="mt-5 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((item) => (
          <div
           key={item.id} 
           className="relative bg-slate-900 pt-2 px-2 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden" >
            <dt><p className="ml-16 text-sm font-medium text-blue-200 truncate">{item.name}</p></dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
            <p className="text-2xl font-semibold  text-white"> ${ Math.round(item.stat)}</p>
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

export default Overview