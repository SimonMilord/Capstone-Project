import React from "react";
import "./dataTable.scss";
import Tooltip from "@mui/material/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function DataTable(props) {
  const fin = props.financials;
  const ttsize = 16;

  return (
    <div className="data">
      <div className="data-left">
        <div className="data__item data__item--first">
          <p className="data__name">Previous close</p>
          <div className="data__value">{Number(props.quote.pc).toFixed(2)}</div>
        </div>
        <div className="data__item">
          <p className="data__name">Day range</p>
          <div className="data__value">
            {Number(props.quote.l).toFixed(2)} -{" "}
            {Number(props.quote.h).toFixed(2)}
          </div>
        </div>
        <div className="data__item">
          <p className="data__name">Year range</p>
          <div className="data__value">
            {fin.metric && Number(fin.metric["52WeekLow"]).toFixed(2)} -{" "}
            {fin.metric && Number(fin.metric["52WeekHigh"]).toFixed(2)}
          </div>
        </div>
        <div className="data__item">
          <div className="data-tooltip-wrap">
            <p className="data__name">Volume (10-Day Avg)</p>&nbsp;
            <Tooltip
              title="Average # of shares that traded in the last 10 days"
              placement="top"
            >
              <InfoOutlinedIcon style={{ fontSize: ttsize }} />
            </Tooltip>
          </div>
          <div className="data__value">
            {fin.metric &&
              Number(fin.metric["10DayAverageTradingVolume"]).toFixed(2)}
            M
          </div>
        </div>
        <div className="data__item">
          <div className="data-tooltip-wrap">
            <p className="data__name">EPS (TTM)</p>&nbsp;
            <Tooltip
              title="Trailing 12 months earnings per share"
              placement="top"
            >
              <InfoOutlinedIcon style={{ fontSize: ttsize }} />
            </Tooltip>
          </div>
          <div className="data__value">
            {fin.metric && Number(fin.metric.epsInclExtraItemsTTM).toFixed(2)}
          </div>
        </div>
      </div>
      <div className="data-right">
        <div className="data__item data__item--first">
          <div className="data-tooltip-wrap">
            <p className="data__name">Market capitalization</p>&nbsp;
            <Tooltip
              title="Represents the market value of the company"
              placement="top"
            >
              <InfoOutlinedIcon style={{ fontSize: ttsize }} />
            </Tooltip>
          </div>
          <div className="data__value">
            {Number(props.profile.marketCapitalization / 1000).toFixed(3)}B
          </div>
        </div>
        <div className="data__item">
          <div className="data-tooltip-wrap">
            <p className="data__name">Beta</p>&nbsp;
            <Tooltip
              title="Measure of a stock's volatility in relation with the overall market"
              placement="top"
            >
              <InfoOutlinedIcon style={{ fontSize: ttsize }} />
            </Tooltip>
          </div>
          <div className="data__value">
            {fin.metric && Number(fin.metric.beta).toFixed(2)}
          </div>
        </div>
        <div className="data__item">
          <div className="data-tooltip-wrap">
            <p className="data__name">P/E ratio</p>&nbsp;
            <Tooltip
              title="Valuation ratio that measures a company current share price relative to its earnings per share (EPS)"
              placement="top"
            >
              <InfoOutlinedIcon style={{ fontSize: ttsize }} />
            </Tooltip>
          </div>
          <div className="data__value">
            {fin.metric && fin.metric.peBasicExclExtraTTM > 0
              ? Number(fin.metric.peBasicExclExtraTTM).toFixed(2)
              : "N/A"}
          </div>
        </div>
        <div className="data__item">
          <p className="data__name">Dividend & Yield</p>
          <div className="data__value">
            {fin.metric && fin.metric.dividendsPerShareTTM
              ? fin.metric.dividendsPerShareTTM
              : "N/A"}{" "}
            /
            {fin.metric
              ? Number(
                  (fin.metric.dividendsPerShareTTM / props.quote.c) * 100
                ).toFixed(2)
              : "N/A"}
            %
          </div>
        </div>
        <div className="data__item">
          <p className="data__name">Recommendation</p>
          <div
            className={
              props.recommendation === "BUY"
                ? "data__value--buy"
                : props.recommendation === "HOLD"
                ? "data__value--hold"
                : "data__value--sell"
            }
          >
            {props.recommendation}
          </div>
        </div>
      </div>
    </div>
  );
}
