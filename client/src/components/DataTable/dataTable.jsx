import React from 'react';
import './dataTable.scss';

export default function DataTable(props) {
  return (
    <div className='data'>
      {/* <h2>Data on Apple Inc.</h2> */}
      <div className='data__item'>
        <p className='data__name'>Previous close</p>
        <div className='data__value'>170.21</div>
      </div>
      <div className='data__item'>
        <p className='data__name'>Day range</p>
        <div className='data__value'>170.21 - 172.35</div>
      </div>
      <div className='data__item'>
        <p className='data__name'>Year range</p>
        <div className='data__value'>118.86 - 182.94</div>
      </div>
      <div className='data__item'>
        <p className='data__name'>Average volume</p>
        <div className='data__value'>93,428,037</div>
      </div>
      <div className='data__item'>
        <p className='data__name'>Market capitalization</p>
        <div className='data__value'>2.792T</div>
      </div>
      <div className='data__item'>
        <p className='data__name'>Beta</p>
        <div className='data__value'>1.19</div>
      </div>
      <div className='data__item'>
        <p className='data__name'>P/E ratio</p>
        <div className='data__value'>28.44</div>
      </div>
      <div className='data__item'>
        <p className='data__name'>Recommendation</p>
        <div className='data__value data__value--rec'>BUY</div>
      </div>
    </div>
  );
}