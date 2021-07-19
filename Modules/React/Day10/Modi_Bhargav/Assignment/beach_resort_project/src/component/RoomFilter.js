import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../component/Title";

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
export default function RoomFilter() {
  const context = useContext(RoomContext);
  const {
    rooms,
    handleChange,
    type,
    capacity,
    price,
    maxPrice,
    minPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;
  // get unique types
  let types = getUnique(rooms, "type");

  // add all
  types = ["all", ...types];

  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  // get unique capacity
  let people = getUnique(rooms, "capacity");

  // map to jsx
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            name="price"
            id="price"
            type="range"
            min={minPrice}
            max={maxPrice}
            value={price}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              name="minSize"
              id="size"
              type="number"
              value={minSize}
              className="size-input"
              onChange={handleChange}
            />
            <input
              name="maxSize"
              id="size"
              type="number"
              value={maxSize}
              className="size-input"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="single-extra">
            <input
              name="breakfast"
              id="breakfast"
              type="checkbox"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              name="pets"
              id="pets"
              type="checkbox"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
      </form>
    </section>
  );
}
