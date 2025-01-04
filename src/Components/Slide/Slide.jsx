import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Pagination,
    Autoplay,
    EffectFade
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./Slide.scss";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Slide = ({ SlideImgs, imgClass, container, id, isSlideOpen }) => {
    const swiperRef = useRef(null); 

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper.autoplay.start(); 
        }
    }, []);

    return (
        <>
            <div className={"slide-page-container"}>
                <div className={container}>
                    <div className="slide-content-container">
                        {SlideImgs && SlideImgs.length > 0 && (
                            <Swiper
                                ref={swiperRef} 
                                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                                centeredSlides={true}
                                key={id + isSlideOpen}
                                loop={true}
                                slidesPerView={1}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false, 
                                }}
                                effect="fade"
                                speed={1200}
                                pagination={{
                                    clickable: true,
                                    el: `.swiper-pagination-${id}`,
                                }}
                                navigation={{
                                    nextEl: `.swiper-button-next-${id}`,
                                    prevEl: `.swiper-button-prev-${id}`,
                                }}
                            >
                                {SlideImgs.map((img) => (
                                    <SwiperSlide key={img.id}>
                                        <div className="slide-container">
                                            <img className={imgClass} src={img.img} alt="" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}

                        <div className={`swiper-button-next-${id} slide-button1`}>
                            <MdKeyboardArrowRight />
                        </div>
                        <div className={`swiper-button-prev-${id} slide-button2`}>
                            <MdKeyboardArrowLeft />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Slide;
