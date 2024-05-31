import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHotelsThunk } from "./slices/products.slices";
import HotelCard from "../components/HomePages/HotelCard";
import "./slices/css/HomePage.css";
import GeneralHeader from "../components/shared/GeneralHeader";
import FilterName from "../components/HomePages/FilterName";
import FilterCity from "../components/HomePages/FilterCity";
import FilterPrice from "../components/HomePages/FilterPrice";

const HomePage = () => {
  const [nameSearched, setNameSearched] = useState("");
  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity,
  });

  const products = useSelector((states) => states.products);
  console.log({ products, nameSearched });

  const dispatch = useDispatch();

  useEffect(() => {
    const url = "https://hotels-api.academlo.tech/hotels";
    dispatch(getHotelsThunk(url));
  }, []);

  const cbFilter = (hotel) => {
    // filter by name
    const filterName = hotel.name.toLowerCase().includes(nameSearched);
    //filter by price
    const price = Number(hotel.price);
    const filterByPrice = price >= fromTo.from && price <= fromTo.to;
    return filterName && filterByPrice;
  };
  return (
    <div className="home_page">
      <div className="filters filter__close">
        <header className="filters_header">
          <h2 className="filters_title"> Filters</h2>
        </header>

        <FilterPrice setFromTo={setFromTo} />
        <FilterCity />
      </div>
      <section className="home_section">
        <div className="search">
          <FilterName setNameSearched={setNameSearched} />
        </div>
        <div className="cards">
          {products?.filter(cbFilter).map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
