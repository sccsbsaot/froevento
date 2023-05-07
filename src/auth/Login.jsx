import React, { useState } from 'react';
import axios from 'axios';

const LOGIN_API = import.meta.env.VITE_EVENT_API + "/login";


const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    // axios send username and password to backend recieve response from backend
    // axio receive jwt token from backend

    // axios.post(LOGIN_API, {
    //   username: username,
    //   password: password
    // })
    // .then( (response) => {
    //   console.log(response);
    //   setIsLoggedIn(true);
    //   localStorage.setItem('jwt', response.data.jwt);
    // })
    // .catch( (error) => {
    //   console.log(error);
    // });

    setIsLoggedIn(true);
    console.log("login");
  };

  return (
    <form className='p-8 flex flex-col m-4'  >
       
      <div>
        <label className="block mb-2 text-gray-700">Username:</label>
        <input
          className="w-full px-4 py-2 border-2 rounded-md focus:outline-none focus:border-blue-700"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label className="block mb-2 text-gray-700 border-red-500">Password:</label>
        <input
          className="w-full px-4 py-2 border-2 rounded-md focus:outline-none focus:border-blue-700"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button onClick={handleSubmit}  type="submit" className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">Login</button>
    </form>
  );
};

export default Login;
