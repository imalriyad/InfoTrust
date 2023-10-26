import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const sliders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 768) {
        // Mobile devices
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        // Tablets
        setSlidesPerView(2);
      } else {
        // Large screens
        setSlidesPerView(3);
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => {
      window.removeEventListener("resize", updateSlides);
    };
  }, []);

  const settings = {
    slidesPerView,
    centeredSlides: false,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    pagination: {
      clickable: true,
    },

    modules: [Pagination],
    className: "mySwiper",
  };

  return (
    <div className="bg-black">
      <div className="md:space-y-7 py-10 space-y-4 text-white max-w-2xl mx-auto">
        {" "}
        <h1 className="font-bold md:text-5xl text-[32px] px-4 text-mainColor md:text-center">
          What People Says
        </h1>
        <p className="text-sm md:text-base md:text-center text-left px-4 text-secondColor">
          Celebrating Customer Feedback: Explore Testimonials, Insights, Praise,
          and the Voice of our Valued Clients. Discover what people say about us
          and our unwavering commitment to excellence
        </p>
      </div>

      <div className="mx-auto max-w-screen-xl md:px-10 px-4 md:py-14 py-4">
        <Swiper {...settings}>
          {sliders.map((item) => (
            <SwiperSlide
              key={item}
              style={{
                width: "320px",
              }}
            >
              <div className="border-mainColor border lg:w-96 w-full rounded-md p-5">
                <div className="flex gap-4 items-center">
                  <div className="h-12 w-12 shrink-0 cursor-pointer overflow-hidden rounded-full ">
                    <img
                      src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64"
                      loading="lazy"
                      alt="Photo by Brock Wegner"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <span className="flex flex-col">
                    <h1 className="text-lg font-medium text-white">
                      Jhone Doe
                    </h1>
                    <p className="text-xs text-white">CEO ,NETFLIX</p>
                  </span>
                </div>
                <p className="text-secondColor text-sm py-5">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text.
                </p>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-mainColor"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-mainColor"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-mainColor"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-mainColor"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-mainColor"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
