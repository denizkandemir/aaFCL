import "./Header.scss";
import Navbar from "../Navbar/Navbar";
import background from "/aafcl-background9.png";

const Header = () => {
    return (
        <>
            <div className="header-container">
             <Navbar />
                <div className="header-content-container">
                    <div className="header-info-container">
                        <h1 className="header-title"> Geleceğin Sınıfına <br /> Hoşgeldiniz! </h1>
                        <p className="header-p">
                        Teknolojik yenilikler ve yaratıcı çözümlerle eğitim dünyasında devrim yaratmaya odaklanıyoruz.
                        </p>
                        <p className="header-p"> 
                        Future Class Lab, teknolojiyi ve yaratıcılığı eğitimle buluşturan yenilikçi bir platformdur. Amacımız, bireylerin ve kurumların geleceğin öğrenme ihtiyaçlarına uygun şekilde hazırlanmasına destek olmaktır. Eğitimde teknolojinin gücünü kullanarak daha etkili, erişilebilir ve kapsayıcı çözümler sunuyoruz.
                        </p>
                    </div>  
                </div>
                <div className="header-background-container">
                    <img src={background} className="header-background" alt="" />
                </div>
            </div>
        </>
    )
}

export default Header;