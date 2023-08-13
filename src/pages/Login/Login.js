import React, { useContext } from "react";
import TopBar from "../../components/TopBar/TopBar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Form/Input";

import Button from "../../components/Form/Button";
import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
} from "../../Validators/rules";
import useForm from "../../hooks/useForm";

import toast, { Toaster } from "react-hot-toast";
import AuthContext from "../../context/AuthContext";

import swal from "sweetalert";

import "./Login.css";

const Login = () => {

  const navigate = useNavigate();

  const loginAccess = useContext(AuthContext);

  const [formState, onInputHandler] = useForm(
    {
      usename: {
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

  const loginUser = (event) => {
    event.preventDefault();

    const userData = {
      identifier: formState.inputs.username.value,
      password: formState.inputs.password.value
    };

    fetch(`http://localhost:4000/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then(res => {
        console.log(res);
        if (!res.ok) {
          return res.text().then(text => {
            throw new Error(text);
          })          
        } else {
          return res.json()
        }
      })
      .then(result => {
        swal({
          title: "ورود با موفقیت انجام شد",
          icon: "success",
          buttons: "ورود به پنل کاربری"
        }).then(value => {
          navigate("/");
          console.log(value);
        })
        loginAccess.login({}, result.accessToken);
      })
      .catch(err => {
        console.log(`err => ${err}`);
        toast.error("چنین کاربری وجود ندارد");
        swal({
          title: "چنین کاربری وجود ندارد",
          icon: "error",
          buttons: "تلاش دوباره",
        })
    })

    console.log(userData);
  };

  return (
    <>
      <TopBar />
      <Navbar />

      <section className="login-register">
        <div className="login">
          <span className="login__title">ورود به حساب کاربری</span>
          <span className="login__subtitle">
            خوشحالیم دوباره میبینیمت دوست عزیز :)
          </span>
          <div className="login__new-member">
            <span className="login__new-member-text">کاربر جدید هستید؟</span>
            <Link className="login__new-member-link" to="/register">
              ثبت نام
            </Link>
          </div>
          <form action="#" className="login-form">
            <div className="login-form__username">
              <Input
                className="login-form__username-input"
                id="username"
                type="text"
                placeholder="نام کاربری یا آدرس ایمیل"
                element="input"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(25),
                  // emailValidator(),
                ]}
                onInputHandler={onInputHandler}
              />
              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__password">
              <Input
                className="login-form__password-input"
                id="password"
                type="password"
                placeholder="رمز عبور"
                element="input"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(18),
                ]}
                onInputHandler={onInputHandler}
              />

              <i className="login-form__password-icon fa fa-lock-open"></i>
            </div>
            <Button
              className={`login-form__btn ${
                formState.isFormValid
                  ? "login-form__btn-error"
                  : "login-form__btn-success"
              }`}
              type="submit"
              onClick={loginUser}
              // disabled={!formState.isFormValid}
            >
              <i className="login-form__btn-icon fas fa-sign-out-alt"></i>
              <span className="login-form__btn-text">ورود</span>
            </Button>
            <div className="login-form__password-setting">
              <label className="login-form__password-remember">
                <input
                  className="login-form__password-checkbox"
                  type="checkbox"
                />
                <span className="login-form__password-text">
                  مرا به خاطر داشته باش
                </span>
              </label>
              <label className="login-form__password-forget">
                <a className="login-form__password-forget-link" href="#">
                  رمز عبور را فراموش کرده اید؟
                </a>
              </label>
            </div>
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

export default Login;
