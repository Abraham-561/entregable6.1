import React, { useState } from 'react'
import getConfigToken from '../services/getConfigToken'
import axios from 'axios'

const UseCrud = () => {

    const [response, setResponse]=useState()


  //GET - read

  const getApi = (url, withToken) => {
    axios.get(url, withToken ? getConfigToken() :{})
    .then(res => setResponse(res.data))
    .catch(err => {
      console.log(err)
      if(err?.response.status === 401 || err?.response.status === 403)
    localStorage.removeItem('token')
    localStorage.removeItem('userLogged')
    })
  

  }

  // create
  const postApi = (url,data, withToken) => {
    axios.post (url, data,  withToken ? getConfigToken() :{} )
        .then(res => {
            console.log(res.data)
            setResponse(response ? [...response, res.data] : [res.data])
        })
        .catch(err => {
          console.log(err)
          if(err?.response.status === 401 || err?.response.status === 403)
        localStorage.removeItem('token')
        localStorage.removeItem('userLogged')
        })
  }

  // delete

  const deleteApi = (url,id, withToken) => {
    axios.delete(url, withToken ? getConfigToken() :{})
    .then(res => {
        console.log(res.data)
       
        setResponse(response.filter( e =>id !== e.id ))
    })
    .catch(err => {
      console.log(err)
      if(err?.response.status === 401 || err?.response.status === 403)
    localStorage.removeItem('token')
    localStorage.removeItem('userLogged')
    })
  }
  //update

  const updateApi = () => {

  }

  return[response, getApi, postApi,deleteApi,updateApi ]
 
}


export default UseCrud