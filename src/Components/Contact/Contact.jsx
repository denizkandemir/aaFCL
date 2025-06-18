import "./Contact.scss";
import contactCards from "../../objects/contactCards";
import contactImgResponsive from "/aafcl-contact-img4.png";
import contactImg from "/aafcl-contact-img3.png";
import Banner from "../Banner/Banner";
import useFadeInOnScroll from "../../hooks/animation/Animation";

const Contact = () => {
    useFadeInOnScroll();
    return (
        <>
            <div className="contact-container">
                <Banner text={"Bizimle İletişime Geçin"} img={contactImg} responsiveImg={contactImgResponsive} location={"İletişim"} />
                <div className="contact-content-container fade-in">
                    <div className="contact-cards-content-container">
                        <div className="contact-cards-container">
                            {
                                contactCards.map((card) => (
                                    <div key={card.id} className="contact-card-wrapper">
                                        <div className="card-content">
                                            <div className="card-img-container">
                                                <img src={card.img} alt="" className="card-img" />
                                            </div>
                                            <div className="card-texts-container">
                                                <p className="card-p-title"> {card.text} </p>
                                                <a className="card-link" href={card.link} target="blank">
                                                    <p className="card-p"> {card.info} </p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="contact-map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6247.444579261259!2d27.183081855662294!3d38.47097220839127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b97d44b978adad%3A0x8661bb2a3156d522!2zxZ5laGl0IFV6bWFuIMOHYXZ1xZ8gQWxpIEFrZG_En2FuIMSwbGtva3VsdQ!5e0!3m2!1str!2str!4v1734363489869!5m2!1str!2str"
                                height="450"
                                style={{ border: 0 }}
                                className="contact-map"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;