import React, { Component } from 'react'
import './tourlist.scss'
import Tour from '../Tour/tour'
import TourData from '../../tourData'


export default class TourList extends Component {
 state = {
  tours: TourData
 }

 removeTour = id => {
  const {tours} = this.state
  const sortTour = tours.filter(tour => tour.id !== id)
  this.setState({
   tours:sortTour
  })
 }
 render() {
  const {tours} = this.state
  return (
   <section className="tourlist">
     {tours.map(tour => (<Tour key={tour.id} tour = {tour} removeTour = {this.removeTour}/>))}
   </section>
  )
 }
}

