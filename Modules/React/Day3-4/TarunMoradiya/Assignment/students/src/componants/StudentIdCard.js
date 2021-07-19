import React, { Component } from "react";

export default class studentIdCard extends Component {
  constructor(props) {
    super(props);
    this.state = { props: props };
  }
  render() {
    const {
      children,
      student: {
        img,
        personal: { id, fname, lname, dob },
        college: { name, addr, logo },
      },
    } = this.state.props;
    console.log(this.state);
    return (
      <div className="card w-25 my-2 p-2 text-center">
        <Image className="card-img-top" img={img} />
        {children}
        <Personal
          className="card-text"
          id={id}
          fname={fname}
          lname={lname}
          dob={dob}
        />
        <College className="card-text" name={name} addr={addr} logo={logo} />
      </div>
    );
  }
}

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
