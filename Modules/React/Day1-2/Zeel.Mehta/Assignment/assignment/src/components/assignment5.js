// // 4. Call StudentID Card component 3 times and pass different student data using props.

import React from 'react';


function assignment5() {
     
    return (
        <section className="students2">
            <StudentIDCard />
        </section>
    );
}
const StudentIDCard = () =>
<div className="container ">
<div className="row ">
  <div className="col-lg-4 col-md-7 col-sm-7 col-12 border border-3 border-dark rounded ">
  <Person />
  </div>
  </div>
</div>


const Image = ({image: { img}}) => 
  <img 
    width = "140" height="140"
    src = {img} 
    alt="person" />


   const Collage = ({collage: { cname, address, logo}}) => {
        
        return (
            // <div >
            // <b>Collage Name : </b>{cname}
            // <p><b>Address : </b>{address}</p>
            // <img 
            //     width = "100"
            //     src=  {logo}          
            //     alt="Collage logo" />
            // </div>
            <div className = "row p-3">
            <div className="col-lg-9 col-md-9 col-sm-9 bg-warning">
                <h4>{cname}</h4>
                <h5 class="text-secondary">{address}</h5>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 bg-danger" >
                <img  width = "80" src = {logo} alt = "book" />        
            </div>                       

    </div>
        )    
    }

const People = ({people: { id, fname, lname, dob }}) =>{
  // console.log(props);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  return (
    
    <div className="pt-4">
        <b>ID : </b> {id} <br />
        <b>FirstName : </b>{fname} <br />
        <b>LastName : </b>{lname}<br />
        <b>DOB : </b>{dob} <br />
      </div>
  );
}



  function Person(){
   const student = [ 
   {img:"https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
    id:"1",
    fname:"Jhon",
    lname:"Doe",
    dob:"05/02/1999", 
    cname:"Gujarat University", 
    address:"Ahmedabad",
    logo:"https://image.freepik.com/free-vector/campus-collage-university-education-logo-design-template_7492-59.jpg"
   },
   {img:"https://iconape.com/wp-content/png_logo_vector/user-circle.png",
    id:"2",
    fname:"Bob",
    lname:"Doe",
    dob:"25/12/2000", 
    cname:"Calcutta University", 
    address:"Calcutta",
    logo:"https://www.pngjoy.com/pngm/967/11187374_kolkata-knight-riders-logo-official-calcutta-university-logo.png"
   },
   {img:"http://reserverecruitment.co.za/images/usericon.png",
    id:"3",
    fname:"Susy",
    lname:"Doe",
    dob:"15/08/1998", 
    cname:"Delhi University", 
    address:"Delhi",
    logo:"https://image.freepik.com/free-vector/campus-collage-university-education-logo-design-template_7492-60.jpg"
   }
  ]
    return (
      <section>
        
         <div >
         <Collage collage = {student[0]} />
         {/* <div className="container "> */}
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3  ">
                <Image image={student[0]}/>
                </div>
                <div className="col-lg-2  col-md-2 col-sm-2">

                </div>
                <div className="col-lg-7 col-md-7 col-sm-5 col-4">
                <People people = {student[0]} />
                </div>
            </div>
        </div>

        <div >
         <Collage collage = {student[1]} />
         {/* <div className="container "> */}
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3  ">
                <Image image={student[1]}/>
                </div>
                <div className="col-lg-2  col-md-2 col-sm-2">

                </div>
                <div className="col-lg-7 col-md-7 col-sm-5 col-4">
                <People people = {student[1]} />
                </div>
            </div>
        </div>

        <div >
         <Collage collage = {student[2]} />
         {/* <div className="container "> */}
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3  ">
                <Image image={student[2]}/>
                </div>
                <div className="col-lg-2  col-md-2 col-sm-2">

                </div>
                <div className="col-lg-7 col-md-7 col-sm-5 col-4">
                <People people = {student[2]} />
                </div>
            </div>
        </div>
      </section>
    )
  }
  
export default assignment5;

// 4. Call StudentID Card component 3 times and pass different student data using props.

// import React from 'react';


// function assignment4() {
     
//   return (
//     <section >
//             <StudentIDCard />
//         </section>
//   );
// }
// const StudentIDCard = () =>
 

