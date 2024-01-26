import React, {useEffect, useState} from 'react'
import axios from 'axios'

function App() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/users')
    .then(response => setData(response.data))
    .catch(error => console.error(error))
  }, []);

  return (
    <div>
      <h1>Connection MERN</h1>
      <ul>
        {data.map(item => {
          <li key={item._id}></li>
        })}
      </ul>
    </div>
  )
}

export default App;