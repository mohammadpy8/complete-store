import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";

import "./PopularCourses.css";

const PopularCourses = () => {
  return (
    <div className="popular">
      <div className="container">
        <SectionHeader
          title=" محبوب ترین دوره ها "
          desc="دوره های محبوب بر اساس امتیاز دانشجویان"
        />
      </div>
    </div>
  );
};

export default PopularCourses;
