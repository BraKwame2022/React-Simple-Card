import React from 'react'
import '../App.css'

const Image = ({image}) => {
  return (
    <div className='img'>
        <img src={image}  className="size" alt="some" />
    </div>
  )
}

export default Image