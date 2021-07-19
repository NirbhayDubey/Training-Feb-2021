import React , {Component} from 'react'
import Book from './components/Book/book'
import Banner from './components/header/Banner'
import bookData from './components/bookData/bookdata'
import './App.css'

// second method 
// import * as data from './data.js'
/*export default function BookList() {
  return (
    <div>
    <h1>this is my content</h1>
    <h1>Hello {data.name}</h1>
    <h1>my age {data.age}</h1>
    <h1> {data.person.name}</h1>
    </div>
  )
}*/

// use function
/*export default function BookList() {
  return (
    <div>
    <h1>this is my content</h1>
    <h1>Hello {data.name}</h1>
    <h1>my age {data.age}</h1>
    <h1> {data.person.name}</h1>
    </div>
  )
}*/

// use class
class BookList extends Component {
  constructor(props){
    super(props)
    this.state = {
    books : bookData
      };
  }
  
  render() {
    /*const book = this.state.books.map((item) => item.title)
    console.log(book)*/
    // use method to iterating
    // filter
    // map
    // foreach
    // reduce
    return (
      <section>
        <Banner/>
        {this.state.books.map((item,index) => (
          <Book key={item.id} info = {item}/>
        ))}
      </section>
    )
  }
}

