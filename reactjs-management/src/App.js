import React, {useEffect, useState} from 'react'
import axios from 'axios'

function App() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllUsers()
  }, []);

  const getAllUsers = () => {
    axios.get('http://localhost:4000/users/getAll')
    .then(response => {
      setData(response.data)
    })
    .catch(error => console.error(error))
  }

  return (
    <div>
      <h1>Connection MERN</h1>
      {
        data.length && (
          <ul>
            {data.map(user => (
              <li key={user._id}>{user.name}, {user.age}</li>
            ))}
        </ul>
        )
      }
    </div>
  )
}

export default App;