import React, { useEffect, useState } from 'react'
import Button from './Button'
import { ReactComponent as SignUpDesktop } from '../images/illustration-sign-up-desktop.svg'
import { ReactComponent as SignUpMobile } from '../images/illustration-sign-up-mobile.svg'
import { useMediaQuery } from 'react-responsive'
import Success from './Success'

const Subscribe = () => {
  const [email, setEmail] = useState()
  const [validEmail, setValidEmail] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const isMobile = useMediaQuery({ query: `(max-width: 600px)` })
  const [desktop, setDesktop] = useState(true)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address')
    } else {
      setError('')
      setValidEmail(true)
    }
  }

  useEffect(() => {
    validateEmail()
    console.log(error)
  }, [email])

  useEffect(() => {
    console.log(validEmail)
    console.log(email)
    console.log(success)
  }, [validEmail])

  //   const navigate = useNavigate()
  function Submit() {
    validEmail
      ? setSuccess(true)
      : // ? navigate('/success/')
        alert('Please enter a valid email address')
  }
  //   useEffect(() => {
  //     isMobile ? setDesktop(false) : setDesktop(true)
  //   }, [isMobile])

  return success ? (
    <Success email={email} />
  ) : (
    <>
      <div>
        <div className='card-rectangle'>
          {/* <SignUpMobile className={desktop ? 'hidden' : 'mobile-image'} /> */}
          <div className='card-content card-rec-padding'>
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
              <li>Product discovery and building what matters</li>
              <li>Measuring to ensure updates are a success</li>
              <li>And much more!</li>
            </ul>
            <div className='input-box'>
              <div className='flex between'>
                <label>Email address</label>
                <span
                  className={email && error !== '' ? 'error--text' : 'hidden'}
                >
                  Valid email required
                </span>
              </div>
              <input
                className={email && error !== '' ? 'error--input' : ''}
                type='email'
                placeholder='email@company.com'
                onChange={handleEmailChange}
              ></input>
            </div>
            <Button message='Subscribe to monthly newsletter' click={Submit} />
          </div>
          <div className='desktop-image'>
            <SignUpDesktop />
            {/* <SignUpMobile /> */}
          </div>
          {/* <SignUpMobile className={isMobile ? 'mobile-image' : 'hidden'} /> */}
        </div>
      </div>
    </>
  )
}

export default Subscribe
