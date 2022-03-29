import React from 'react';
import './graph.scss';
// import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

export default function Graph(props) {

  // console.log(props.chartData);
  // const pricesArray = props.chartData.c;
  // const labels = props.chartData.t;

  // console.log(pricesArray);
  // console.log(timeArray);
  const data = [1];
  return (
    <div className='graph'>
      <Line
        datasetIdKey='id'
        data={{
          labels: ['Jun', 'Jul', 'Aug'],
          datasets: [
            {
              id: 1,
              label: '',
              data: [],
            },
            {
              id: 2,
              label: '',
              data: [],
            },
          ],
        }}
      />
    </div>
  );
}