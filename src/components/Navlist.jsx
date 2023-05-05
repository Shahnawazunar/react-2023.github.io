import React from 'react'
import ListItem from './ListItem'
import "./NavList.css"

export default function Navlist() {
    const ArrList = ["Home","Product","About","Contect"]

    const show = ArrList.map((x,y,z)=>{
return(
<>

<ListItem list={x}/>
</>

)})
  return (
    <>
    <ul>
    {show}
    </ul>
    </>
  )
}
