import React from 'react';
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid';
import {Link} from 'react-router-dom';





const Tokenstable = ({props}) => {

  const tokendata = [
    
    {
      token: props.data?.symbol,
      price: props.data?.price,
      price24h: props.data?.price_24h_change,changeType: 'increase',
      volume24h:props.data?.total_volume_24h_change,
      volume24hchange: props.data?.liquidity_24h_change,
      liquidity: props.data?.liquidity,
      image:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAbFBMVEX////oHz/nADHnAC7nEDf4ys70rbToGDv1qLPxfo/uXnPveobuZHjsSmL97/HzoKjwhJDtV23wc4X/+vv84OT729/2sbvpJ0b1oq7rQ1v96ez+9Pb5xc371tzqL07xi5fvbH/zmKT3uMDrOVR3obj8AAAC2ElEQVRoge3bfXOiMBAGcEjWRih4ICoFlfry/b/j2XPaQhISqrvhbm6f/5nfoGQDw0MUccZTHV5osjtO0Le5EkSJ1yuffqwhJovIKw/fEeo3P3HrB0mpx6rbOPl30pO/nf7CyRfEvPyv+Xo7Jw+ZUyfmofbMnQGvnopFb3xjt893afl40rI29daj93lYR9XDiapE/xsh9U1cnX8ia6Hp8rT3H4XEt7mug2faY/Jtrv/y4jzpQBR+q2+bSuymHYnBL2pt0an6MvFQBH6n6yCn3GXdefE1NsRj/Bvoeu6e8/2cm/wzzfsj+tm45Bv3HQZqTrou0gnLHSmrxBg2iffmFi370jh3+7CpjucEP40+bJR92KxeQQB+9OUu3qx62+g/EkVUfbD/R0UIHeqRu8pNZ7kTQdevY8NmQfskc9fz0QUXgBfp+HKn553bBTnvfo6l5uXSpRPzKnbrQx578smxYWPl6/Uraoql92a+x6s83G5s5cNtx/8A/9K7FjxXMAVfyO9r+DQDj/WIyTzzzDPPPPPMM88888wzzzzzzDPPPPPMMx+aj69ZiprkUP2ER37ToQDSzU949EDXzsnHcJqV/6gLzsnLxd/MByjKunjqmvB1436TpTeecCMLz4s0o22GGSgr33u8YwMobXjLWUC58ky9P///L4ycjaqovO9hQd5iVplx7kUUjG9L/ceXnw2mAPz2qtcl46+6JD1/NMqa8F0qIOcvRl2y69UlqfmLUZccdLOJeaMuKZoBQspXxp4ptK9xKPmq0PcskWn1EEJ+b3SzhdF3pePNYWMpLA54f2d+ejbmsLHUJQe1oTTDi15DVLGtwTQsTT33AYbrcwyIrXXJEG3FDz23t6PD8HAd+RAkCC+zsYs6SFV0PbqkAvCyGF/QC/KWMLjqXtQ1YeXUb09SxGVNT11yb3w2gxjofGXNaF8IifIsYUZmUz7FWO2WJNlN/wplnvwGDj5mJXewxiAAAAAASUVORK5CYII=',
    },

    // More TokenData...
  ]
  

  return (
    <>
      <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden  max-w-7xl mx-auto sm:rounded-lg">
          {console.log(props)}
            <table className="min-w-full">
              <thead>
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-200 tracking-wider">
                    Token
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-200  tracking-wider">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-200  tracking-wider">
                  Price(24h)
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-200  tracking-wider">
                  Volume(24h)
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-200  tracking-wider">
                  Volume(24h)change
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-200  tracking-wider">
                  Liquidity
                  </th>
                </tr>
              </thead>
              
              <tbody className="bg-slate-900 rounded-full ">
                {tokendata.map((token) => (
                  <tr className='mt-4'>
                  {/* <div className='flex fle-row'><Link to="/tokensoverview"> */}
                    <td className="px-6 py-4  whitespace-nowrap">
                      <div className="flex items-center">
                      <Link to="/tokensoverview">
                        <div className="flex-shrink-0 h-10 w-10"><img className="h-10 w-10 rounded-full" src={token.image} alt="" /></div>
                        <div className="ml-4"><div className="text-sm font-medium text-white">{token.token}</div></div>
                        </Link>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap"><Link to="/tokensoverview"><div className="text-sm text-white">{token.price}</div></Link></td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-white">{token.price24h}</div><ArrowSmUpIcon className="self-center flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true"/>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap"> <div className="text-sm text-white">{token.volume24h}</div></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{token.volume24hchange}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{token.liquidity}</td>
                      {/* </Link></div> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Tokenstable