const Image = ({ img }) => {
  const url = `https://randomuser.me/api/portraits/men/${img}.jpg`;
  return <img src={url} alt="img" className="img" />;
};

const Personal = ({ id, fname, lname, dob }) => {
  return (
    <section>
      <p>ID: {id}</p>
      <p>Name: {fname + " " + lname}</p>
      <p>DOB: {dob}</p>
    </section>
  );
};

const College = ({ name, addr, logo }) => {
  return (
    <section>
      <p>Name: {name}</p>
      <p>Address: {addr}</p>
      <img src={logo} alt="logo" />
    </section>
  );
};

const StudentIdCard = (props) => {
  const { children } = props;
  const { img } = props.student;
  const { id, fname, lname, dob } = props.student.personal;
  const { name, addr, logo } = props.student.college;
  return (
    <section>
      <Image img={img} />
      {children}
      <Personal id={id} fname={fname} lname={lname} dob={dob} />
      <College name={name} addr={addr} logo={logo} />
    </section>
  );
};

export default StudentIdCard;
