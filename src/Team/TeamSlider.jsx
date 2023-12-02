/* eslint-disable react/no-unescaped-entities */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export default function TeamSlider() {
  const prevButton = document.querySelector(".swiper-button-prev");
  const nextButton = document.querySelector(".swiper-button-next");

  if (prevButton) {
    prevButton.style.color = "#DAF985";
  }
  if (nextButton) {
    prevButton.style.color = "#DAF985";
  }

  return (
    <div className=" bg-black">
      <div className="mx-auto max-w-screen-xl md:px-10 px-4 py-4 md:py-14">
        <div className="md:space-y-7 py-10 space-y-4 text-white max-w-2xl mx-auto">
          {" "}
          <h1 className="font-bold md:text-5xl text-[32px] text-mainColor md:text-center">
            Our Top Investor
          </h1>
          <p className="text-sm md:text-base md:text-center text-left text-secondColor">
            Celebrating Customer Feedback: Explore Testimonials, Insights,
            Praise, and the Voice of our Valued Clients. Discover what people
            say about us and our unwavering commitment to excellence
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            768: {
              slidesPerView: 2, // Set slidesPerView for medium devices (e.g., screens wider than 768px)
              spaceBetween: 30, // You can adjust this space as needed
            },
            1024: {
              slidesPerView: 3, // Set slidesPerView for larger devices (e.g., screens wider than 1024px)
              spaceBetween: 60, // You can adjust this space as needed
            },
          }}
        >
          <SwiperSlide className="mx-auto">
            <div className="md:p-5 p-2 text-center bg-black border border-mainColor rounded-lg md:h-[450px] md:w-[400px] ">
              <img
                src="https://i.postimg.cc/0jnZGzw2/Adam-Robinson.jpg"
                className="rounded-lg  h-[240px] w-full object-cover"
                alt="" 
              />
              <h1 className="md:text-2xl text-white text-sm font-medium mt-6">
              Adam Robinson
              </h1>
              <p className="text-secondColor mt-1 md:text-base text-xs">
                Cypto Trader
              </p>
              <div className="flex justify-center mt-5 gap-2 items-center">
                <img
                  src="https://i.postimg.cc/PxRsZjBy/fb.png"
                  className="md:w-[40px]  w-[30px] cursor-pointer"
                  alt=""
                />
                <Link to={'https://www.instagram.com/retentionadam/'}><img
                  src="https://i.postimg.cc/gkPdKYxt/twitter.png"
                  className="md:w-[40px]  w-[30px] cursor-pointer"
                  alt=""
                /></Link>
                <Link to={'https://www.linkedin.com/in/retentionadam/'}><img
                  src="https://i.postimg.cc/FHNrh9mk/linkdin.png"
                  className="md:w-[40px]  w-[30px] cursor-pointer"
                  alt=""
                /></Link>
                <Link to={'https://twitter.com/RetentionAdam'}><img
                  src="https://i.postimg.cc/qM8Bftfd/insta.png"
                  className="md:w-[40px]  w-[30px] cursor-pointer"
                  alt=""
                /></Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="md:p-5 p-2 text-center bg-black border border-mainColor rounded-lg md:h-[450px] md:w-[400px]">
              <img
                src="https://i.postimg.cc/ZYxfzMMt/Dr-Paul.jpg"
                className="rounded-lg  h-[240px] w-full object-cover"
                alt="" 
              />
              <h1 className="md:text-2xl text-white text-sm font-medium mt-6">
              Dr. Paul
              </h1>
              <p className="text-secondColor mt-1 md:text-base text-xs">
                Doctor
              </p>
              <div className="flex justify-center mt-5 gap-2 items-center">
                <img
                  src="https://i.postimg.cc/PxRsZjBy/fb.png"
                  className="md:w-[40px]  w-[30px] cursor-pointer"
                  alt=""
                />
                <img
                  src="https://i.postimg.cc/gkPdKYxt/twitter.png"
                  className="md:w-[40px]  w-[30px] cursor-pointer"
                  alt=""
                />
                <Link to={'https://www.linkedin.com/in/paulcoceancig/'}><img
                  src="https://i.postimg.cc/FHNrh9mk/linkdin.png"
                  className="md:w-[40px]  w-[30px] cursor-pointer"
                  alt=""
                /></Link>
                <Link to={'https://www.instagram.com/drpaul_coceancig/'}><img
                  src="https://i.postimg.cc/qM8Bftfd/insta.png"
                  className="md:w-[40px]  w-[30px] cursor-pointer"
                  alt=""
                /></Link>
                
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="md:p-5 p-2 text-center bg-black border border-mainColor rounded-lg md:h-[450px] md:w-[400px]">
              <img
                src="https://i.postimg.cc/nLMsMKCn/Nigel-Thomas.jpg"
                className="rounded-lg  h-[240px] w-full object-cover"
                alt=""
              />
              <h1 className="md:text-2xl text-white text-sm font-medium mt-6">
              Nigel Thomas
              </h1>
              <p className="text-secondColor mt-1 md:text-base text-xs">
                Youtuber
              </p>
              <div className="flex justify-center mt-5 gap-2 items-center">
                <Link to={'https://www.facebook.com/NigelThomasAI'}><img
                  src="https://i.postimg.cc/PxRsZjBy/fb.png"
                  className="md:w-[40px]  w-[30px] cursor-pointer"
                  alt=""
                /></Link>
                <img
                  src="https://i.postimg.cc/gkPdKYxt/twitter.png"
                  className="md:w-[40px]  w-[30px] cursor-pointer"
                  alt=""
                />
                <Link to={'https://www.linkedin.com/in/nigelthomas-ai/'}><img
                  src="https://i.postimg.cc/FHNrh9mk/linkdin.png"
                  className="md:w-[40px]  w-[30px] cursor-pointer"
                  alt=""
                /></Link>
                <img
                  src="https://i.postimg.cc/qM8Bftfd/insta.png"
                  className="md:w-[40px]  w-[30px] cursor-pointer"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:p-5 p-2 text-center bg-black border border-mainColor rounded-lg md:h-[450px] md:w-[400px]">
              <img
                src="https://i.postimg.cc/sD9GLDkC/Nausheen-I-Chen.jpg"
                className="rounded-lg  h-[240px] w-full object-cover"
                alt=""
              />
              <h1 className="md:text-2xl text-white text-sm font-medium  mt-6">
              Nausheen I. Chen
              </h1>
              <p className="text-secondColor mt-1 md:text-base text-xs">
               Marketer
              </p>
              <div className="flex justify-center mt-5 gap-2 items-center">
                <img
                  src="https://i.postimg.cc/PxRsZjBy/fb.png"
                  className="md:w-[40px]  w-[30px] cursor-pointer"
                  alt=""
                />
                <Link to={'https://twitter.com/nausheenichen'}><img
                  src="https://i.postimg.cc/gkPdKYxt/twitter.png"
                  className="md:w-[40px]  w-[30px] cursor-pointer"
                  alt=""
                /></Link>
                <Link to={'https://www.linkedin.com/in/nausheenichen/'}><img
                  src="https://i.postimg.cc/FHNrh9mk/linkdin.png"
                  className="md:w-[40px]  w-[30px] cursor-pointer"
                  alt=""
                /></Link>
                <Link to={'https://www.instagram.com/nausheenichen/'}><img
                  src="https://i.postimg.cc/qM8Bftfd/insta.png"
                  className="md:w-[40px]  w-[30px] cursor-pointer"
                  alt=""
                /></Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:p-5 p-2 text-center bg-black border border-mainColor rounded-lg md:h-[450px] md:w-[400px]">
              <img
                src="https://i.postimg.cc/dVsZccFk/Alex-Hormozi.jpg"
                className="rounded-lg  h-[240px] w-full object-cover"
                alt=""
              />
              <h1 className="md:text-2xl text-white text-sm font-medium mt-6">
              Alex-Hormozi
              </h1>
              <p className="text-secondColor mt-1 md:text-base text-xs">
               Market Analyzer
              </p>
              <div className="flex justify-center mt-5 gap-2 items-center">
                <img
                  src="https://i.postimg.cc/PxRsZjBy/fb.png"
                  className="md:w-[40px]  w-[30px] cursor-pointer"
                  alt=""
                />
                <Link to={'https://twitter.com/AlexHormozi'}><img
                  src="https://i.postimg.cc/gkPdKYxt/twitter.png"
                  className="md:w-[40px]  w-[30px] cursor-pointer"
                  alt=""
                /></Link>
                <Link to={'https://www.linkedin.com/in/alexhormozi/'}><img
                  src="https://i.postimg.cc/FHNrh9mk/linkdin.png"
                  className="md:w-[40px]  w-[30px] cursor-pointer"
                  alt=""
                /></Link>
                <Link to={'https://www.instagram.com/hormozi/?hl=en'}><img
                  src="https://i.postimg.cc/qM8Bftfd/insta.png"
                  className="md:w-[40px]  w-[30px] cursor-pointer"
                  alt=""
                /></Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
