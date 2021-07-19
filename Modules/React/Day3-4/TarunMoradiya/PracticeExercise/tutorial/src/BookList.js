import React, { Component } from "react";
import Book from "./Book";

// export default class BookList extends Component {
//   books = [
//     {
//       book: "Book no 1",
//       auther: "John Doe",
//     },
//     {
//       book: "Book no 2",
//       auther: "Bobby Doe",
//     },
//   ];
//   render() {
//     return (
//       <section>
//         <h3>This is our book</h3>
//         <Book book ={this.books[0]} />
//       </section>
//     );
//   }
// }

// export default class BookList extends Component {
//   state = {
//     books: [
//       {
//         id: 1,
//         book: "Book no 1",
//         auther: "John Doe",
//       },
//       {
//         id: 2,
//         book: "Book no 2",
//         auther: "Bobby Doe",
//       },
//     ],
//   };
//   render() {
//     return (
//       <section>
//         <h3>This is our book</h3>
//         {this.state.books.map((item) => (
//           <Book key={item.id} info={item} />
//         ))}
//       </section>
//     );
//   }
// }

import bookData from "./bookData";
export default class BookList extends Component {
  // state = {
  //   books: bookData,
  // };

  constructor(props) {
    super(props);
    this.state = {
      books: bookData,
    };
  }
  render() {
    return (
      <section>
        <h3>This is our book</h3>
        {this.state.books.map((item) => (
          <Book key={item.id} info={item} />
        ))}
      </section>
    );
  }
}
