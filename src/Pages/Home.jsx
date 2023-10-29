import Blog from "../Blog/Blog";
import Faq from "../Components/Faq";
import WhyChoose from "../Components/WhyChoose";
import Hero from "../Header/Hero";
import TeamSlider from "../Team/TeamSlider";
import Testimonial from "../Testimonial/Testimonial";
import Trasnsaction from "../Transaction/Trasnsaction";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Testimonial></Testimonial>
      <TeamSlider></TeamSlider>
      <Trasnsaction></Trasnsaction>
      <WhyChoose></WhyChoose>
      <Faq></Faq>
      <Blog></Blog>
    </div>
  );
};

export default Home;
