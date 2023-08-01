import React from "react";
import Header from "../../components/Header/Header";
import "./Index.css";
import LastCourse from "../../components/LastCourse/LastCourse";
import AboutUs from "../../components/AboutUs/AboutUs";
import PopularCourses from "../../components/PopularCourses/PopularCourses";
import PrecellCourses from "../../components/PrecellCourses/PrecellCourses";
import LastArticle from "../../components/LastArticle/LastArticle";

const Index = () => {
  return (
    <>
      <Header />
      <LastCourse />
      <AboutUs />
      <PopularCourses />
      <PrecellCourses />
      <LastArticle />
    </>
  );
};

export default Index;
