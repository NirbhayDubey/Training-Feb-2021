import gitLogo from "../img/logo1.jpg";
import mitLogo from "../img/mit_logo.jpg";
import caliLogo from "../img/calilogo.png";


const Image = ({ img }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return <img src={url} alt="studentImage"></img>;
};

function PersonalInfo({ Id, firstname, lastName, DOB }) {
  return (
    <section>
      <p>ID:{Id}</p>
      <p>Name:{firstname + " " + lastName}</p>
      <p>DOB:{DOB}</p>
    </section>
  );
}

const College = ({ collegeName, addr, logo }) => {
  return (
    <section>
      <p>CollegeName: {collegeName}</p>
      <p>CollegeAddress:{addr}</p>
      <img src={logo} alt="logo" width="20"></img>
    </section>
  );
};

export const StudentIdCard = (props) => {
  const { children } = props;
  const { img } = props.student;
  const { Id, firstname, lastName, DOB } = props.student.personalInfo;
  const { collegeName, addr, logo } = props.student.college;

  return (
      
      <section>

        <Image img={img} />
        {children}
        <PersonalInfo
          Id={Id}
          firstname={firstname}
          lastName={lastName}
          DOB={DOB}
        />
        <College collegeName={collegeName} addr={addr} logo={logo} />

        <hr />
      </section>
    
  );
};

export const StudentDetails = [
  {
    img: 36,
    personalInfo: {
      Id: 1,
      firstname: "lol",
      lastName: "lol",
      DOB: "03/03/3333",
    },
    college: {
      collegeName: "GIT",
      addr: "MotiBhoyan",
      logo: gitLogo,
    },
  },
  {
    img: 37,
    personalInfo: {
      Id: 2,
      firstname: "John",
      lastName: "Doe",
      DOB: "01/02/1989",
    },
    college: {
      collegeName: "MIT",
      addr: "Cambridge",
      logo: mitLogo,
    },
  },
  {
    img: 38,
    personalInfo: {
      Id: 3,
      firstname: "Ramesh",
      lastName: "Parekh",
      DOB: "04/06/1945",
    },
    college: {
      collegeName: "california University",
      addr: "California",
      logo: caliLogo,
    },
  },
];

