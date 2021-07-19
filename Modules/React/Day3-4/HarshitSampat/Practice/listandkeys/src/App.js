import React from "react";

//practice 1 How transform list in javascript

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);

const ListItems = numbers.map((number) => <li>{number}</li>);

//Keys
// const todoItems = todos.map((todo)=>
// <li key = {todo.id}>
//   {todo.txt}
// </li>
// );  

// // when we have not stable ids
// const todoItems = todos.map((todo,index)=>
// <li key={index}>
//   {todo.text}
//   </li>
//   );

//extraacting Component with keys
function ListItem(props){
  //no need to specify  key overhere
  return <li>{props.value}</li>
}

//Basic list component
export function NumberList(props) {
  const numbers = props.numbers;
  //
  const listnames = numbers.map((number) => <ListItem key={number.toString()}value={number}/>);
  return (
    <ul>
      <li>{listnames}</li>
    </ul>
  );
}



//Keys must only Be unique Among Sibilings
function Blog(props){
  const sidebar =(
    <ul>
      {props.posts.map((post)=>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) => 
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{posts.content}</p>
    </div>
  );
  return (
    <div>
        {sidebar  }
      <hr/>
      {content}
      </div>
  )
  
}

const posts = [
  {id:1, title:'Hello World', content:'Welcome to Harshit\'s blog'},
  {id:2, title:'Story of lockdown', content:'You can read whole story over here'}
];

console.log(doubled);
export default function App() {
  return (
    <div>
      <div>
        {doubled}
        {ListItems}
      </div>
      <div>
        <NumberList numbers={numbers} />
      </div>
      <div>
        <Blog posts = {posts}/>
        </div>
    </div>
  );
}
