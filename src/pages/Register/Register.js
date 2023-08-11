import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import TopBar from "../../components/TopBar/TopBar";
import { Link } from "react-router-dom";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";

import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
} from "../../Validators/rules";
import useForm from "../../hooks/useForm";

import toast,{ Toaster } from "react-hot-toast";

import "./Register.css";

const Register = () => {


  const [formState, onInputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      username: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      phone: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const registerNewUser = (event) => {
    event.preventDefault();

    const newUserInfos = {
      name: formState.inputs.name.value,
      username: formState.inputs.username.value,
      email: formState.inputs.email.value,
      phone: formState.inputs.phone.value,
      password: formState.inputs.password.value,
      confirmPassword: formState.inputs.password.value,
    };

    fetch(`http://localhost:4000/v1/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserInfos),
    })
      .then((res) => {
        console.log(res);
        res.status === 400 && toast.error('ثبت نام با موفقیت انجام شد')
        res.status === 201 && toast.success('ثبت نام با موفقیت انجام شد')
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <TopBar />
      <Navbar />

      <section className="login-register">
        <div className="login register-form">
          <span className="login__title">ساخت حساب کاربری</span>
          <span className="login__subtitle">
            خوشحالیم قراره به جمع ما بپیوندی
          </span>
          <div className="login__new-member">
            <span className="login__new-member-text">
              قبلا ثبت‌نام کرده‌اید؟{" "}
            </span>
            <Link className="login__new-member-link" to="/login">
              وارد شوید
            </Link>
          </div>
          <form action="#" className="login-form">
            <div className="login-form__username">
              <Input
                className="login-form__username-input"
                type="text"
                placeholder="نام و نام خانوادگی"
                element="input"
                id="name"
                onInputHandler={onInputHandler}
                validations={[
                  requiredValidator(),
                  minValidator(10),
                  maxValidator(25),
                ]}
              />
              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__username">
              <Input
                className="login-form__username-input"
                type="text"
                placeholder="نام کاربری"
                element="input"
                id="username"
                onInputHandler={onInputHandler}
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(18),
                ]}
              />
              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__password">
              <Input
                className="login-form__password-input"
                type="text"
                placeholder="آدرس ایمیل"
                element="input"
                id="email"
                onInputHandler={onInputHandler}
                validations={[emailValidator()]}
              />
              <i className="login-form__password-icon fa fa-envelope"></i>
            </div>
            <div className="login-form__password">
              <Input
                className="login-form__password-input"
                type="text"
                placeholder="شماره تلفن"
                element="input"
                id="phone"
                onInputHandler={onInputHandler}
                validations={[
                  requiredValidator(),
                  minValidator(12),
                  maxValidator(13),
                ]}
              />
              <i className="login-form__password-icon fa fa-envelope"></i>
            </div>
            <div className="login-form__password">
              <Input
                className="login-form__password-input"
                type="text"
                placeholder="رمز عبور"
                element="input"
                id="password"
                onInputHandler={onInputHandler}
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(18),
                ]}
              />

              <i className="login-form__password-icon fa fa-lock-open"></i>
            </div>
            <Button
              className={`login-form__btn ${
                formState.isFormValid
                  ? "login-form__btn-success"
                  : "login-form__btn-error"
              }`}
              type="submit"
              onClick={registerNewUser}
              // disabled={!formState.isFormValid}
            >
              <i className="login-form__btn-icon fa fa-user-plus"></i>
              <span className="login-form__btn-text">عضویت</span>
            </Button>
          </form>
          <div className="login__des">
            <span className="login__des-title">سلام کاربر محترم:</span>
            <ul className="login__des-list">
              <li className="login__des-item">
                لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس
                استفاده کنید.
              </li>
              <li className="login__des-item">
                ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
              </li>
              <li className="login__des-item">
                لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Toaster />

      <Footer />
    </>
  );
};

export default Register;
