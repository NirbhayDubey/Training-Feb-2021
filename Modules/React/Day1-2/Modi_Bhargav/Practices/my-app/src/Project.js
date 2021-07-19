function Books(){
  return(
  <section className="books">
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
  </section>
  )
}

const Book = () => {
  return (
  <article className="book">
  <CoverImage/>
  <Title/>
  <Author/>
  </article>
  )
}

const CoverImage = () => {
  return (
  <img width="150" heigth="150" src="https://m.media-amazon.com/images/I/51QyOJtK0xS.jpg" alt="books"/>
  )
}

const Title = () => <h1 style={{fontSize:"2rem",color:"blue"}}>The American</h1>

const authorStyle = {
  letterSpacing:"10px",
  color:"green"
}
const Author = () => <p style={authorStyle}>By Carig Smith</p>

export default Books;