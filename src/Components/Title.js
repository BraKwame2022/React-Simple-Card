import React from 'react'
import '../App.css'

function Title({header}) {   
  return (
    <div className='top'>
        <h2>Welcome to {header}</h2>
    </div>
  )
}
export default Title;
