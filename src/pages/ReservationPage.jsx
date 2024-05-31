import React, { useEffect, useState } from 'react'
import UseCrud from '../hooks/UseCrud'
import BookCard from '../components/ReservetionPage/BookCard'
import FormRating from '../components/ReservetionPage/FormRating'

const ReservationPage = () => {
  const [bookSelect, setbookSelect] = useState()

  const [reservations, getReservations,,deleteReservation]  = UseCrud()

  useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/bookings'
    getReservations(url, true)
  }, [])

  console.log(reservations)
  return (
    <article>
      <h2>Reservation active</h2>
      <FormRating
      bookSelect={bookSelect}
      setbookSelect={setbookSelect}
      />
      <div>
      {
        reservations?.map( book => (
          <BookCard 
          key={book.id}
          book={book}
          deleteReservation={deleteReservation}
          setbookSelect={setbookSelect}
          />
        ))
      }
      </div >
    </article>
  )
}

export default ReservationPage