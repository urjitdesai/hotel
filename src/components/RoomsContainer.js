import React from 'react'
import RoomList from './RoomList'
import RoomFilter from './RoomFilter'
import {RoomConsumer} from '../context'
import Loading from './Loading'

export default function RoomsContainer() {
    return (

        <RoomConsumer>
            {
                (value) => {
                    const {loading, sortedRooms, rooms}= value                    
                    if(loading){
                        return <Loading></Loading>
                    }
                    return (
                        <div>
                        
                        <RoomFilter rooms={rooms}></RoomFilter>
                        <RoomList rooms={sortedRooms}></RoomList>
                        </div>

                    )
                }
            }
        </RoomConsumer>
        
    )
}
