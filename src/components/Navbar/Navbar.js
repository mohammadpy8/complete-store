import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";

import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {

  const getUserName = useContext(AuthContext);

  const [getAllMenus, setGetAllMenus] = useState([]);

  useEffect(() => {

    fetch(`http://localhost:4000/v1/menus`)
      .then((res) => res.json())
      .then((menus) => {
        console.log(menus);
        setGetAllMenus(menus);
      })
      .catch((err) => console.log(err));
    
  }, []);

  return (
    <div className="main-header">
      <div className="container-fluid">
        <div className="main-header__content">
          <div className="main-header__right">
            <Link to="/">
            <img
              src="/images/logo/Logo.png"
              className="main-header__logo"
              alt="لوگوی سبزلرن"
              />
            </Link>

            <ul className="main-header__menu">
              <li className="main-header__item">
                <a href="#" className="main-header__link">
                  صفحه اصلی
                </a>
              </li>

              {getAllMenus.map((menu) => {
                const { _id, href, title, submenus } = menu;
                return (
                  <li className="main-header__item" key={_id}>
                    <Link to={href} className="main-header__link">
                      {title}
                    </Link>
                    {submenus.length ? (
                      <i className="fas fa-angle-down main-header__link-icon"></i>
                    ) : null}
                    {submenus.length ? (
                      <ul className="main-header__dropdown">
                        {submenus.map((submenu) => {
                          const { _id, title, href } = submenu;
                          return (
                            <li
                              className="main-header__dropdown-item"
                              key={_id}
                            >
                              <Link
                                to={href}
                                className="main-header__dropdown-link"
                              >
                                {title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="main-header__left">
            <a href="#" className="main-header__search-btn">
              <i className="fas fa-search main-header__search-icon"></i>
            </a>
            <a href="#" className="main-header__cart-btn">
              <i className="fas fa-shopping-cart main-header__cart-icon"></i>
            </a>

            {getUserName.isLoggedIn ? (
              <Link to="#" className="main-header__profile">
                <span className="main-header__profile-text">
                  {getUserName.userInfos.name}
                </span>
              </Link>
            ) : (
              <Link to="/login" className="main-header__profile">
                <span className="main-header__profile-text">ورود/ ثبت نام</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
