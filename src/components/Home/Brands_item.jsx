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
    <div className="h-10 overflow-hidden ">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
          delay: 3000,
        }}
        breakpoints={{
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {data?.map((item) => (
          <SwiperSlide key={item?.id}>
            <div className={`flex  justify-center items-center w-full h-full`}>
              <Image
                alt={item["name"]}
                src={item?.image}
                width={1000}
                height={750}
                priority
                className="w-auto h-full"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEX/////bm4MAFj/e3v/bGz/xcX/ZmammrEAAE8AAFgAAFb/cG4zMGjkYmv1aW3yaG0yE1s3FVshC1kTA1nSWmmiRWTXXGoaB1n/xMT/dHTEVGjhYWu1TWbQWWldJl2/UmeqSWVDGltoK15SIV2bQmR4MmAoD1qCN2E5F1pIHVySPmLrZWzVancpLWjwb3QbAFAkImG+qbqtorerJA20AAAEMElEQVR4nO3Z2XbaMBSF4VhJ2grVQEJCBkozNGkzdH7/hysCQwBLsrCPxXbX/i96RRq+pXNsQw4OGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhj7L/p+PK4C10e1xZevetGV7WFh0dZFzo6pJBC9CikED8KKcSPQgrxo5BC/CikED8KKcSPQgrxgxMaI/wfQgmN6Z9dX0+MqBJIaAbnJz2tdU9/vsnkjDhCczvTqXla303FiDjC+6VvYTyXIsIIv6z5bL2HWGLF60CE5nELODvG6yiimVQMNIbQTEtApb/2Y34yH+mzIBFEuD2jc2LEKpr8dHZ9GodeiCEcO4BKn0QAR9pelkJECKF5cQmVnkQBLTEwqBjCe7fwNjymdkSXNxc/EUKYPbuF4RvGGzA4qBjCuxrC5YhWnSKG0HUprRCaXG38kJcIIfTt4Se/cH1Ew4OKITx3C18DwIvyQ5CbCCHMcuf98DkAHLkeEZyDiiF0jql/SF0n6CViCLO8V367T74Xl3cwNKggwvImaj3xHOH2VbSCCCLMzDe99VZvvEDXDvoHFUWYmYfNz/i+T4f+EfUQYYSZGQ8XX9TM/tX3g5rA8qDiCDNjpo9PI61Pn19y/1U0NKJOIpBw/m3wa54P/F+XxgAtcf2LDShhVdUj6tjFLgl9N/rwoHZIGDeipVPsjjD+BDeJnRHG7mBpULsiDD2qhU+xI8LdgaubRjeEu47o+inuR2hevU8tbuAuF5l14mwX9yI0g6H3s5ETGH+bKJ/iXoT92TP2KPoU657ggjg16YWmf2L/2HAaSay3g2/EcXKhHdH571ZRg1p/RAti73ti4RI4+90xg9oUqFTvR1qh6Q9X71hfVBKbjehC+DGpcLGD0UQBYGLh24gWxPAuNh/R5ML+cOsdaxU4xTqPavsVbo5oQfTfNCRGNK1we0QLom8Xm9zo9yN0A72DKrKDaYWlHVwRXacodYLphK4dXBHLuyi0gwmFvhEtiNs3DZmraEqh8Y7okrhximI7mEwYGtGCuL6LgiOaSFgN3CDKAlMIwzu4Ii53UXRE0wgrdvCNOD9FaWD7wpgRLYj2piE8ogmEcSNaEEcTuRt9KuEuQHu5mYoD2xZG7uCKqMWB7Qrjd7DF2hTuNqIdFFY9qiWqPSHEiKoWhSjA1oQYO2hrS4ixg7Z2hDAjqloS4oyoakcIBWxDCHIfXCYvRNpBm7gQa0SVvBBsRJW4EG1ElbQQbkSVsBARKCuE20GboBBwB21yQsgRVYJCvNtEkZQQdESVmBAXKCRE3UGbjBB1B20SQuARVSJC5BFVEkJwoIAQeQdtTYXYO2hrKEQfUdVUCPuotlYjIf6IqmbCrAvARkL8HbQ1EP789aET/a4t/PO+G/2tLWSMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDG4/gGB87JIiPfCQQAAAABJRU5ErkJggg=="
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands_item;
