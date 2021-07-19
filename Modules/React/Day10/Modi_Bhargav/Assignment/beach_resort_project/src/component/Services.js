import React, { Component } from "react";
import { FaCocktail, FaShuttleVan, FaBeer, FaHiking } from "react-icons/fa";
import Title from "../component/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, neque!",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, neque!",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, neque!",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, neque!",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
