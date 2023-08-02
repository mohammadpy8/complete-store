import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import TopBar from "../../components/TopBar/TopBar";
import Footer from "../../components/Footer/Footer";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

import "./CourseInfo.css";

const CourseInfo = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <BreadCrumb
        links={[
          { id: 1, title: "خانه", to: "/" },
          { id: 2, title: "آموزش برنامه نویسی فرانت اند", to: "/category-info/frontend" },
          { id: 3, title: "دوره متخصص ریکت", to: "/course-info/js-expert" },
        ]}
      />
      <Footer />
    </>
  );
};

export default CourseInfo;
