import "./Login.scss";
import loginImg from "/aaSchool.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [inputUsername, setInputUsername] = useState();
  const [inputPassword, setInputPassword] = useState();
  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: inputUsername,
          password: inputPassword,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Giriş Başarılı!", data);
        navigate("/admin");
        localStorage.setItem("isLogin" , JSON.stringify(true));
      } else {
        window.Error(data.message);
        alert("Giriş Bilgileri Hatalı")
      }
    } catch (error) {
      console.error("Giriş hatası:", error);
      window.Error("Bir hata oluştu");
    }
  };
  
  const setUsername = (e) => {
    setInputUsername(e.target.value);
  }

  const setPassword = (e) => {
    setInputPassword(e.target.value);
  }

  return (
    <>
      <div className="login-container">
        <div className="login-img-container">
          <img src={loginImg} alt="" className="login-img" />
        </div>
        <div className="login-form-container">
          <h3 className="login-title"> Hoşgeldiniz </h3>
          <div className="login-input-container">
            <p className="login-input-p"> Kullanıcı Adı </p>
            <input type="text" onChange={(e) => setUsername(e)} className="login-input" />
          </div>
          <div className="login-input-container">
            <p className="login-input-p"> Şifre </p>
            <input type="password" onChange={(e) => setPassword(e)}  className="login-input" />
          </div>
          <button onClick={() => loginUser()} className="login-button"> Giriş Yap </button>
        </div>
      </div>
    </>
  )
}

export default Login;