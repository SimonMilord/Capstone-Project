import React from 'react';
import './graph.scss';

export default function Graph(props) {

  // console.log(props.chartData);
  const pricesArray = props.chartData.c;
  const timeArray = props.chartData.t;

  // console.log(pricesArray);
  // console.log(timeArray);

  return (
    <div className='graph'>
      <div className='container'>
        <h1>CHART</h1>
      </div>
    </div>
  );
}