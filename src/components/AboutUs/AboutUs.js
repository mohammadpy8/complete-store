import React from "react";
import "./AboutUs.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import AboutUsBox from "../AboutUsBox/AboutUsBox";

const AboutUs = () => {
  return (
    <div class="about-us">
      <div class="container">
        <SectionHeader
          title="ما چه کمکی بهتون می کنیم؟"
          desc="از آنجایی که آکادمی سبزلرن یک آکادمی خصوصی است"
        />

        <div class="container">
          <div class="row">
            <AboutUsBox
              title="دوره های اختصاصی"
              desc="با پشتیبانی و کیفیت بالا ارائه میده !"
            />
            <AboutUsBox
              title="اجازه تدریس"
              desc="به هر مدرسی رو نمیده. چون کیفیت براش مهمه !"
            />
            <AboutUsBox
              title="دوره پولی و رایگان"
              desc="براش مهم نیست. به مدرسینش حقوق میده تا نهایت کیفیت رو در پشتیبانی و اپدیت دوره ارائه بده"
            />
            <AboutUsBox
              title="اهمیت به کاربر"
              desc="اولویت اول و آخر آکادمی آموزش برنامه نویسی سبزلرن اهمیت به کاربرها و رفع نیاز های آموزشی و رسوندن اونها به بازار کار هست"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
