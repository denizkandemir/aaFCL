import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.scss";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import {
    Navigation,
    Pagination,
    Autoplay,
    EffectFade
} from "swiper/modules";
import SlideImgs from "../../objects/SlideImgs";

const Slide = () => {

    return (
        <>
            <div className="slide-page-container fade-in">
                <div className="slide-all-container">
                    <div className="slide-title-container">
                        <div className="project-titles-container">
                            <h5 className="project-little-title"> Galeri </h5>
                            <h2 className="slide-title"> Okulumuza ait <br /> Future Classroom Lab  </h2>
                        </div>
                        <p className="slide-text"> Fotoğraflarla Future Classroom Lab’in yaratıcı, iş birlikçi ve ilham verici atmosferine tanıklık edin </p>
                    </div>
                    <div className="slide-content-container">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay, EffectFade]}
                            centeredSlides={true}
                            slidesPerView={1}
                            spaceBetween={30}
                            effect={'fade'}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            speed={2000}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={{
                                nextEl: ".button-next-slide",
                                prevEl: ".button-prev-slide",
                            }}
                            onSwiper={(swiper) => {
                                console.log("Swiper initialized:", swiper);
                            }}
                        >
                        {
                            SlideImgs.map((img) => (
                            <SwiperSlide key={img.id}>
                                <div  className="slide-container">
                                    <img className="slide-1" src={img.img} alt="" />
                                </div>
                             </SwiperSlide>
                            ))
                        }
                        </Swiper>

                        <div className="navigation-buttons">
                            <div className="button-next-slide">
                                <MdKeyboardArrowRight />
                            </div>
                            <div className="button-prev-slide">
                                <MdKeyboardArrowLeft />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Slide;
