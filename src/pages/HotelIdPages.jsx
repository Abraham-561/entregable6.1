import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "./slices/css/HotelIdPages.css";
import OtherHotels from "../components/HotelIdPages/OtherHotels";
import MapHotel from "../components/HotelIdPages/MapHotel";
import FormReservervation from "../components/HotelIdPages/FormReservervation";
import SliderImgs from "../components/HotelIdPages/SliderImgs";

const HotelIdPages = () => {
  const { id } = useParams();

  const [hotel, getHotel] = useFetch();

  useEffect(() => {
    const url = `https://hotels-api.academlo.tech/hotels/${id}`;
    getHotel(url);
  }, [id]);

  return (
    <article className="hotel">
      <header className="hotel_header">
        <h2 className="hotel_name">{hotel?.name}</h2>
        <div>
          <span>{hotel?.rating}</span>
        </div>
      </header>
      <div className="hotel_menu">
        <div className="hotel_slices">
          <SliderImgs hotel={hotel}/>
        </div>
        <div className="hotel_map">
          {hotel && <MapHotel lat={hotel?.lat} lon={hotel?.lon} />}
        </div>
      </div>
      <section className="hotel_info">
        <div className="hotel_name">
          {hotel?.city.name}, {hotel?.city.country}
        </div>
        <div className="hotel_address">
          <address>{hotel?.address}</address>
        </div>
        <p className="hotel_description">{hotel?.description}</p>
      </section>
      <section>

{ 
  localStorage.getItem('token')
  ? (
    <FormReservervation
          hotelId={id}
        />
  )
  : <p>If you want to make reservation, please <Link to={'/login'}>Login</Link></p>

}

        


      </section>
      
      <OtherHotels
       city={hotel?.city} id={id}
        />
    </article>
  );
};

export default HotelIdPages;
