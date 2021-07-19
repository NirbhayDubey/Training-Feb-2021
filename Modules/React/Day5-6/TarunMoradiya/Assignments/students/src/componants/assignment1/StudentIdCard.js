import React, { Component } from "react";

export default class studentIdCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      showInfo: false,
    };
  }

  render() {
    const {
      children,
      student: {
        img,
        personal: { id, fname, lname, dob },
        college: { name, addr, logo },
      },
      deleteStudent,
    } = this.state.props;

    return (
      <div className="w-50 p-2">
        <div className="card text-center bg-warning">
          <div className="card-header bg-warning">
            <button
              className="btn btn-outline-danger float-right"
              onClick={() => deleteStudent(id)}
            >
              x
            </button>
            <Image img={img} />
          </div>
          <div className="card-body">
            {children}
            <div className="student-info text-left">
              <Personal
                className="card-text"
                id={id}
                fname={fname}
                lname={lname}
                dob={dob}
              />
              <College
                className="card-text"
                name={name}
                addr={addr}
                logo={logo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Image = ({ img }) => {
  const url = `https://randomuser.me/api/portraits/men/${img}.jpg`;
  return <img src={url} alt="img" className="img-fluid student-img" />;
};

const Personal = ({ id, fname, lname, dob }) => {
  return (
    <section className="student-data p-2">
      <p>ID: {id}</p>
      <p>Name: {fname + " " + lname}</p>
      <p>DOB: {dob}</p>
    </section>
  );
};

const College = ({ name, addr, logo }) => {
  return (
    <section className="college-data p-2  clearfix">
      <img className="img-fluid college-logo" src={logo} alt="logo" />
      <p>College: {name}</p>
      <p>Address: {addr}</p>
    </section>
  );
};
