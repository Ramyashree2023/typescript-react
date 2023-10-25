import React from 'react'

type props={
    Name:string
    Description:string
    
}


export default function Navbar(props:props) {
  return (
    <div>
        <h1>{props.Name}
            {props.Description}
        </h1>
    </div>
  )
}
