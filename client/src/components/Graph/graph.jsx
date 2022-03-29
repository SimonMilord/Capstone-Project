import React from 'react';
import './graph.scss';
// import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

export default function Graph(props) {

  // console.log(props.chartData);
  const pricesArray = props.chartData.c;
  const labels = (props.chartData.t).map(item => new Date(item*1000).toLocaleDateString());

  // console.log(pricesArray);
  // console.log(labels);
  return (
    <div className='graph'>
      <Line
        datasetIdKey='id'
        data={{
          labels: labels,
          datasets: [
            {
              id: 1,
              label: '',
              data: pricesArray,
            },
          ],
        }}
      />
    </div>
  );
}