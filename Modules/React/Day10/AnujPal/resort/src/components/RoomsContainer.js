import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { RoomConsumer } from "../context";
import Loading from "./../components/Loading";
import { withRoomConsumer } from "../context";

 function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      
      <RoomsFilter  rooms={rooms}></RoomsFilter>
      <RoomsList rooms={sortedRooms} ></RoomsList>
    </>
  );
}

export default withRoomConsumer(RoomsContainer);

