import "./HeroSection.css";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../assets/prodImage1.jpg";
import image2 from "../../assets/prodImage2.jpg";
import image3 from "../../assets/prodImage3.jpg";
import image4 from "../../assets/prodImage4.jpg";
import image5 from "../../assets/prodImage5.jpg";
import image6 from "../../assets/prodImage6.jpg";

const HeroSection = () => {
  return (
    <div className="hero_section_wrapper">
      <Carousel fade controls indicators keyboard slide={true}>
        {[image1, image2, image3, image4, image5, image6].map((item) => {
          return (
            <Carousel.Item>
              <div className="hero_section_img_wrapper">
                <img src={item} alt="image for slide" />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default HeroSection;
