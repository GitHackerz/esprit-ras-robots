'use client'

import Image from 'next/image'
import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import { Autoplay } from 'swiper/modules'

const SponsorsSection = () => {
    return (
        <section className="sponsor-container">
            <h1>Our Trusted Sponsors & Partners</h1>
            <span />
            <div className="sponsor-cards">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    modules={[Autoplay]}
                    className="mySwiper"
                    loop={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false
                    }}
                >
                    <SwiperSlide>
                        <Image
                            src="/assets/ieee/SB_W.webp"
                            alt="SB"
                            width={200}
                            height={0}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/assets/ieee/RAS_W.webp"
                            alt="SB"
                            width={200}
                            height={0}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/assets/ieee/SB_W.webp"
                            alt="SB"
                            width={200}
                            height={0}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/assets/ieee/RAS_W.webp"
                            alt="SB"
                            width={200}
                            height={0}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/assets/ieee/SB_W.webp"
                            alt="SB"
                            width={200}
                            height={0}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/assets/ieee/RAS_W.webp"
                            alt="SB"
                            width={200}
                            height={0}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/assets/ieee/SB_W.webp"
                            alt="SB"
                            width={200}
                            height={0}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/assets/ieee/RAS_W.webp"
                            alt="SB"
                            width={200}
                            height={0}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default SponsorsSection
