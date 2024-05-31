import { Map, Marker } from 'pigeon-maps'
import React from 'react'

const MapHotel = ({lat,lon}) => {
  return (
    <Map center= {[+lat,+lon]} width={'100%'} height={300} >
            <Marker
            width={50}
            anchor={[+lat,+lon]}
            color='blue'
            />
    </Map>
  )
}

export default MapHotel