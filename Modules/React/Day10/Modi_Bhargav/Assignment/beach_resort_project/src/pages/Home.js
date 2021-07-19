import React from "react";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import Services from "../component/Services";
import FeaturedRoom from "../component/FeaturedRoom";
import Button from "../component/StyledHero";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRoom />
      {/* <Button>Hello</Button> */}
    </>
  );
}
