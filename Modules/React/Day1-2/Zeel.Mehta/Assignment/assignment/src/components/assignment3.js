// 3. Store above example info javascript variable and then display dynamically, Display FullName variable 
// in respective Component

import React from 'react';


function assignment3() {
     
    return (
        <section className="d-flex justify-content-center">
            <StudentIDCard />
        </section>
    );
}
const StudentIDCard = () =>
    <article className="border border-3 border-dark rounded ">
    <Collage />
        <div className="container ">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3  bg-info bl-0">
                    <Image />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 bg-warning">

                </div>
                <div className="col-lg-7 col-md-7 col-sm-7 ">
                    <Person />
                </div>
            </div>
        </div>   
    </article>

const Image = () => 
    <img 
    width = "150" height="150"
    src = "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" 
    alt="wonkey donkey" />

function Person () {
    var id=1
    var firstName = "Jaymin"
    var lastName = "Prajapati"
    var dob = "05/02/1999"
  return(  
        
        <div className="pt-4">
        <b>ID : </b> {id} <br />
        <b>FirstName : </b>{firstName} <br />
        <b>LastName : </b>{lastName }<br />
        <b>DOB : </b>{dob} <br />
    </div>
  );
}
function Collage() {
    var cName = "College University"
    var address = "Ahmedabad"
    var link = "https://image.freepik.com/free-vector/campus-collage-university-education-logo-design-template_7492-59.jpg"

    return (
        
        <div className ="container p-3">
        <div className="col-lg-12 ">
            <div className = "row">
                <div className="col-lg-9 col-md-9 col-sm-9 bg-warning">
                    <h2>{cName}</h2>
                    <h5 class="text-secondary">{address}</h5>
                </div>
                <div className="  col-lg-3 col-md-3 col-sm-3 bg-danger" >
                    <img width = "90" src = {link} alt = "book" />        
                </div>                       
            </div>
        </div>
    </div>
    )    
}

export default assignment3;