import "./ResponsiveHeader.scss";
import Navbar from "../Navbar/Navbar";
import background from "/aafcl-class22.jpg";
import rocket from "/rocket.png";
import education from "/education.png";
import hammers from "/hammer.png";
import technology from "/virtual.png";

const ResponsiveHeader = () => {
    return (
        <>
            <Navbar />
            <div className="responsive-header-container">
                <div className="responsive-header-content-container">
                    <div className="responsive-header-info-container">
                        <h1 className="responsive-header-title"> Geleceğin Sınıfına <br /> Hoşgeldiniz! </h1>
                        <p className="responsive-header-p">
                            Geleceğin sınıflarını bugünden inşa ederek, öğrencilerin potansiyellerini en üst düzeye çıkarmayı hedefliyoruz.
                            Teknolojik yenilikler ve yaratıcı çözümlerle eğitim dünyasında devrim yaratmaya odaklanıyoruz.
                            İşte FCL'nin odak alanları :
                        </p>
                        <div className="responsive-header-icons-container">
                            <div className="responsive-header-p-icon-container">
                                <img src={rocket} alt="" className="responsive-header-icon" />
                                <p className="responsive-header-icon-p"> Yaratıcı Çözümler </p>
                            </div>
                            <div className="responsive-header-p-icon-container">
                                <img src={hammers} alt="" className="responsive-header-icon" />
                                <p className="responsive-header-icon-p"> Uygulamalı Eğitimler </p>
                            </div>
                            <div className="responsive-header-p-icon-container">
                                <img src={technology} alt="" className="responsive-header-icon" />
                                <p className="responsive-header-icon-p"> Teknolojik Yenilikler </p>
                            </div>
                            <div className="responsive-header-p-icon-container">
                                <img src={education} alt="" className="responsive-header-icon" />
                                <p className="responsive-header-icon-p"> Geleceğin Eğitimi </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="responsive-header-background-container">
                    <img src={background} className="responsive-header-background" alt="" />
                </div>
            </div>
        </>
    )
}

export default ResponsiveHeader;