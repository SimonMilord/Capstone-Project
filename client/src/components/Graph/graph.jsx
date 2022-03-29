import React from 'react';
import './graph.scss';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

export default function Graph(props) {

  // setting data sets for graph
  const pricesArray = props.chartData.c;
  const labels = props.chartData.t && (props.chartData.t).map(item => new Date(item*1000).toLocaleDateString());

  // config for chart formatting
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        intersect: false,
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        display: true
      },
      y: {
        grid: {
          display: true
        }
      }
    },
  }

const data = {
  labels: labels,
  datasets: [{
      id: 1,
      label: '',
      data: pricesArray,
      borderColor: "blue",
      pointRadius: 0,
      pointHoverRadius: 6,
    },
  ],
}

  return (
    <div className='graph'>
      <Line
        datasetIdKey='id'
        data={data}
        options={options}
      />
    </div>
  );
}