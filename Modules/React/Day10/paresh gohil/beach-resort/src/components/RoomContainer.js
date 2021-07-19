import React from 'react'
import RoomsFilter from "./RoomFilter"
import RoomsList from "./RoomList"
import {withRoomConsumer} from "../Context"
import Loding from "./Loading"


function RoomContainer({context}){
    const {loding,sortedRooms,rooms} = context
    if(loding){
        return <Loding />
    }
    return(
        <>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </>
    )
}

export default withRoomConsumer(RoomContainer)
// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             { (value) => {
//                 const {loding,sortedRooms,rooms} =value
//                 if(loding){
//                     return <Loding />
//                 }
//                 return(
//                     <div>
//                         hello from container
//                         <RoomsFilter rooms={rooms}/>
//                         <RoomsList rooms={sortedRooms}/>
//                     </div>
    
//                 )
//             }}

//         </RoomConsumer>
//     )
// }
