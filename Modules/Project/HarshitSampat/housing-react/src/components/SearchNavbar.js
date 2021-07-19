import React from "react";
import{BsSearch} from 'react-icons/bs'
function SearchNavbar() {
  return (
    <>
      <div className="search-nav">
        <nav className="search-nav-nav">
          <a className="nav-buy" href="/buy/real-estate-ahmedabd">  
            Buy
          </a>
          <a className="nav-rent" href="/Rent">
            Rent
          </a>
          <a className="nav-pg-coliving" href="paying-guests/pgs-in-ahmedabd">
            PG/Coliving
          </a>
        </nav>
        <div className="search-div">
          <div cl assName="search-div1">
            <div className="input-container">
              <div>
                <input
                  placeholder="Ahmedabad"
                  className="search-bar search-bar-1"
                />
              </div>
            </div>
          </div>
          <div className="search-div2">
            <input
              placeholder="Search for locality,landmark,project or builder"
              className="search-bar search-bar-2"
            />
          </div>
          <button className="search-buttondiv">
            <BsSearch />
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchNavbar;
