import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const sliders = [1, 2, 3, 4, 5, 6,7];
  const name = ['Richard','Shashi','Abraham ','Joseph','Matthew','Scott','Gregory']
  const position = ['Supervisor','Manager','Marketer','Trader','Analyst','Dentist','Director']
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

  const review = (idx) => {
    if (idx === 0) {
      return "I am impressed with InvoTrust's performance. They have a simple and easy process and provide regular updates and reports"
    }
    else if(idx === 1){
      return "I invested in InvoTrust and I am very happy with the results. They are professional, and transparent, and offer competitive rates and terms.";
    }
    else if(idx === 2){
      return "InvoTrust is a great company to work with. They have a friendly and helpful team";
    }
    else if(idx === 3){
      return "They have a high success rate and pay me on time and in full. InvoTrust is smart and safe";
    }
    else if(idx === 4){
      return "I can't speak highly enough about InvoTrust! Their service is exceptional, and the entire process is refreshingly simple.";
    }
    else if(idx === 5){
      return "InvoTrust has exceeded my expectations in every aspect. The entire process is so effortlessly that it has made my experience truly enjoyable. ";
    }
    else if(idx === 6){
      return "Investing with InvoTrust has been a consistently excellent experience. Their professionalism and attention to detail set them apart.";
    }
  };

  const namefunc = (idx) => {
    if (idx === 0) {
      return name[0]
    }
    else if(idx === 1){
      return name[1]
    }
    else if(idx === 2){
      return name[2]
    }
    else if(idx === 3){
      return name[3]
    }
    else if(idx === 4){
      return name[4]
    }
    else if(idx === 5){
      return name[5]
    }
    else if(idx === 6){
      return name[6]
  }
  }
  const positionfunc = (idx) => {
    if (idx === 0) {
      return position[0]
    }
    else if(idx === 1){
      return position[1]
    }
    else if(idx === 2){
      return position[2]
    }
    else if(idx === 3){
      return position[3]
    }
    else if(idx === 4){
      return position[4]
    }
    else if(idx === 5){
      return position[5]
    }
    else if(idx === 6){
      return position[6]
  }
  }


  return (
    <div className="bg-black">
      <div className="md:space-y-7 px-4 py-10 space-y-4 text-white max-w-2xl mx-auto">
        {" "}
        <h1 className="font-bold md:text-5xl text-[32px] text-mainColor md:text-center">
          What People Says
        </h1>
        <p className="text-sm md:text-base md:text-center text-left  text-secondColor">
          Celebrating Customer Feedback: Explore Testimonials, Insights, Praise,
          and the Voice of our Valued Clients. Discover what people say about us
          and our unwavering commitment to excellence
        </p>
      </div>

      <div className="mx-auto max-w-screen-xl md:px-10 px-4 md:py-14 py-4">
        <Swiper {...settings}>
          {sliders.map((item,idx) => (
            <SwiperSlide
              key={item}
              style={{
                width: "320px",
              }}
            >
              <div className="border-mainColor border lg:w-96 h-[200px] w-full rounded-md p-5">
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
                    {namefunc(idx)}
                    </h1>
                    <p className="text-xs text-white">{positionfunc(idx)}</p>
                  </span>
                </div>
                <p className="text-secondColor italic font-normal md:text-sm text-xs py-5">
                  {review(idx)}
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
