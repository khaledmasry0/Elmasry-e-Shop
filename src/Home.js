import React from "react";
import Product from "./Product";
import { useRef, useState } from "react";
import { hairProducts, gaming, apple, mekup, foryou } from "./json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper";
import "swiper/css/bundle";
import k2 from "./images/k2.jpg";
import k3 from "./images/k3.jpg";
import i1 from "./images/i1.jpg";
import i2 from "./images/i2.jpg";
import home from "./images/home1.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={home} alt="" />
        <div className="home__row">
          <Product
            id="4903850"
            title="SAMSUNG Galaxy Watch5 Smart Watch, Health Monitoring, Fitness Tracker"
            price={199.99}
            rating={3}
            image={i2}
          />

          <Product
            id="3254354345"
            title="New iPad (10.2-inchiPadWi-Fi64GB-SpaceGrey)"
            price={598.99}
            rating={4}
            image={i1}
          />
        </div>
        <h1 className="titleOfSwiper">Apple</h1>
        <div className="home__row">
          <Swiper
            // spaceBetween={20}
            // slidesPerView={4}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 10 },
              480: { slidesPerView: 3, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
          >
            {apple.map((e, i) => {
              return (
                <SwiperSlide key={i}>
                  <Product
                    id={e.id}
                    title={e.title}
                    price={e.price}
                    rating={e.rating}
                    image={e.image}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <h1 className="titleOfSwiper">Hair Styling</h1>
        <div className="home__row">
          <Swiper
            // spaceBetween={20}
            // slidesPerView={3}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 10 },
              480: { slidesPerView: 3, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
          >
            {hairProducts.map((e, i) => {
              return (
                <SwiperSlide key={i}>
                  <Product
                    id={e.id}
                    title={e.title}
                    price={e.price}
                    rating={e.rating}
                    image={e.image}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <h1 className="titleOfSwiper">Gaming Tools</h1>
        <div className="home__row">
          <Swiper
            // spaceBetween={18}
            // slidesPerView={4}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 10 },
              480: { slidesPerView: 3, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
          >
            {gaming.map((e, i) => {
              return (
                <SwiperSlide key={i}>
                  <Product
                    id={e.id}
                    title={e.title}
                    price={e.price}
                    rating={e.rating}
                    image={e.image}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <h1 className="titleOfSwiper">Mekup</h1>
        <div className="home__row">
          <Swiper
            // spaceBetween={18}
            // slidesPerView={3}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 10 },
              480: { slidesPerView: 3, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
          >
            {mekup.map((e, i) => {
              return (
                <SwiperSlide key={i}>
                  <Product
                    id={e.id}
                    title={e.title}
                    price={e.price}
                    rating={e.rating}
                    image={e.image}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <h1 className="titleOfSwiper">For You</h1>
        <div className="home__row forYou">
          <Swiper
            className="sw"
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            // slidesPerView={4}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 10 },
              480: { slidesPerView: 3, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
            loop={true}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Autoplay]}
          >
            {foryou.map((e, i) => {
              return (
                <SwiperSlide key={i}>
                  <Product
                    id={e.id}
                    title={e.title}
                    price={e.price}
                    rating={e.rating}
                    image={e.image}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title="GDPETS Moon Lamp, 16 Colors Moon Night Light with Stand & Remote &Touch Control and USB Rechargeable Decorative Light Up Moon"
            price={11.96}
            rating={5}
            image={k2}
          />
          <Product
            id="49538094"
            title="LED Star Projector Night Light Amazing Lamp Master for Kids Bedroom Home Decoration"
            price={239.0}
            rating={4}
            image={k3}
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
