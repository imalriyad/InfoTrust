import Blog from "../Blog/Blog";
import WhyChoose from "../Components/WhyChoose";
import Hero from "../Header/Hero";
import TeamSlider from "../Team/TeamSlider";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <WhyChoose></WhyChoose>
      <Blog></Blog>
      <Testimonial></Testimonial>
      <TeamSlider></TeamSlider>
    </div>
  );
};

export default Home;
