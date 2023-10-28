/* eslint-disable react/no-unescaped-entities */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

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
          <h1 className="font-bold md:text-5xl text-[32px] px-4 text-mainColor md:text-center">
            Our Top Investor
          </h1>
          <p className="text-sm md:text-base md:text-center text-left px-4 text-secondColor">
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
            <div className="md:p-5 p-2 text-center bg-black border border-mainColor rounded-lg md:h-[450px] md:w-[400px]">
              <img
                src="https://i.ibb.co/xjKCppZ/1.jpg"
                className="rounded-lg object-cover"
                alt="" 
              />
              <h1 className="md:text-2xl text-white text-sm font-medium mt-6">
               Elon Musk
              </h1>
              <p className="text-secondColor mt-1 md:text-base text-xs">
                Engine Expert
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
                <img
                  src="https://i.postimg.cc/FHNrh9mk/linkdin.png"
                  className="md:w-[40px]  w-[30px] cursor-pointer"
                  alt=""
                />
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
                src="https://i.ibb.co/zH3Ynt4/3.jpg"
                className="rounded-lg object-cover"
                alt=""
              />
              <h1 className="md:text-2xl text-white text-sm font-medium mt-6">
              Jeff Bezos
              </h1>
              <p className="text-secondColor mt-1 md:text-base text-xs">
                Engine Expert
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
                <img
                  src="https://i.postimg.cc/FHNrh9mk/linkdin.png"
                  className="md:w-[40px]  w-[30px] cursor-pointer"
                  alt=""
                />
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
                src="https://i.ibb.co/vv3WK8z/2.jpg"
                className="rounded-lg object-cover"
                alt=""
              />
              <h1 className="md:text-2xl text-white text-sm font-medium mt-6">
              Larry Ellison
              </h1>
              <p className="text-secondColor mt-1 md:text-base text-xs">
                Engine Expert
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
                <img
                  src="https://i.postimg.cc/FHNrh9mk/linkdin.png"
                  className="md:w-[40px]  w-[30px] cursor-pointer"
                  alt=""
                />
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
                src="https://i.ibb.co/DLxFD7Z/2.jpg"
                className="rounded-lg object-cover"
                alt=""
              />
              <h1 className="md:text-2xl text-white text-sm font-medium  mt-6">
              Bill Gates
              </h1>
              <p className="text-secondColor mt-1 md:text-base text-xs">
                Engine Expert
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
                <img
                  src="https://i.postimg.cc/FHNrh9mk/linkdin.png"
                  className="md:w-[40px]  w-[30px] cursor-pointer"
                  alt=""
                />
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
                src="https://i.ibb.co/yXk9GcG/2.jpg"
                className="rounded-lg object-cover"
                alt=""
              />
              <h1 className="md:text-2xl text-white text-sm font-medium mt-6">
              Mark Zuckerberg
              </h1>
              <p className="text-secondColor mt-1 md:text-base text-xs">
                Engine Expert
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
                <img
                  src="https://i.postimg.cc/FHNrh9mk/linkdin.png"
                  className="md:w-[40px]  w-[30px] cursor-pointer"
                  alt=""
                />
                <img
                  src="https://i.postimg.cc/qM8Bftfd/insta.png"
                  className="md:w-[40px]  w-[30px] cursor-pointer"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
