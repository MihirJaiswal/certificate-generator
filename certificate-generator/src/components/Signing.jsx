import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useState } from 'react'
import logo from '../assets/GDSClogo.png'
function Signing(props) {

    const { setIsLoggedIn } = props
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    ///

        function submitHandler(e) {
        e.preventDefault();

        const allowedEmails = ['kuldeepverma9755@gmail.com',
        'yuvrajuvmalviya@gmail.com',
        'rohanbhati460@gmail.com',
        'vishalpatel40644@gmail.com',
        'manishthakur6512@gmail.com',
        'anjaliagrawal280@gmail.com',
        'panwarjayesh25@gmail.com',
        'arpitav438@gmail.com',
        'dp754575kp@gmail.com',
        'aryan.gdsc.lead@gmail.com',
        'preetvani703@gmail.com',
        'guptaakshat280301@gmail.com',
        'shravancarpenter06@gmail.com',
        'pawar.raunek03@gmail.com',
        'goldygaming365@gmail.com',
        'pranaypranay625@gmail.com',
        'rathoregunjan46@gmail.com',
        'daminiverma015@gmail.com',
        'Pathakparidhi21@gmail.com',
        'agrawalanshul844@gmail.com',
        'khushimalakar2003@gmail.com',
        'jayditya.sawai@gmail.com',
        'zoyaqureshi28103@gmail.com',
        'gouravgiri2004@gmail.com',
        'kareenabhade16@gmail.com',
        'mishraambika002@gmail.com',
        'sujal2005nage@gmail.com',
        'adubge@gmail.com',
        'Harsh1801200@gmail.com',
        'shubhuu1804@gmail.com',
        'shubhishastri5@gmail.com',
        'sachinjisharma2002@gmail.com',
        'manankokre@gmail.com',
        'pratikjalodiya224@gmail.com',
        'jayendramalviya07@gmail.com',
        'phenomenolaj@gmail.com',
        'adeshkatiya27@gmail.com',
        'jaiswalmihir.business@gmail.com',
        'Kadskargaurav@gmail.com',
        'hardikp.gcsj@gmail.com',
        'namanparwani2004@gmail.com',
        'bhoomikachouhan26@gmail.com',
        'rupal.bagora08@gmail.com',
        'sbhalode2002@gmail.com',
        'mansi.j0507@gmail.com',
        'sanskarsharma2023.24@gmail.com',
        'mr.rahul7980@gmail.com',
        'aayshashaikh131@gmail.com',
        'pratikpatidar11154@gmail.com',
        'tedrudrakshtanwar@gmail.com',
        'mansisolanki2023.24@gmail.com',
        'dashoremahak@gmail.com',
        'Jaynatchouhan23@gmail.com',
        'shivlewa6267@gmail.com',
        'anjalinikum12@gmail.com',
        'anshitarathore137@gmail.com',
        'madhavpatidar1603@gmail.com',
        'jaiswallav0@gmail.com',
        'priyav8815@gmail.com',
        'madhurchouhan603@gmail.com',
        'dhruvpatil369@gmail.com',
        'tanishkaahire13@gmail.com',
        'taibakfaridi@gmail.com',
        'Shubhammalviya0004@gmail.com',
        'aakashbenarjee110@gmail.com',
        'sheetal.kumawat810@gmail.com',
        'Kedarinath55@gmail.com',
        'tamrakarsujal18@gmail.com',
        'tushargangrade3@gmail.com',
        'ketanthombare14@gmail.com',
        'maratheaakanksha91@gmail.com',
        'lokeshdongre93@gmail.com',
        'vikaspal98563@gmail.com',
        'yashlade20@gmail.com',
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
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-200 dark:text-white">
          <img className="w-10 h-8 mr-2" src="https://static-00.iconduck.com/assets.00/google-cloud-icon-1024x823-wiwlyizc.png" alt="logo"/>   
          Google cloud
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
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="jaiswalmihir.business@gmail" value={email} onChange={(e) => setEmail(e.target.value)} required=""/>
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
            <li className='mb-1'>If you haven't completed the entire course, you are not eligible for the certificate.</li>
         </ul>
         <img src={logo} className='logo w-40 mx-auto mt-4' alt="" />
        </div>
      </div>
      </div>
  </div>
</section>
  )
}

export default Signing




   /*   async function submitHandler(e) {
        e.preventDefault();
    
        // Make an API call to check if the email exists
        try {
          const response = await fetch('http://localhost:3001/api/emails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
          });
    
          if (response.ok) {
            const data = await response.json();
            if (data.exists) {
              setIsLoggedIn(true);
              toast.success('Logged in successfully');
              navigate('/certificate');
            } else {
              toast.error('Email not found in the database');
            }
          } else {
            toast.error('Error checking email');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      } */ 