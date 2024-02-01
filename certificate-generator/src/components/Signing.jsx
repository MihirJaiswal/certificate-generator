import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useState } from 'react'
function Signing() {

    const { setIsLoggedIn } = useState(false)
    const navigate = useNavigate()

    function submitHandler(e) {
        e.preventDefault()
        toast.success("Logged in")
        /* setIsLoggedIn(true) */
        navigate("/certificate")
      }
  return (
    <div>
      this is home page
      <button onClick={submitHandler}>click heree</button>
    </div>
  )
}

export default Signing
