import React from "react";
import Header from "../../components/Header/Header";
import "./Index.css";
import LastCourse from "../../components/LastCourse/LastCourse";
import AboutUs from "../../components/AboutUs/AboutUs";

const Index = () => {
  return (
    <>
      <Header />
          <LastCourse />
          <AboutUs />
    </>
  );
};

export default Index;
