import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Login() {
  const [data, setData] = useState([])
  const [showLogin, setShowLogin] = useState(false)

  
  useEffect(() => {
    //getAllUsers()
  }, [])

  const handleShowLogin = () => {
    setShowLogin(true)
  };
/*
  const getAllUsers = () => {
    axios.get('http://localhost:4000/users/getAll')
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.error(error));
  };
*/
  return (
    <div className='h-screen' style={{backgroundImage: 'url(/img/bgd-night.jpg)',backgroundSize:'cover'}}>
      <div className='bg-gray-950 flex items-center justify-between p-4'>
        <div>Fensi logo</div>
        <div className='px-2 py-2'>
          <Link to={"/"} className='bg-gray-800 border rounded py-2 px-2 hover:bg-blue-500 font-bold focus:outline-none focus:shadow-outline'>Go back</Link>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <form className='mt-4'> 
          <div className='mb-4'>
            <label className='block text-sm font-bold mb-2' htmlFor='username'>
              Username
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  text-black'
              id='username'
              type='text'
              placeholder='Enter your username'
            />
          </div>
          <div>
            <label className='block text-sm font-bold mb-2' htmlFor='password'>
              Password
            </label>
            <input 
              className='shadow appearance-none border rounded w-full py-2 px-2 leading-tight focus:outline-none focus: shadow-outline text-black'
              id='password'
              type='password'
              placeholder='Enter your password'
            />
          </div>
          <div className="flex flex-row justify-center items-center py-2 px-2">
            <button className='bg-gray-800 text-white border rounded px-2 py-2 hover:bg-blue-500 font-bold focus:outline-none focus:shadow-outline'
              type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}