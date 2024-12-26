import "./Header.scss";
import background from "/aafcl-background2.png";
import rocket from "/rocket.png";
import education from "/education.png";
import hammers from "/hammer.png";
import technology from "/virtual.png";
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";

const Header = () => {
    return (
        <>
            <div className="header-container">
                <HeaderNavbar />
                <div className="header-content-container">
                    <div className="header-info-container">
                        <h1 className="header-title"> Geleceğin Sınıfına <br /> Hoşgeldiniz! </h1>
                        <p className="header-p">
                            Geleceğin sınıflarını bugünden inşa ederek, öğrencilerin potansiyellerini en üst düzeye çıkarmayı hedefliyoruz.
                            Teknolojik yenilikler ve yaratıcı çözümlerle eğitim dünyasında devrim yaratmaya odaklanıyoruz.
                            İşte FCL'nin odak alanları :
                        </p>
                        <div className="header-icons-container">
                            <div className="header-p-icon-container">
                                <img src={rocket} alt="" className="header-icon" />
                                <p className="header-icon-p"> Yaratıcı Çözümler </p>
                            </div>
                            <div className="header-p-icon-container">
                                <img src={hammers} alt="" className="header-icon" />
                                <p className="header-icon-p"> Uygulamalı Eğitimler </p>
                            </div>
                            <div className="header-p-icon-container">
                                <img src={technology} alt="" className="header-icon" />
                                <p className="header-icon-p"> Teknolojik Yenilikler </p>
                            </div>
                            <div className="header-p-icon-container">
                                <img src={education} alt="" className="header-icon" />
                                <p className="header-icon-p"> Geleceğin Eğitimi </p>
                            </div>
                        </div>

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