//  <div className="container ">
//   <div className="row">
//     <div className="col-lg-5 col-md-5 col-sm-5 border border-1">
//     <Person1 />
//     </div>
    
//     </div>
// </div>   



// const Image = (props) => 
//   <div className="float-left">
//     <img 
//     width = "140" height="140"
//     src = {props.img} 
//     alt="person" />
//   </div>


//    const Collage = (props) => {
        
//         return (
            
//             <div className ="row">
//                     <div className="col-lg-9 col-md-9 col-sm-9 bg-warning">
//                         <h4>{props.cname}</h4>
//                         <h5 class="text-secondary">{props.address}</h5>
//                     </div>
//                     <div className="col-lg-3 col-md-3 col-sm-3 bg-danger" >
//                         <img  width = "80" src = {props.logo} alt = "book" />        
//                     </div>                       
//         </div>
//         )    
//     }

// const People = (props) =>{
//   console.log(props);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
//   return (    
//       <div className="pt-4">
//         <b>ID : </b> {props.id} <br />
//         <b>FirstName : </b>{props.fname} <br />
//         <b>LastName : </b>{props.lname}<br />
//         <b>DOB : </b>{props.dob} <br />
//       </div>
//   );
// }



//   function Person1(){
//     let img1="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
//     id1="1",
//     fname1="Jhon",
//     lname1="Doe",
//     dob1="05/02/1999", 
//     cname1="Gujarat University", 
//     address1="Ahmedabad",
//     logo1="https://image.freepik.com/free-vector/campus-collage-university-education-logo-design-template_7492-59.jpg";
    
//     let img2="https://iconape.com/wp-content/png_logo_vector/user-circle.png",
//     id2="2",
//     fname2="Bob",
//     lname2="Doe",
//     dob2="25/12/2000", 
//     cname2="Calcutta University", 
//     address2="Calcutta",
//     logo2="https://www.pngjoy.com/pngm/967/11187374_kolkata-knight-riders-logo-official-calcutta-university-logo.png";
   
//     let img3="http://reserverecruitment.co.za/images/usericon.png",
//     id3="3",
//     fname3="Susy",
//     lname3="Doe",
//     dob3="15/08/1998", 
//     cname3="Delhi University", 
//     address3="Delhi",
//     logo3="https://image.freepik.com/free-vector/campus-collage-university-education-logo-design-template_7492-60.jpg";
   
//     return (
//       <div >
//         <Collage cname={cname1} address={address1} logo={logo1} />
//          {/* <div className="container "> */}
//             <div className="row">
//                 <div className="col-lg-3 col-md-3 col-sm-3  ">
//                 <Image img={img1} />
//                 </div>
//                 <div className="col-lg-2  col-md-2 col-sm-2">

//                 </div>
//                 <div className="col-lg-7 col-md-7 col-sm-5 col-4">
//                 <People id={id1} fname={fname1} lname={lname1} dob={dob1} />
//                 </div>
//             {/* </div> */}
//         </div>   
//         <Collage cname={cname2} address={address2} logo={logo2} />
//          {/* <div className="container "> */}
//             <div className="row">
//                 <div className="col-lg-3 col-md-3 col-sm-3  bg-info">
//                 <Image img={img2} />
//                 </div>
//                 <div className="col-lg-2 col-md-2 col-sm-2">

//                 </div>
//                 <div className="col-lg-7 col-md-7 col-sm-7 ">
//                 <People id={id2} fname={fname2} lname={lname2} dob={dob2} />
//                 {/* </div> */}
//             </div>
//         </div>
//         <Collage cname={cname3} address={address3} logo={logo3} />
//          {/* <div className="container "> */}
//             <div className="row">
//                 <div className="col-lg-3 col-md-3 col-sm-3  ">
//                 <Image img={img3} />
//                 </div>
//                 <div className="col-lg-2 col-md-2 col-sm-2">

//                 </div>
//                 <div className="col-lg-7 col-md-7 col-sm-7 ">
//                 <People id={id3} fname={fname3} lname={lname3} dob={dob3} />
//                 </div>
//             {/* </div> */}
//         </div>
//       </div>
//     )
//   }
  
// export default assignment4;