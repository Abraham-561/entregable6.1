import React from "react";
import { useForm } from "react-hook-form";
import './FilterPrice.css'


const FilterPrice = ({setFromTo}) => {

  const {handleSubmit, reset,register} = useForm()

  const submit = data => {

    const from = Number(data.from)
    const to = Number(data.to)
    setFromTo({
      from: data.from === '' ? 0 : from ,
      to: data.to === '' ? Infinity : to
    })
    reset({
      from:'',
      to:''
    })
  }
  return (
    <article className="price">
      <h4 className="price_title">Price</h4>
      <form className="price_form" onSubmit={handleSubmit(submit)} >
        <label className="price_label">
          <span className="price_span" >From</span>
          <input className="price_input" {...register('from')} type="number" />
        </label>
        <label className="price_label">
          <span className="price_span" >To</span>
          <input className="price_input" {...register('to')} type="number" />
        </label>
        <button className="price_btn">Submit</button>
      </form>
    </article>
  );
};

export default FilterPrice;
