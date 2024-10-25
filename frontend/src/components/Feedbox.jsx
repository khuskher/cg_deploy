import React from 'react';
import '../CSS/Feedbox.css';

const Feedbox = ({ title, description, date, time, area, city, state, category}) => {
  return (
    <div className="tw-block-parent">
      <div className="timeline-TweetList-tweet">
        <div className="timeline-Tweet">
          {/* <div className="timeline-Tweet-brand">
            <div className="Icon Icon--twitter"></div>
          </div> */}
          <div className="timeline-Tweet-author">
            <div className="TweetAuthor">
              <a className="TweetAuthor-link" href="#channel"></a>
              {/* <span className="TweetAuthor-avatar">
                <div className="Avatar"></div>
              </span> */}
              {/* <span className="TweetAuthor-name">{name}</span> */}
              {/* <span className="Icon Icon--verified"></span> */}
              {/* <span className="TweetAuthor-screenName">@{username}</span> */}
            </div>
          </div>
          <div className="timeline-Tweet-text">
            {title} <br/>
            {description} <br />
            <span>Date: {date}</span> <br />
            <span>Time: {time}</span> <br />
            <span>Location: {area}, {city}, {state}</span> <br />
            <span>Type: {category}</span>
          </div>
          {/* <div className="timeline-Tweet-metadata">
            <span className="timeline-Tweet-timestamp">Reported on: {reportedDate}</span>
          </div> */}
          <ul className="timeline-Tweet-actions">
            {/* <li className="timeline-Tweet-action">
              <a className="Icon Icon--heart" href="#"></a>
            </li> */}
            <li className="timeline-Tweet-action">
              <a className="Icon Icon--share" href="#"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Feedbox;
