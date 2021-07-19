import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = ({setSearchTerm}) => {

  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  },[])
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  return (
    <section className="section">
      <h2 className="section-title">search cocktails</h2>
      <form className="form search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input type="text" name="name" id="name" ref={searchValue} onChange={searchCocktail}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
