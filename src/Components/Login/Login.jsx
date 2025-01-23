import "./Login.scss";
// import loginImg from "/şuaafcl-school.jpg";
import loginImg from "/aaSchool.jpg";

const Login = () => {
    return(
      <>
        <div className="login-container">
             <div className="login-img-container">
                <img src={loginImg} alt="" className="login-img" />
             </div>
             <div className="login-form-container">
                <h3 className="login-title"> Hoşgeldiniz </h3>
                <div className="login-input-container">
                    <p className="login-input-p"> Kullanıcı Adı </p>
                    <input type="text" className="login-input" />
                </div>
                <div className="login-input-container">
                    <p className="login-input-p"> Şifre </p>
                    <input type="text" className="login-input" />
                </div>
                <button className="login-button"> Giriş Yap </button>
             </div>
        </div>
      </>
    )
}

export default Login;