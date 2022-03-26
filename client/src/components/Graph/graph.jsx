import React from 'react';
import './graph.scss';

export default function Graph(props) {


  return (
    <div className='graph'>
      <div className='container'>
        <canvas className='graph' id='graph'>

        </canvas>
      </div>
    </div>
  );
}