import React from "react";
import "./newsSection.scss";
import NewsCard from "../newsCard/newsCard";

export default function NewsSection(props) {
  const newsArray = props.currentNews;

  return (
    <div className="newsSection">
      <ul className="newsList">
        {newsArray &&
          newsArray.map((newsItem) => (
            <li className="newsList__item" key={newsItem.id}>
              <NewsCard
                date={newsItem.datetime}
                headline={newsItem.headline}
                source={newsItem.source}
                linkurl={newsItem.url}
                image={newsItem.image}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}

