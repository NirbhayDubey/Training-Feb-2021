import React, { Component } from 'react'
import Tour from "../Tour"
import "./tourlist.scss"
import {Citys} from "../../Tourdata"

export default class TourList extends Component {
    state = {
        tours : Citys
    };

    removeTour = id =>{
        const {tours} = this.state;
        const sortedTours = tours.filter((tour) => tour.id !== id)
        this.setState({
            tours : sortedTours
        })
    }

    render() {
        const {tours} = this.state;
        return (
            <section className="tourlist">
                {
                    tours.map(tour => (<Tour key={tour.id} tour={tour} removeTour= {this.removeTour}></Tour>))
                }
            </section>
        )
    }
}
