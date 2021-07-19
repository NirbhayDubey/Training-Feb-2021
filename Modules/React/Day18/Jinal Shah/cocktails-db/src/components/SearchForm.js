import React from "react";

export default function SearchForm({ setSearchTerm }) {

   const searchValue = React.useRef("");

   React.useEffect(() => {
      searchValue.current.focus();
   }, []);


   const handleSubmit = (event) => {
      event.preventDefault();
   };
   const searchcocktail = () => {
      setSearchTerm(searchValue.current.value);
   };
   return (
      <section className="section">
         <h2 className="section-title">search cocktails</h2>
         <form className="form search-form" onSubmit={handleSubmit}>
            <div className="form-control">
               <label htmlFor="name">search your favorite cocktail</label>
               <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={searchcocktail}
                  ref={searchValue}
               />
            </div>
         </form>
      </section>
   );
}