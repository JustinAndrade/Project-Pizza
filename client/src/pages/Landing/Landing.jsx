import React from "react";
import Navigation from "../../components/navigation/navigation";
import Pizza from "../../assets/homepage.jpeg";

import "./landing.scss";

const Landing = () => {
  return (
    <>
      <Navigation />
      <div>
        <header>
          <div>
            <h2>
              Food Made With Love &amp; Passion
              <br />
              Family Owned Since 1989.
            </h2>
            <button>Our Menu</button>
          </div>
          <img alt="pizza" src={Pizza} />
        </header>
        <section className="ourStory">
          <img alt="pizza" src={Pizza} />

          <div>
            <h3>
              <span>Discover</span>
              Our Story
            </h3>
            <p>
              Get the best pizza experience at Lindens. Whether you're joining
              us for a quick bite, or ordering takeout to go, our premium and
              authentic pizza will deliver superior service and perfect dining
              experience.
            </p>
            <a>More About Us</a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Landing;
