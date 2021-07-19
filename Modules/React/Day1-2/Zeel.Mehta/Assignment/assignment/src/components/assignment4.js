// 4. Call StudentID Card component 3 times and pass different student data using props.

import React from 'react';


function assignment4() {
     
  return (
    <section >
            <StudentIDCard />
        </section>
  );
}
const StudentIDCard = () =>
 

 <div className="container ">
  <div className="row ">
    <div className="col-lg-4 col-md-7 col-sm-7 col-12 border border-3 border-dark rounded ">
    <Person1 />
    </div>
    <div className="col-lg-4 col-md-7 col-sm-7 col-12 border border-3 border-dark rounded">
    <Person2 />
    </div>
    <div className="col-lg-4 col-md-7 col-sm-7 col-8 border border-3 border-dark rounded">
        <Person3 />
    </div>
    </div>
</div>   



const Image = (props) => 
  <div className="float-left">
    <img 
    width = "140" height="140"
    src = {props.img} 
    alt="person" />
  </div>


   const Collage = (props) => {
        
        return (
                <div className = "row p-3">
                    <div className="col-lg-9 col-md-9 col-sm-9 bg-warning">
                        <h4>{props.cname}</h4>
                        <h5 class="text-secondary">{props.address}</h5>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 bg-danger" >
                        <img  width = "80" src = {props.logo} alt = "book" />        
                    </div>                       
            </div>
        )    
    }

const People = (props) =>{
  console.log(props);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  return (    
      <div className="pt-4">
        <b>ID : </b> {props.id} <br />
        <b>FirstName : </b>{props.fname} <br />
        <b>LastName : </b>{props.lname}<br />
        <b>DOB : </b>{props.dob} <br />
      </div>
  );
}



  function Person1(){
    let img="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
    id="1",
    fname="Jhon",
    lname="Doe",
    dob="05/02/1999", 
    cname="Gujarat University", 
    address="Ahmedabad",
    logo="https://image.freepik.com/free-vector/campus-collage-university-education-logo-design-template_7492-59.jpg";
    return (
      <div >
        <Collage cname={cname} address={address} logo={logo} />
         {/* <div className="container "> */}
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3  ">
                <Image img={img} />
                </div>
                <div className="col-lg-2  col-md-2 col-sm-2">

                </div>
                <div className="col-lg-7 col-md-7 col-sm-5 col-4">
                <People id={id} fname={fname} lname={lname} dob={dob} />
                </div>
            </div>
        </div>   
      // </div>
    )
  }
  function Person2(){
    let img="https://iconape.com/wp-content/png_logo_vector/user-circle.png",
    id="2",
    fname="Bob",
    lname="Doe",
    dob="25/12/2000", 
    cname="Calcutta University", 
    address="Calcutta",
    logo="https://www.pngjoy.com/pngm/967/11187374_kolkata-knight-riders-logo-official-calcutta-university-logo.png";
    return (
      <div >
        <Collage cname={cname} address={address} logo={logo} />
         {/* <div className="container "> */}
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3  ">
                <Image img={img} />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 ">

                </div>
                <div className="col-lg-7 col-md-7 col-sm-7 pl-5">
                <People id={id} fname={fname} lname={lname} dob={dob} />
                </div>
            </div>
        </div>   
      // </div>
    )
  }
  function Person3(){
    let img="http://reserverecruitment.co.za/images/usericon.png",
    id="3",
    fname="Susy",
    lname="Doe",
    dob="15/08/1998", 
    cname="Delhi University", 
    address="Delhi",
    logo="https://image.freepik.com/free-vector/campus-collage-university-education-logo-design-template_7492-60.jpg";
    return (
      <section >
        <Collage cname={cname} address={address} logo={logo} />
         {/* <div className="container "> */}
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3  ">
                <Image img={img} />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2">

                </div>
                <div className="col-lg-7 col-md-7 col-sm-7 ">
                <People id={id} fname={fname} lname={lname} dob={dob} />
                </div>
            </div>
        {/* </div>    */}
      </section>
    )
  }
export default assignment4;