import React from "react";
import { useState } from "react";
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

const Slide = ({ SlideImgs, imgClass, key, container }) => {

    const [centered, setCentered] = useState(false);

    const handleImageClick = () => {
        setCentered(true);
    };


    return (
        <>
            <div className={`slide-page-container  ${centered ? 'centered' : ''}`}>
                <div className={container}>
                    <div className="slide-content-container fade-in">
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

                                clickable: true,
                            }}
                        >
                            {
                                SlideImgs.map((img) => (
                                    <SwiperSlide key={key}>
                                        <div className="slide-container">
                                            <img className={imgClass} src={img} onClick={handleImageClick} alt="" />
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>

                        <div className="navigation-buttons">
                            {/* <div className="button-next-slide">
                                <MdKeyboardArrowRight />
                            </div>
                            <div className="button-prev-slide">
                                <MdKeyboardArrowLeft />
                            </div> */}
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Slide;
