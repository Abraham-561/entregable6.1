import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { getHotelsThunk } from '../../pages/slices/products.slices'
import { useDispatch } from 'react-redux'
import './FilterCity.css'

const FilterCity = () => {

    const [cities, getCities] =useFetch()

    useEffect(() => {
        const url = 'https://hotels-api.academlo.tech/cities'
        getCities(url)
    }, [])

    console.log(cities)

    const dispatch = useDispatch()

    const hanleCityFilter = (cityId) => {
        const url = `https://hotels-api.academlo.tech/hotels${cityId ? `?cityId=${cityId}` : ''}`
        dispatch(getHotelsThunk(url))
    }

  return (
    <article className='cities'>
        <h4 className='cities_title'>Cities</h4>
        <ul className='cities_title'>
            <li className='cities_li' onClick={() => hanleCityFilter()}>All Cities</li>  
            {
                cities?.map( city => (
                    <li className='cities_li' onClick={ () => hanleCityFilter(city.id)} key={city.id}>{city.name}</li>
                ))
            }  
        </ul>
    </article>
  )
}

export default FilterCity