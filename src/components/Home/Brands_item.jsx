"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
const Brands_item = ({ data }) => {
  return (
    <div className="h-20 overflow-hidden ">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {data?.map((item) => (
          <SwiperSlide key={item?.id}>
            <Image
              alt={item["name"]}
              src={item?.image}
              width={1000}
              height={750}
              priority
              className=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands_item;
