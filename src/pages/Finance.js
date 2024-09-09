import React from 'react';
import {Link} from "react-router-dom";
import SEO from "../common/SEO";
import HeaderTopNews from '../common/header/HeaderTopNews';
import HeaderTwo from '../common/header/HeaderTwo';
import FooterOne from '../common/footer/FooterOne';


import CalltoActionSix from "../elements/calltoaction/CalltoActionSix";
import ServiceOne from "../elements/service/ServiceOne";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import Separator from "../elements/separator/Separator";
import AboutTwo from "../elements/about/AboutTwo";
import SlipThree from "../elements/split/SlipThree";
import TestimonialOne from "../elements/testimonial/TestimonialOne";
import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from '../data/blog/BlogList.json';
import Mission from '../elements/about/Mission';
import TestimonialThree from '../elements/testimonial/TestimonialThree';
var BlogListData = BlogClassicData.slice(0, 3);



const Finance = () => {
    return (
        <>
            <SEO title="SEUN DEDE" />
            <main className="page-wrapper">
                {/* <HeaderTopNews /> */}
                <HeaderTwo btnStyle="btn-small" HeaderSTyle="header-not-transparent" />

                {/* Start Slider area  */}
                <div className="slider-area slider-style-5 bg-overlay-solid height-850 bg_image" data-black-overlay="3" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg-image-13.jpg)`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-start">
                                    <h4 className="subtitle">Christian Singer/Songwriter</h4>
                                    <h1 className="title display-one"> MEET <br />SEUN DEDE.</h1>
                                    {/* <div className="button-group mt--40 mt_sm--20">
                                        <a className="btn-default" target="_blank" href="https://themeforest.net/checkout/from_item/33571911?license=regular">BUY DOOB NOW</a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider area  */}


                {/* <CalltoActionSix /> */}
                <Separator />

                 {/* Start Service Area  */}
                 <div className="rn-service-area rn-section-gap ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Who am I"
                                    title = "Services & Capabilities."
                                    description = ""
                                    />
                            </div>
                        </div>
                        <ServiceOne 
                            serviceStyle = "service__style--1 bg-color-blackest radius mt--20 rbt-border"
                            textAlign = "text-start"
                            />
                    </div>
                </div>
                {/* End Service Area  */}

                <Separator />
                <AboutTwo />

                {/* Start Elements Area  */}
                <div className="rwt-split-area">
                    <div className="wrapper">
                        <Mission />
                    </div>
                </div>
                {/* End Elements Area  */}


                {/* Start Elements Area  */}
                <div className="rwt-testimonial-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Client Feedback"
                                    title = "."
                                    description = "We provide ministration service for <br /> events and gatherings."
                                />
                            </div>
                        </div>
                        <TestimonialThree teamStyle="" />
                    </div>
                </div>
                {/* End Elements Area  */}

                <Separator />
                {/* <div className="blog-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Latests News"
                                    title = "Our Latest News."
                                    description = ""
                                />
                            </div>
                        </div>
                        <div className="row row--15">
                            {BlogListData.map((item) => (
                                <div key={item.id} className="col-lg-4 col-md-6 col-12 mt--30">
                                    <BlogList StyleVar="box-card-style-default" data={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>  */}

                <FooterOne />
            </main>
        </>
    )
}

export default Finance;
