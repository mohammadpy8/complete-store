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
            title: "آموزش برنامه نویسی فرانت اند",
            to: "/category-info/frontend",
          },
          {
            id: 3,
            title: "دوره متخصص ریکت و ریداکس",
            to: "/course-info/js-expert",
          },
        ]}
      />

      <Footer />
    </>
  );
};

export default Courses;
