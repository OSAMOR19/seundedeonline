import React from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import AccordionOne from "../accordion/AccordionOne";

const mission = () => {
  return (
    <div className="rn-company-mission-are rn-section-gap">
      <div className="container">
        <div className="row row--30">
          <div className="col-lg-6">
            <div className="mission-title">
              <h2 className="title">
                MINISTERATIONS <br />{" "}
                {/* <Typed className="theme-gradient"
                                    strings={[
                                        "Consulting.",
                                        "Vission.",
                                        "Agency.",
                                    ]}
                                    typeSpeed={80}
                                    backSpeed={5}
                                    backDelay={1000}
                                    loop
                                /> */}
              </h2>
              <p>Dearly Beloved,</p>
              <p>
                Greetings in the name of our Lord Jesus Christ and thank you for
                considering Minister Seun Dede to come for your special program.
              </p>
              <p>
                We are always thrilled and honoured to join you in worship. To
                aid preparation for your upcoming program, we have compiled this
                ministerial guideline document to ensure clarity and seamless
                coordination for an uplifting and spiritually enriching
                experience.
              </p>
              <p>
                This document covers various aspects of hosting us at your
                program, from pre-event communication to on-site logistics and
                post-event follow-up. Our goal is to foster open communication,
                collaboration, and a shared commitment to giving the people an
                awesome worship experience.
              </p>
              <p>
                As you peruse this document, you will find details on how we can
                work together to enhance the overall experience for your
                congregation. From technical requirements to the flow of
                worship, we aim to align our efforts with the vision of your
                church, ensuring a harmonious and blessed event. We appreciate
                your careful consideration of these guidelines and look forward
                to partnering with you in bringing the transformative power of
                the gospel through worship.
              </p>
{/* 
              <div className="read-more-btn mt--50">
                <Link className="btn-default btn-icon" to="#">
                  Learn More{" "}
                  <i className="icon">
                    <FiArrowRight />
                  </i>
                </Link>
              </div> */}
            </div>
          </div>
          <div className="col-lg-6 mt_md--30 mt_sm--30">
            <AccordionOne customStyle="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default mission;
