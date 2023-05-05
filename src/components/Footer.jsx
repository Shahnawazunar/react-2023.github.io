import React from 'react'
import "./Footer.css"


export default function Footer(props) {
    const foot = "Shah Nawaz"
    const addres ="Copyright : I am Developer My Name Is Shah Nawaz Unar from Nawabshah"
  return (
    <>
    <div className="footer-section">
    <h1 style = {{color:'white' ,padding:"10px"}}>{foot}</h1>
    <p className='peragraph'>{addres}</p>
    </div>
    </>
  )
}
