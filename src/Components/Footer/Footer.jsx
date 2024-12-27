import "./Footer.scss";
import okulLogo from "/aafcl-logo-okul.png";
import fclLogo from "/fcl-logo.png";
import bakanlıkLogo from "/bakanlık-logo.png";
import contactCards from "../../objects/contactCards";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-logo-content-container">
          <div className="footer-logos-container">
            <div className="logo-texts-container">
              <img src={bakanlıkLogo} className="logo" alt="" />
              <div className="texts-container">
                <p className="ministery-text"> T.C Milli Eğitim <br /> Bakanlığı </p>
              </div>
            </div>

            <div className="logo-texts-container">
              <img src={okulLogo} className="logo" alt="" />
              <div className="texts-container">
                <p className="school-text"> Şehit Uzman <br /> Çavuş Ali Akdoğan İlköğretim Okulu </p>
              </div>

            </div>
            <div className="logo-texts-container">
              <img src={fclLogo} className="logo" alt="" />
              <div className="texts-container">
                <p className="fcl-text"> Future <br /> Classroom Lab </p>
                <p className="fcl-bottom-text"> By European Schoolnet </p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-content-container">
          <div className="footer-content-container">
            <div className="footer-contact-svg-container">
              <h3 className="footer-title"> İletişim </h3>
              {
                contactCards.map((info) => (
                  <div key={info.id} className="footer-wrapper">
                    {info.svg}
                    <Link className="footer-link" to={info.link}>
                      <p className="footer-p"> {  info.info} </p>
                    </Link>
                  </div>
                ))
              }
            </div>
            <div className="footer-menu-container">
              <h3 className="footer-title"> Menü </h3>
              <Link className="footer-link" to={"/fclNedir"}> <p className="footer-p"> FCL Nedir </p> </Link>
              <Link className="footer-link" to={"/öğrenmeAlanlarımız"}> <p className="footer-p"> Öğrenme Alanlarımız </p></Link>
              <Link className="footer-link" to={"/etkinliklerimiz"}><p className="footer-p"> Etkinliklerimiz </p></Link>
              <Link className="footer-link" to={"/iletişim"}><p className="footer-p"> İletişim  </p></Link>
            </div>
            <div className="footer-menu-container footer-middle">
              <h3 className="footer-title"> Bağlantılar </h3>
              <a className="footer-link" target="blank" href="https://www.meb.gov.tr"> <p className="footer-p"> Milli Eğitim Bakanlığı </p> </a>
              <a className="footer-link" target="blank" href="https://fclturkiye.eba.gov.tr"> <p className="footer-p"> FCL Türkiye  </p></a>
              <a className="footer-link" target="blank" href="https://www-eun-org.translate.goog/professional-development/future-classroom-lab?_x_tr_sch=http&_x_tr_sl=en&_x_tr_tl=tr&_x_tr_hl=tr&_x_tr_pto=tc"><p className="footer-p"> European Schoolnet </p></a>
            </div>
            
            <div className="footer-menu-container">
            <h3 className="footer-title"> Okulumuzun Projeleri </h3>
              <a className="footer-link" target="blank" href="https://sehituzmancavusaliakdogan2g.weebly.com/#"> <p className="footer-p"> Kodluyoruz   </p> </a>
              <a className="footer-link" target="blank" href="https://sehituzmancavusaliakdoganilkokul.meb.k12.tr/meb_iys_dosyalar/35/29/970299/icerikler/listele_okullar-hayat-olsun.html?CHK=ed2ce0d02fd2d046bda134503c60b858r"> <p className="footer-p"> Okullar Hayat Olsun  </p></a>
              <a className="footer-link" target="blank" href="https://sehituzmancavusaliakdoganilkokul.meb.k12.tr/icerikler/tabletten-sanat-atolyelerine_6048839.html"><p className="footer-p"> EkoSchool </p></a>
              <a className="footer-link" target="blank" href="https://sehituzmancavusaliakdoganilkokul.meb.k12.tr/meb_iys_dosyalar/35/29/970299/dosyalar/2018_12/06110102_ekookullar.pdf?CHK=ed2ce0d02fd2d046bda134503c60b858"> <p className="footer-p"> Sorunlarımızdan Sorumluyuz Projesi  </p></a>

            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;