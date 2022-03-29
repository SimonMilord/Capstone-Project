import React from 'react';
import './dataTable.scss';

export default function DataTable(props) {
  const fin = props.financials;
  // console.log(fin.metric);

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
        <div className='data__value'>{fin.metric && Number(fin.metric["52WeekLow"]).toFixed(2)} - {" "}
        {fin.metric && Number(fin.metric["52WeekHigh"]).toFixed(2)}</div>
      </div>
      <div className='data__item'>
        <p className='data__name'>Average volume</p>
        <div className='data__value'>{fin.metric && Number(fin.metric["10DayAverageTradingVolume"]).toFixed(2)}M</div>
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
        <div className='data__value'>{fin.metric && Number(fin.metric.peNormalizedAnnual).toFixed(2)}</div>
      </div>
      <div className='data__item'>
        <p className='data__name'>Dividend & yield</p>
        <div className='data__value'>{fin.metric && fin.metric.dividendsPerShareTTM ? fin.metric.dividendsPerShareTTM : "N/A"} /
        {fin.metric ? Number(fin.metric.dividendsPerShareTTM / props.quote.c * 100).toFixed(2) : "N/A"}%</div>
      </div>
      <div className='data__item'>
        <p className='data__name'>Recommendation</p>
        <div className='data__value data__value--rec'>{props.recommendation}</div>
      </div>
    </div>
  );
}