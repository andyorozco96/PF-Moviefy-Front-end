import React,{ useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from '../scss/components/_filters.module.scss'
import { sortByName } from '../redux/actions'

export default function Filters({setOrder, order, page}) {

  const dispatch = useDispatch()



  // ORDENAMIENTO ALFABÉTICO//
  const handleOrder = (e) => {
    setOrder(e.target.value)
    page(1)
    dispatch(sortByName(order))
  }

  


  

  return (
    <div className={style.container_filters}>
        <select onChange={e => handleOrder(e)}>
            <option value="ASC">From A to Z</option> 
            <option value="DESC">From Z to A</option> 
        </select>


        <select onChange={e => handleOrder(e)}>
            <option value="ASC">From A to Z</option> 
            <option value="DESC">From Z to A</option> 

        </select>
    </div>
  )
}
