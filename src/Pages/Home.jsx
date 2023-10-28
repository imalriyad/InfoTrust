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
      <WhyChoose></WhyChoose>
      <Blog></Blog>
      <Testimonial></Testimonial>
      <TeamSlider></TeamSlider>
      <Trasnsaction></Trasnsaction>
      <Faq></Faq>
 
    </div>
  );
};

export default Home;
