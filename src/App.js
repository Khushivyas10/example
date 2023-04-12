
import { useEffect, useState } from 'react';
import './App.css'
import { CircularProgress } from '@mui/material'
// const axios = require('axios')


const url = "http://localhost:3004/Employee/"

function App() {
  const [userData, setUserData] = useState([]);
  const [message, showMessage] = useState(false)
  const [fetching, setFetching] = useState(true)

  const onClickHandler = () => {
    showMessage(true)
  }

  const getUserData = async () => {

    const response = await fetch(url);
    const jsonData = await response.json();
    setUserData(jsonData);
    setFetching(false)
    console.log(userData)
  };

  useEffect(() => {
    setFetching(true)
    getUserData();
  }, []);



  return (
    <div className="App">
      <h2>Example-1</h2>
      {fetching && <CircularProgress />}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>

        {userData.map((data, key) => {
          return (
            <tbody>
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.age}</td>
              </tr>
            </tbody>
          )
        })}

      </table>

      <h2>Example-2</h2>
      <button onClick={onClickHandler}> Click me</button>
      {message && <h1>Button clicked</h1>}
    </div>

  );
}
export default App;