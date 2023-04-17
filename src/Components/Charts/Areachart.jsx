import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  title : {
      display:true,
      text : 'Line chart',
      backgroundColor:"white",
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
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'march 2,2023',
      data:[6,9,7,5,3,8,1],
      borderColor: 'blue',
      backgroundColor: 'white',
    },
  ],
};

const Areachart = () => {
  return (
   <Line data = {data} option = {options}/>
  )
}

export default Areachart