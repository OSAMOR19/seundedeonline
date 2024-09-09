import React from "react";
import Slider from "react-slick";
import { slickDot } from "../../utils/script";

const TestimonialData = [
  {
    form: "Lagos",
    description:
      "Working with SEUN DEDE has been an absolute honor. His mastery over multiple instruments is astounding, and his passion for music is evident in every note he plays. Beyond his technical skill, what truly sets him apart is his ability to bring a spiritual depth to every performance. He doesnt just play music—he channels it from a higher place, and you can feel that energy every time he takes the stage. A true gift to anyone fortunate enough to collaborate with him.",
    name: "Pastor Joshua Banjo",
    // subtitle: "App Developer",
    image: "Person-4",
  },
  {
    form: "Lagos",
    description:
      "I’ve had the pleasure of experiencing [Your Friend’s Name] live on several occasions, and each time I’m blown away. His talent is undeniable, but what’s even more remarkable is the way he connects with his audience on a spiritual level. It’s not just music; it’s an experience that leaves you feeling uplifted and inspired. You can sense the divine in every melody he plays.",
    name: "Minister Yinka Okeleye",
    // subtitle: "App Developer",
    image: "Person-2",
  },
  {
    form: "Lagos",
    description:
      "Their anointed ministration brought revival to our midst, rekindling flames of faith and fueling a renewed commitment to sharing the Gospel.",
    name: "Minister, Moses Bliss",
    // subtitle: "App Developer",
    image: "Person-3",
  },
];
const TestimonialThree = ({ teamStyle }) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <Slider
          className="slick-space-gutter--15 rn-slick-dot rn-slick-arrow mb--60"
          {...slickDot}
        >
          {TestimonialData.map((data, index) => (
            <div key={index} className={`testimonial-style-two ${teamStyle}`}>
              <div className="row align-items-center row--20">
                <div className="order-2 order-md-1 col-lg-6 col-md-8 offset-lg-1">
                  <div className="content mt_sm--40">
                    <span className="form">{data.form}</span>
                    <p className="description">{data.description}</p>
                    <div className="client-info">
                      <h4 className="title">{data.name}</h4>
                      <h6 className="subtitle">{data.subtitle}</h6>
                    </div>
                  </div>
                </div>
                <div className="order-1 order-md-2 col-lg-4 col-md-4">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src={`./images/testimonial/${data.image}.jpg`}
                      alt="Corporate React Template"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default TestimonialThree;
