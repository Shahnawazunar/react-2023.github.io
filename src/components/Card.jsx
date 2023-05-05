import React from 'react'
import "./Card.css"
import CardItems from './CardItems'
import product from './Product'

export default function Card() {
  return (
    <>
      <div className="box">
        {product.map((x,y,z)=>{return(

          <CardItems title = {x.title} price ={x.Duration} imagCard = {x.image}/>

          )})
        }


       </div>
    </>
  )
}
