import React, { Component } from 'react'
import Book from "./Book"
import booksdata from "./bookdata"

export default class Booklist extends Component {
    constructor(props){
        super(props)
        this.state = {
            books : booksdata
        }
    }
    render() {
//        const books = this.state.books
        return (
            <div>
                <h2>this is a booklist</h2>
                {this.state.books.map((item)=> <Book key={item.book} book={item}/>)}
            </div>
        )
    }
}

