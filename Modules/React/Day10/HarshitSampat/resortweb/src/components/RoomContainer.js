import React from "react";
import RoomsFilter from "./RoomFilter.js";
import RoomList from "./RoomList.js";
import { withRoomConsumer } from "../context";
import Loading from "./Loading.js";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
        <RoomsFilter rooms={rooms}></RoomsFilter>
        <RoomList rooms={sortedRooms}></RoomList>
    </>
  );
}

export default withRoomConsumer(RoomContainer);

// export default function RoomContainer() {
//   return (<>
//       <RoomConsumer>
//         {
//             (value) =>{
//                  const {loading,sortedRooms,rooms} = value
//                  if ( loading ){
//                      return<Loading></Loading>
//                  }
//                 return (
//                   <div>
//                     Hello from rooms-conatainer
//                     <RoomsFilter rooms={rooms}></RoomsFilter>
//                     <RoomList rooms={sortedRooms}></RoomList>
//                   </div>
//                 );
//             }
//         }
//       </RoomConsumer>

//     </>
//   );
// }
