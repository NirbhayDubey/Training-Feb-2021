import Image from "./Image";
import PersonalComponent from "./PersonalComponent";
import CollegeComponent from "./CollegeComponent";

export default function studentIdCard(props) {

  const { ID, src, fname, lname, DOB, srcc, collegeName, Address } = props.info;

  return (
    
    
    <div className="card">
    
      <div className="studentIdCard border border-secondary">
        <Image src={src}></Image>
        <PersonalComponent
          ID={ID}
          fname={fname}
          lname={lname}
          DOB={DOB}
    
        ></PersonalComponent>
        <hr className="bg-primary"/>
        <CollegeComponent
          srcc={srcc}
          collegeName={collegeName}
          Address={Address}
          // handleDelete={props.handleDelete}
          isTrue={props.isTrue}
          ID={ID}

        ></CollegeComponent>
        <button className="w-100 btn btn-danger" onClick={()=>props.handleDelete(ID)}>Delete</button>
      </div>
    </div>
  );
}


