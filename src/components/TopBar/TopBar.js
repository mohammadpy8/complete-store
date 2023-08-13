import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./TopBar.css";

const TopBar = () => {

  const [allTopBarLink, setAllTopBarLink] = useState([]);

  useEffect(() => {

    fetch(`http://localhost:4000/v1/menus/topbar`)
      .then(res => res.json())
      .then(data => {
        setAllTopBarLink(data);
      })
      .catch(err => console.log(err));

  }, []);

  const getRandomItemFromArray = (arr, randomCount) => {

    const shuffel = [...arr].sort(() => 0.5 - Math.random());
    const randomShudffel = shuffel.slice(0, randomCount);

    return randomShudffel;

  };

  return (
    <div className="top-bar">
      <div className="container-fluid">
        <div className="top-bar__content">
          <div className="top-bar__right">
            <ul className="top-bar__menu">
              {
                getRandomItemFromArray(allTopBarLink, 6).map(link => {
                  const { _id, title, href } = link;
                  return (
                    <li className="top-bar__item" key={_id}>
                      <Link to={href} className="top-bar__link">
                        {title}
                    </Link>
                  </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="top-bar__left">
            <div className="top-bar__email">
              <a href="#" className="top-bar__email-text top-bar__link">
                sabzlearn@gmail.com
              </a>
              <i className="fas fa-envelope top-bar__email-icon"></i>
            </div>
            <div className="top-bar__phone">
              <a href="#" className="top-bar__phone-text top-bar__link">
                09921558293
              </a>
              <i className="fas fa-phone top-bar__phone-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
