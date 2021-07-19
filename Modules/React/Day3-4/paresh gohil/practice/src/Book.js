import React, { Component } from 'react'

export default class Book extends Component {
    render() {
        const {img,bookname,author} = this.props.book
        return (
            <article className="book">
                <img src= {img} width="150" alt="book images"/>
                <div>
                    <h3>Title : {bookname}</h3>
                    <h5>Author : {author}</h5>
                </div>
            </article>
        )
    }
}
