import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Dashboard () {

  return (
    <div className='h-screen' style={{backgroundImage: 'url(/img/bgd-night.jpg)',backgroundSize:'cover'}}>
      <div className='bg-gray-950 flex items-center justify-between p-4'>
        <div>Fensi logo</div>
        <div className='px-2 py-2'>Welcome to Events Dashboard, browse till your heart's content</div>
        <Link to="/login" className='px-2 py-2'>Login</Link>
      </div>
      <div className='flex flex-col items-center justify-center py-16 px-16' >
        Event Cards
      </div>
    </div>
  )
}

export default Dashboard;
