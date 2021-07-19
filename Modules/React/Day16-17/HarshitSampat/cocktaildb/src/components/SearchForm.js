import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = ({setSearchTerm}) => {

  const searchValue = React.useRef('');
  
  React.useEffect(()=>{
    searchVal
    ue.current.focus()
  },[] )

  const handleSubmit = (e)=>{
    e.preventDefault()
  }
  
const searchCocktail = ()=>{
  setSearchTerm(searchValue.current.value)
}

  return (
    <section className="section">
      <h2 className="section-title">search co cktails</h2>
      <form className="form search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favourite Cocktail</label>
          <input type="text" name="name" id="name" onChange={searchCocktail} ref={searchValue}/>
        </div>
      </form>

    </section>
  )
}

export default SearchForm
