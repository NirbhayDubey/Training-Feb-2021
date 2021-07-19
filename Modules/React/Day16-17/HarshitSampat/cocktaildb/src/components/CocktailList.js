import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = ({cocktails,loading}) => {
  if(loading){
    return <h2 className ="section-title">Loading...</h2>
  }
  if(cocktails.length<1){
    return <h2 className ="section-title">No cocktails match your search criteria</h2>
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div>
        <div className="cocktails-center">
          {cocktails.map(item=>{
            return <Cocktail key={item.id} {...item}/>
          })}
        </div>
      </div>
    </section>
  )
}

export default CocktailList
