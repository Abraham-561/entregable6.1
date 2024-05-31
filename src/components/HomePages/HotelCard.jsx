import { useNavigate } from "react-router-dom";
import "./HotelCard.css";

const HotelCard = ({ hotel }) => {

  const navigate = useNavigate()
  const navigateHotelId = () => {
    navigate(`/hotel/${hotel.id}`)

  }
  return (
    
      <article className="card">
        <header className="card_header">
          <img className="card_img" src={hotel.images[0].url} alt="" />
        </header>
        <section className="card_info">
          <h3 className="card_name">{hotel.name}</h3>
          <div className="card_rating">{hotel.rating}</div>
          <div className="card_city">
            {hotel.city.name}, {hotel.city.country}
          </div>
          <div className="card_price">${hotel.price}</div>
        </section>
        <footer className="card_footer">
          <button onClick={navigateHotelId} className="card_btn">See more...</button>
        </footer>
      </article>
   
  );
};

export default HotelCard;
