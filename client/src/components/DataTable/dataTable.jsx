import React from 'react';
import './dataTable.scss';

export default function DataTable(props) {
  const fin = props.financials;
  // const avgVol = '10DayAverageTradingVolume';
  // const yearLow = '52WeekLow';
  // const yearHigh = '52WeekHigh';
  console.log(fin);

  return (
    <div className='data'>
      <div className='data__item'>
        <p className='data__name'>Previous close</p>
        <div className='data__value'>{Number(props.quote.pc).toFixed(2)}</div>
      </div>
      <div className='data__item'>
        <p className='data__name'>Day range</p>
        <div className='data__value'>{Number(props.quote.l).toFixed(2)} - {" "}
        {Number(props.quote.h).toFixed(2)}</div>
      </div>
      <div className='data__item'>
        <p className='data__name'>Year range</p>
        {/* <div className='data__value'>{Number(fin.yearLow).toFixed(2)} - {" "}
        {Number(fin.yearHigh).toFixed(2)}</div> */}
      </div>
      <div className='data__item'>
        <p className='data__name'>Average volume</p>
        {/* <div className='data__value'>{fin.avgVol}</div> */}
      </div>
      <div className='data__item'>
        <p className='data__name'>Market capitalization</p>
        <div className='data__value'>{Number(props.profile.marketCapitalization/1000).toFixed(3)}B</div>
      </div>
      <div className='data__item'>
        <p className='data__name'>Beta</p>
        <div className='data__value'>{fin.metric && Number(fin.metric.beta).toFixed(2)}</div>
      </div>
      <div className='data__item'>
        <p className='data__name'>P/E ratio</p>
        {/* <div className='data__value'>{fin.peNormalizedAnnual && fin.peNormalizedAnnual}</div> */}
      </div>
      <div className='data__item'>
        <p className='data__name'>Dividend & yield</p>
        {/* <div className='data__value'>{fin.dividendPerShareTTM} / {fin.dividendPerShareTTM / props.quote.c}%</div> */}
      </div>
      <div className='data__item'>
        <p className='data__name'>Recommendation</p>
        <div className='data__value data__value--rec'>{props.recommendation}</div>
      </div>
    </div>
  );
}