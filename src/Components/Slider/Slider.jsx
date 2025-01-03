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

const Slide = ({ SlideImgs, imgClass, container, id }) => {

    const [centered, setCentered] = useState(false);

    const handleImageClick = () => {
        setCentered(true);
    };

    return (
        <>
            <div className={"slide-page-container"}>
                <div className={container}>

                    <div className="slide-content-container ">
                        {SlideImgs && SlideImgs.length > 0 && (
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
                                    nextEl: `.swiper-button-next-${id}`,
                                    prevEl: `.swiper-button-prev-${id}`,
                                }}
                                navigation={{
                                    el: `.swiper-pagination-${id}`,
                                    clickable: true,
                                }}
                            >
                                {
                                    SlideImgs.map((img) => (
                                        <SwiperSlide key={img.id}>
                                            <div className="slide-container">
                                                <img className={imgClass} src={img.img} key={img.id} alt="" />
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        )}
                        
                        <div className={`swiper-button-next-${id} slide-button`}>
                            <p style={{opacity:0}}> next </p>
                        </div>  
                        <div className={`swiper-button-prev-${id} slide-button`}>
                         <p style={{opacity:0}}> prev </p>
                        </div>
                
                    </div>
                </div>

            </div>
        </>
    );
}

export default Slide;
