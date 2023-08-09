import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import Navbar from "../../components/Navbar/Navbar";
import Pagination from "../../components/Pagination/Pagination";
import Footer from "../../components/Footer/Footer";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import CourseBox from "../../components/CourseBox/CourseBox";

import "./Courses.css";

const Courses = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <BreadCrumb
        links={[
          { id: 1, title: "خانه", to: "/" },
          {
            id: 2,
            title: "تمامی دوره ها",
            to: "courses",
          },
        ]}
      />

      <section class="courses">
        <div class="container">
          <div class="courses-content">
            <div class="container">
              <div class="row">
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
              </div>
            </div>
          </div>

          <div class="courses-pagination">
            <ul class="courses__pagination-list">
              <li class="courses__pagination-item">
                <a href="#" class="courses__pagination-link">
                  <i class="fas fa-long-arrow-alt-right courses__pagination-icon"></i>
                </a>
              </li>
              <li class="courses__pagination-item">
                <a
                  href="#"
                  class="courses__pagination-link courses__pagination-link--active"
                >
                  1
                </a>
              </li>
              <li class="courses__pagination-item">
                <a href="#" class="courses__pagination-link">
                  2
                </a>
              </li>
              <li class="courses__pagination-item">
                <a href="#" class="courses__pagination-link">
                  3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Courses;
