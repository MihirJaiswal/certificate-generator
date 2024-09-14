import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useState } from 'react'
import cloudLogo from '../assets/cloudLogo.svg'

function Signing(props) {

    const { setIsLoggedIn } = props
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    ///

        function submitHandler(e) {
        e.preventDefault();

        const allowedEmails = [
        'kuldeepverma9755@gmail.com',
        'aryan.gdsc.lead@gmail.com',
        'jaiswalmihir.business@gmail.com',
        'kadskargaurav@gmail.com',
        'anshitarathore137@gmail.com',
        'mihirjaiswal69@gmail.com'
        ]
    
        if (email.length > 0 && email.includes('@') && email.includes('.') && email.endsWith('.com') && allowedEmails.includes(email)) {
          setIsLoggedIn(true);
          toast.success('verification successfull');
          navigate('/certificate');
        } else {
          toast.error('Invalid email.');
        }
      } 
      
  return (
      <section className="bg-black h-screen flex justify-center items-center">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 -mt-12 md:mt-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-200 dark:text-white">
          <img className="w-10 h-8 mr-2" src={cloudLogo} alt="logo"/>   
         Certificate Generator
      </a>
      <div className='flex flex-col w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
      <div className="bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Enter your registered email.
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="abc@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required=""/>
                  </div>
                  <button type="submit" 
                  onClick={submitHandler}
                  className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  
              </form>
          </div>
      </div>
      <div className='my-4 mr-4 bg-white rounded-lg w-full dark:bg-gray-800'>
        <div className='pr-6 pl-6 pb-4'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>Instructions</h1>
        </div>
        <div>
         <ul className='list-disc list-outside text-sm text-gray-500 dark:text-gray-400 px-8 pb-2'>
            <li className='mb-1'>please enter your email that you used to register for google cloud study jams.</li>
            <li className='mb-1'>If you think your registered email is not available in database please contact us.</li>
         </ul>
        </div>
      </div>
      </div>
  </div>
</section>
  )
}

export default Signing

