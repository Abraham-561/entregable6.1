import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import './slices/css/RegisterPage.css'

const RegisterPage = () => {

  
  const {register, handleSubmit, reset} = useForm()

  const {createUser}=useAuth()
  const submit = data => {
    createUser(data)
    reset ({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: 'male'
    })
  }

  return (
    <div className='register_container'>
      
      <article className='register'>
      <h2 className='register_title'>Register</h2>
      <form className='register_form' onSubmit={handleSubmit(submit)}>
        
        <div className='register_'>
          <label className='register_la'>
             <span className='register_span'>First name</span>
            <input  className='register_input' {...register('firstName')} type="text" />
          </label>
          <label className='register_la'>
             <span className='register_span'>Last name</span>
            <input className='register_input' {...register('lastName')} type="text" />
          </label>
          <label className='register_la'>
             <span className='register_span'>Email</span>
            <input className='register_input' {...register('email')} type="email" />
          </label>
          <label className='register_la'>
             <span className='register_span'>Password</span>
            <input className='register_input' {...register('password')} type="password" />
          </label>
          <label className='register_la'>
            <span  className='register_span'>Gender</span>
            <select className='register_select' {...register('gender')}>
              <option className='register_option'  value="male">Male</option>
              <option className='register_option' value="female">Female</option>
              <option className='register_option' value="other">Other</option>
            </select>
            <button className='register_button ' >Submit</button>
          </label>
        </div>
        
      </form>
    </article>
    </div>
    
  )
}

export default RegisterPage