import React, { useContext, useState, useEffect } from 'react'
import MyContext from '../api/context'
import { Search } from './search'
export const Favourite = () => {
  const { favourite, setfavourite, data: { allexercise },toggleload } = useContext(MyContext)
  const [favouriteexercise, setfavouriteexercise] = useState([])

  useEffect(() => {
    const fetch = async () => {
      toggleload()
      const data = await allexercise.filter((item) => {
        return favourite.includes(item.id);
      })
      setfavouriteexercise(data)
    }
    const fetch1 = () => {
      const data = localStorage.getItem('favourite')
      if(data!=null){
        setfavourite(data)
      }
    }
    fetch()
    fetch1()
    toggleload()
  }, [])

  return (
    <div className='rounded'>{favouriteexercise[0] ? <Search exercise={favouriteexercise} n={favouriteexercise.length} /> : <h1 className='text-center text-capitalize bg-light p-5 text-suceess'>add favourite</h1>}
    </div>
  )
}