import React from "react";
import { Element } from "react-scroll";
import { Link as LinkScroll } from "react-scroll";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32"
    >
      <Element name="hero">
        <div className="container flex flex-row items-center justify-between max-md:flex-row max-md:space-x-4">
          {/* Left Content */}
          <div className="relative z-2 w-1/2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              Video Editing
            </div>
            <h1
              className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2
               max-md:mb-4 max-md:text-5xl max-md:leading-12"
            >
              Amazingly Simple
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              We designed TRAILIX AI Video Editor to be an easy to use, quick to
              learn, and surprisingly powerful.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Try it now</Button>
            </LinkScroll>
          </div>

          {/* Right Image */}
          <div className="w-1/2 max-w-md lg:max-w-lg flex justify-end">
            <img
              src="/images/HeroTry.png"
              className="w-full h-auto object-contain"
              alt="hero image"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
