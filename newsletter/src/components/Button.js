import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='btn-main' onClick={props.click}>
        <span>{props.message}</span>
      </button>
    </div>
  )
}

export default Button
