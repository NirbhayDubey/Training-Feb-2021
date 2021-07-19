import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import FormInput from "./components/FormInput";
import CardData from "./components/cardData";

const storeCards = [];

const App = () => {
  const [cards, setCards] = useState(storeCards);
  const [student, setStudent] = useState({
    id: uuidv4(),
    Img: "",
    Logo: "",
    enrollNumber: "",
    firstName: "",
    lastName: "",
    DOB: "",
    Gender: "",
    placeOfBirth: "",
    collegeName: "",
    Location: "",
    editItem: false,
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeImg = (e) => {
    setStudent({
      ...student,
      [e.target.name]: URL.createObjectURL(e.target.files[0]),
    });
  };

  const onChangeLogo = (e) => {
    setStudent({
      ...student,
      [e.target.name]: URL.createObjectURL(e.target.files[0]),
    });
  };

  const clearList = () => {
    setCards([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = {
      id: uuidv4(),
      Img: student.Img,
      Logo: student.Logo,
      enrollNumber: student.enrollNumber,
      firstName: student.firstName,
      lastName: student.lastName,
      DOB: student.DOB,
      Gender: student.Gender,
      placeOfBirth: student.placeOfBirth,
      collegeName: student.collegeName,
      Location: student.Location,
    };
    setCards([...cards, studentData]);
    setStudent({
      id: uuidv4(),
      Img: "",
      Logo: "",
      enrollNumber: "",
      firstName: "",
      lastName: "",
      DOB: "",
      Gender: "",
      placeOfBirth: "",
      collegeName: "",
      Location: "",
      editItem: false,
    });
  };

  const handleEdit = (id) => {
    const filterData = cards.filter((item) => item.id !== id);
    const selectedItem = cards.find((item) => item.id === id);
    setCards(filterData);
    setStudent({
      Img: selectedItem.Img,
      Logo: selectedItem.Logo,
      enrollNumber: selectedItem.enrollNumber,
      firstName: selectedItem.firstName,
      lastName: selectedItem.lastName,
      Gender: selectedItem.Gender,
      DOB: selectedItem.DOB,
      placeOfBirth: selectedItem.placeOfBirth,
      collegeName: selectedItem.collegeName,
      Location: selectedItem.Location,
      id: id,
      editItem: true,
    });
  };

  const handleDelete = (id) => {
    const sortData = cards.filter((item) => item.id !== id);
    setCards(sortData);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5">
          <h3
            className="text-capitilize text-center bg-success mt-1 text-Info"
            style={{ border: "2px solid black" }}
          >
            Student Form
          </h3>
          <FormInput
            student={student}
            handleChange={handleChange}
            handleImg1={onChangeImg}
            handleLogo2={onChangeLogo}
            handleSubmit={handleSubmit}
            editItem={student.editItem}
          />
          <CardData
            cards={cards}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            clearList={clearList}
          />
        </div>
      </div>
    </div>
  );
};
export default App;
