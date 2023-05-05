import React from 'react'
import Navlist from './Navlist'
export default function Navbar(props) {
  return (
    <>
    <div className="seprater">
    <h1>{props.logo}</h1>
    <Navlist />
    </div>
      
    </>
  )
}
