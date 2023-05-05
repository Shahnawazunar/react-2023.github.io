import React from 'react'

export default function CardItems(props) {
  return (
    <>
        <div className="card">
        <h2 className='head2'>{props.title}</h2>
        <img src={props.imagCard} alt="" className="imageCard" />
        <h3 className="Addmin">{props.price}</h3>
        <button type="button" class="btn btn-secondary btn-lg apply">Apply Now</button>
        </div>
    </>
  )
}
