import React from "react";
import { FiActivity, FiCast, FiMap } from "react-icons/fi";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
  {
    icon: <FiActivity />,
    title: "Christian Singer/Songwriter",
    description:
      "As a Christian singer/songwriter I create and perform music that expresses my faith and spirituality, using my talents to inspire and uplift others providing hope, love, and redemption.",
  },
  {
    icon: <FiCast />,
    title: "Gospel Minister/Recording Artiste",
    description:
      "As a gospel minister/recording artiste I spread the word of God through music, using my voice and platform to minister to others and share the gospel message.",
  },
  {
    icon: <FiMap />,
    title: "Multi-Instrumentalist",
    description:
      "As a multi-instrumentalist I am a musician who can play multiple instruments, often performing and recording with various artists and bands. I bring versatility and creativity to music-making, able to adapt to different styles and genres with ease.",
  },
];

const ServiceOne = ({ textAlign, serviceStyle }) => {
  return (
    <div className="row row--15 service-wrapper">
      {ServiceList.map((val, i) => (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}
          >
            <div className={`service ${serviceStyle} ${textAlign}`}>
              <div className="icon">{val.icon}</div>
              <div className="content">
                <h4 className="title w-600">
                  <Link
                    to="#service"
                    dangerouslySetInnerHTML={{ __html: val.title }}
                  ></Link>
                </h4>
                <p
                  className="description b1 color-gray mb--0"
                  dangerouslySetInnerHTML={{ __html: val.description }}
                ></p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      ))}
    </div>
  );
};
export default ServiceOne;
