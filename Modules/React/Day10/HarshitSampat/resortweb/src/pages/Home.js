import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeturedRooms from "../components/FeturedRooms";


export default function Home() {
  return (
    <React.Fragment>
      <Hero>
        <Banner title="luxurious rooms" subtitle="delux rooms starting at $299">
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services></Services>
      <FeturedRooms></FeturedRooms>
      
    </React.Fragment>
  );
}
Hero.defaultProps = {
  hero: "defaultHero",
};
