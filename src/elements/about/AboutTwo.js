import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const AboutTwo = () => {
  return (
    <div className="rwt-about-area about-style-2 rn-section-gap">
      <div className="container">
        <div className="row row--30 align-items-center">
          <div className="col-lg-5">
            <div className="thumbnail">
              <img
                className="w-100"
                src="./images/about/about-1.jpeg"
                alt="About Images"
              />
            </div>
          </div>

          <div className="col-lg-7 mt_md--30 mt_sm--30">
            <div className="content">
              <div className="section-title">
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                >
                  <h4 className="subtitle">
                    <span className="theme-gradient">MEET SEUN DEDE.</span>
                  </h4>
                  {/* <h2 className="title mt--10">About Our Business.</h2> */}
                </ScrollAnimation>

                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                >
                  <p>
                    Minister Seun Dede, whose full name is Ekoko Oritseseundede
                    Weyinmi Isaac, was born on September 20th in the mid-90s at
                    an RCCG clinic in Lagos suburbs. He is a Christian
                    Singer/Songwriter, Gospel Minister/Recording Artiste,
                    Multi-Instrumentalist, Record Producer and Music Director
                    who has Impacted many lives with his ministry, his worship
                    expressions and his heart of servitude.
                  </p>
                  <br />
                  <p>
                    He started music early and is known today for his mastery
                    and creativity in Worshipping God and leading people in
                    worship at christian programs with encounters and wonders
                    following. He mastered multiple instruments and became part
                    of the senior choir at Foursquare Magboro. In 2012, Minister
                    Seun Dede ventured into music production and songwriting. He
                    is the convener of Worship God and Worship in the room
                    alongside many blessed expressions hosted under his
                    ministry, Worship Global Network.
                  </p>
                  <br />
                  <p>
                    Seun Dede featured in world wide trending live spontaneous
                    worship session with Yinka Okeleye and Sunmisola Agbebi, and
                    he has shared kingdom platforms,featuring in many kingdom
                    expressions with notable gospel ministers, He has released
                    different sounds with power and scriptural backing, His
                    singles "Receive" and "Eku Ise" gained popularity, trending
                    on Spotify and Apple Music upon release. He released an
                    album titled This Worshipper's Journey in 2024 and many
                    blessed sounds of worship are credited with his name
                  </p>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                >
                  {/* <div className="read-more-btn mt--40">
                    <Link className="btn-default btn-icon" to="#">
                      More About Us{" "}
                      <i className="icon">
                        <FiArrowRight />
                      </i>
                    </Link>
                  </div> */}
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
