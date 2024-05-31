import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import "./OtherHotels.css";
import HotelCard from "../HomePages/HotelCard";

const OtherHotels = ({city , id}) => {
    const [hotelsByCity , getHotelsByCity] = useFetch()

    useEffect(() => {
        if(city) {

            const url = `https://hotels-api.academlo.tech/hotels?cityId=${city?.id}`
        getHotelsByCity(url)
        }
        
    } , [city])

    
  return (
    <section>
        <h3>Other Hotels in <span className="other_city">{city?.country}</span></h3>

        <div  className='cards'>
            {
                hotelsByCity?.filter(hotel =>  hotel.id !== Number(id)).map( hotel => (
                    <HotelCard 
                    key={hotel.id}
                    hotel={hotel}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default OtherHotels