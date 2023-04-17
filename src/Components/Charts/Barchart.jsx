import React from 'react';
import {Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';



const Barchart = () => {
  const data = {
    labels:["jan",'feb','mar','apr','may','jun','jul','aug'],
    datasets:[
      {
        label : 'march 2,2023',
        data : [6,9,7,5,3,8,1],
        backgroundColor : 'blue'
      }
    ]
  };

  const option = {
    title : {
      display:true,
      text : 'Line chart',
    },
    scales :{
      yAxis:[
        {
          ticks:{
            min:0,
            max:10,
            stepSize:1,
          }
        }
      ]
    }
  }
  return (
   <Bar data = {data} option = {option}/>
  )
}

export default Barchart