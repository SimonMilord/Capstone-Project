import "./newsCard.scss";
import React from "react";
import { Link } from "react-router-dom";
import stonkImg from "../../assets/Images/stonks.jpeg";

export default function newsCard(props) {
  const url = props.linkurl;
  const newsDate = new Date(props.date * 1000)
    .toISOString()
    .split("T")[0]
    .split("-")
    .reverse()
    .join("-");

  return (
    <div className="newsCard">
      <Link to={{ pathname: url }} target="_blank" className="newsCard__link">
        <div className="newsCard__content">
          <div className="newsCard__top">
            <h2 className="newsCard__source">{props.source} | </h2>&nbsp;
            <div className="newsCard__date">{newsDate}</div>
          </div>
          <div className="newsCard__headline">{props.headline}</div>
        </div>
        {props.image ? (
          <div className="newsCard__img">
            <img src={props.image} alt="not found" />
          </div>
        ) : (
          <div className="newsCard__img">
            <img src={stonkImg} alt="not found" />
          </div>
        )}
      </Link>
    </div>
  );
}
