import React from "react";
import CardItem from "./cardItem";

const CardData = ({ cards, clearList, handleDelete, handleEdit }) => {
  return (
    <div class="row mt-5 justify-content-center">
      <h3 className="text-capitalize text-center text-white bg-dark">
        Students List
      </h3>

      {cards.map((item) => {
        return (
          <CardItem
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          >
            <h3>Students Info</h3>
          </CardItem>
        );
      })}

      <button
        type="button"
        className="btn btn-danger btn-block text-uppercase mt-5"
        onClick={clearList}
      >
        clear list
      </button>
    </div>
  );
};

export default CardData;
