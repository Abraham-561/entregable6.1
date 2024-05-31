import UseCrud from '../../hooks/UseCrud'
import './BookCard.css'

const BookCard = ({book , deleteReservation, setbookSelect}) => {
  const initialDate = (new Date(book.checkIn)).getTime()
  const finalDate = (new Date(book.checkOut)).getTime()
  const reservationDays = (finalDate-initialDate)/((1000 * 60 * 60 * 24))

  const handleDelete = () => {
    const url = `https://hotels-api.academlo.tech/bookings/${book.id}`
    deleteReservation(url,book.id, true)
  }

    const handleRate = () => {
      setbookSelect(book)
    }

  return (
    <section className='book_container'>
      <header className='book_header'>
        <img className='book_img' src={book.hotel.images[0].url} alt="" />
      </header>
      <h3 className='book_title'>{book.hotel.name}</h3>
      <div className='book_info'>{book.hotel.city.name}, {book.hotel.city.country}</div>
      <p onClick={handleRate} className='book_text'>Rate and comment this visit... ¡CLICK HERE!</p>
      <ul className='book_ul'>
        <li className='book_li'><span className='book_span'>Reservations Days</span><span className='book_span'>{reservationDays}</span></li>
        <li className='book_li'><span className='book_span'>subtotal Price</span><span className='book_span'>{reservationDays * Number(book.hotel.price)}</span></li>
      </ul>
      <button onClick={handleDelete} className='book_btn'><i className='bx bx-trash'></i></button>
    </section>
  )
}

export default BookCard