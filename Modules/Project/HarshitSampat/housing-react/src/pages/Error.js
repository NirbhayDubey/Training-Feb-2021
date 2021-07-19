import React from 'react'
import Footer from "../components/Footer";

 const Error = () => {
    
    return (
      <>
        <div className="bg-danger">
          <h1 className="text-center mt-5 text-white">
            Sorry could Not found what you are looking for

            <h2 className="text-center mt-5"> 404 Page not found Error</h2>
          </h1>
          <a href="/">
           <h4 className="text-center text-light mt-5 mb-5"> Click here to revert Main page</h4>
          </a>
        </div>
        <Footer/>
      </>
    );
}

export default Error