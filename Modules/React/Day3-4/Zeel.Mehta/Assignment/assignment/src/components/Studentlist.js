import React, { Component } from 'react';
import Student from './Student';


export default class Studentlist extends Component {
    state = {
        students : [
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
        },
        {img:"https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
            id:"4",
            fname:"Jack",
            lname:"Doe",
            dob:"26/01/1997", 
            cname:"Gujarat University", 
            address:"Ahmedabad",
            logo:"https://image.freepik.com/free-vector/campus-collage-university-education-logo-design-template_7492-59.jpg"
        },
        {img:"https://iconape.com/wp-content/png_logo_vector/user-circle.png",
            id:"5",
            fname:"Oliver",
            lname:"Doe",
            dob:"2/09/2000", 
            cname:"Calcutta University", 
            address:"Calcutta",
            logo:"https://www.pngjoy.com/pngm/967/11187374_kolkata-knight-riders-logo-official-calcutta-university-logo.png"
        }
        ]
    };
    // this.setState({})
    render() {
        const students = this.state.students.map(item => item.id);
        console.log(students);
        // filter
        // forEach
        // map
        // reduce

        return (
            <section>
                <h3>This is our Studentlist</h3>
                {/* <div className="col-lg-4">
                <div className="row"> */}
                    
                    {this.state.students.map((item) => (
                     <Student key = {item.id} info = {item} />
                ))}
                    {/* </div>
                </div> */}
            </section>
        )
    }
}
