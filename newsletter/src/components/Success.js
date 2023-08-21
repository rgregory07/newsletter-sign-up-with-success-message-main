import React from 'react'
import { ReactComponent as IconSuccess } from '../images/icon-success.svg'
import Button from './Button'

const Success = (props) => {
  return (
    <div className='card-square'>
      <div className='card-content card-sq-padding'>
        <IconSuccess className='icon' />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation e-mail has been sent to <strong>{props.email}</strong>.
          Please open it and click the button inside to confirm your
          subscription.
        </p>
        <Button message='Dismiss message' />
      </div>
    </div>
  )
}

export default Success
