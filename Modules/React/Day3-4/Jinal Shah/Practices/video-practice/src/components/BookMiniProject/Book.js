import React, {Component} from 'react'

/* export default function Book(props) {
  return (
    <article>
      <h3>book : {props.book.book} </h3>
      <h5>author : {props.book.author}</h5>
    </article>
  )
} */

export default class Book extends Component {

  render() {
    const { img ,title, author } = this.props.info
    return (
      <article className="book">
        <img src={img} width="150" alt=""/>
        <div>
          <h4 >Title : {title} </h4>
          <h6 >Author : {author}</h6> 
        </div>
      </article>
    )
  }
}
