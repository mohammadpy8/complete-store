import React, { useEffect, useState } from "react";
import "./LastCourse.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import CourseBox from "../CourseBox/CourseBox";

const LastCourse = () => {

  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {

    fetch(`http://localhost:4000/v1/courses`)
      .then(res => res.json())
      .then(allCourses => {
        console.log(allCourses);
        setAllCourses(allCourses);
      })
      .catch(err => console.log(`this my error => ${err}`));

  }, []);

  console.log(allCourses);

  return (
    <>
      <div className="courses">
        <div className="container">
          <SectionHeader
            title="جدیدترین دوره ها"
            desc="سکوی پرتاپ شما به سمت موفقیت"
            btnTitle="تمامی دوره ها"
            btnHref="courses"
          />
          <div className="courses-content">
            <div className="container">
              <div className="row">
                {
                  allCourses.splice(0, 6).map(allCourse => (
                    <CourseBox key={allCourse.id} {...allCourse} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastCourse;
