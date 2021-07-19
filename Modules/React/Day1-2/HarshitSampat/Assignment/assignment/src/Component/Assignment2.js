// import logo files
import gitlogo from '../img/logo1.jpg'

const Image = () => {
  //const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <img src="https://randomuser.me/api/portraits/thumb/men/58.jpg" alt="studentImage"
    ></img>
  );
};

function PersonalInfo() {
  return (
    <section>
      <p>ID:1</p>
      <p>Name:Harshit Sampat</p>
      <p>DOB:03/03/99</p>
    </section>
  );
}

const College = () => {
  return (
    <section>
      <p>CollegeName: GIT</p>
      <p>CollegeAddress:Motibhoyan</p>
      <img src={gitlogo} alt="logo" width="100"></img><br/><br/>
    </section>
  );
};

const StudentIdCard = () => {
  return (
    <section>
        <h1>Assignment 2</h1><br/>
        <Image/>
      <PersonalInfo
      />
      <College/>
      <hr />
      <br/>
    </section>
    
  );
};

export default StudentIdCard