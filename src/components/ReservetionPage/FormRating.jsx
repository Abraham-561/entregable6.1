import React from "react";
import { useForm } from "react-hook-form";
import UseCrud from "../../hooks/UseCrud";

const FormRating = ({bookSelect , setbookSelect}) => {


   const  [,,creaReview] =UseCrud()


   const {handleSubmit, reset,register} = useForm()
    const submit = data => {
        const url = 'https://hotels-api.academlo.tech/reviews'
        const bodyData = {
            ...data, 
            hotelId:bookSelect.hotelId
        }
        creaReview(url,bodyData,true)

        reset({
            rating: '5',
            comment:'',

        })
        setbookSelect()

    }
    console.log(bookSelect)
  return (
    <div>
        <article>
            <h3>Book</h3>
            <section>
            <img className='book_img' src={bookSelect?.hotel.images[0].url} alt="" />
                <h4>{bookSelect?.hotel.name}</h4>
            </section>
            <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>Rating</span>
          <select {...register('rating')} >
            <option value="5">🌟🌟🌟🌟🌟</option>
            <option value="4">🌟🌟🌟🌟</option>
            <option value="3">🌟🌟🌟</option>
            <option value="2">🌟🌟</option>
            <option value="1">🌟</option>
          </select>
        </label>
        <label>
          <span>Comments</span>
          <textarea {...register('comment')}/>
        </label>
        <button>Submit</button>
      </form>
        </article>
      
    </div>
  );
};

export default FormRating;
