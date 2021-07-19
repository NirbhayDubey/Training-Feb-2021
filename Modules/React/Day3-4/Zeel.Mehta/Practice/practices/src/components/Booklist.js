import React, { Component } from 'react';
import Book from './Book';
import Bookdata from './Bookdata';

export default class Booklist extends Component {
    constructor(props){
        super(props)
        this.state = {
            books : Bookdata
        }
    }

    handleDelete = id => {
        console.log(this.state.books);
        const sortedBooks = this.state.books.filter(item => item.id !== id);
        // console.log(sortedBooks);
        this.setState({
            books: sortedBooks
        })
    }

    // state = {
    //     books : [
    //         {
    //             id:1,
    //             book:'book number one',
    //             author:'John Doe'
    //         },
    //         {
    //             id:2,
    //             book:'book number two',
    //             author:'Bob Doe'
    //         },
    //         {
    //             id:3,
    //             book:'book number three',
    //             author:'Peter Doe'
    //         },
    //         {
    //             id:4,
    //             book:'book number four',
    //             author:'Susy Doe'
    //         },
    //         {
    //             id:5,
    //             book:'book number five',
    //             author:'Bobby Doe'
    //         }
    //     ]
    // };
    // this.setState({})
    render() {
        // const books = this.state.books.map(item => item.book);
        // console.log(books);
        // filter
        // forEach
        // map
        // reduce

        return (
        
            <div className="bg-secondary bg-gradient">
                <h3>This is our Booklist</h3>
                {this.state.books.map((item) => (
                     <Book key = {item.id} info = {item} handleDelete = {this.handleDelete}/>
                ))}
            </div> 
        )
    }
}
