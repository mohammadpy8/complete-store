import React, { useEffect, useState } from "react";
import TopBar from "../../components/TopBar/TopBar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CourseBox from "../../components/CourseBox/CourseBox";

import "./Category.css";
import Pagination from "../../components/Pagination/Pagination";
import { useParams } from "react-router-dom";

const Category = () => {
  const [courses, setCourses] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    fetch(`http:localhost:4000/v1/courses/cateogry/${categoryName}`)
      .then((res) => res.json())
      .then((courses) => setCourses(courses))
      .catch((err) => console.log(`error is => ${err}`));
  }, []);

  return (
    <>
      <TopBar />
      <Navbar />
      <section className="courses">
        <div className="container">
          <div className="courses-content">
            <div className="container">
              <div className="row">
                {courses.length === 0 ? (
                  <div className="alert alert-warning"></div>
                ) : (
                  <>
                    <div className="courses-top-bar">
                      <div className="courses-top-bar__right">
                        <div className="courses-top-bar__row-btn courses-top-bar__icon--active">
                          <i className="fas fa-border-all courses-top-bar__icon"></i>
                        </div>
                        <div className="courses-top-bar__column-btn">
                          <i className="fas fa-align-left courses-top-bar__icon"></i>
                        </div>

                        <div className="courses-top-bar__selection">
                          <span className="courses-top-bar__selection-title">
                            مرتب سازی پیش فرض
                            <i className="fas fa-angle-down courses-top-bar__selection-icon"></i>
                          </span>
                          <ul className="courses-top-bar__selection-list">
                            <li className="courses-top-bar__selection-item courses-top-bar__selection-item--active">
                              مرتب سازی پیش فرض
                            </li>
                            <li className="courses-top-bar__selection-item">
                              مربت سازی بر اساس محبوبیت
                            </li>
                            <li className="courses-top-bar__selection-item">
                              مربت سازی بر اساس امتیاز
                            </li>
                            <li className="courses-top-bar__selection-item">
                              مربت سازی بر اساس آخرین
                            </li>
                            <li className="courses-top-bar__selection-item">
                              مربت سازی بر اساس ارزان ترین
                            </li>
                            <li className="courses-top-bar__selection-item">
                              مربت سازی بر اساس گران ترین
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="courses-top-bar__left">
                        <form action="#" className="courses-top-bar__form">
                          <input
                            type="text"
                            className="courses-top-bar__input"
                            placeholder="جستجوی دوره ..."
                          />
                          <i className="fas fa-search courses-top-bar__search-icon"></i>
                        </form>
                      </div>
                    </div>
                    {courses.map((course) => (
                      <CourseBox {...course} />
                    ))}
                    <Pagination />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Category;
