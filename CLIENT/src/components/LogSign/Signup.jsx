import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom'

import axios from 'axios'
axios.defaults.withCredentials = true;

const Signup = () => {
  
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendData = async () => {
    const res = await axios
      .post("http://localhost:8980/user/sign", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })
      // .catch((error) => {
      //   console.log(error);
      // });
    // console.log(res)
    // const Data = await res.Data;
    // console.log(Data.user);
    // return Data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendData().then(() => navigate('/login') );
    setTimeout(() => {
      setFormData({ name: "", email: "", password: "" });
    }, [4000]);
  };
  

  return (
  
<div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
        {/* Add your form elements here */}
        <form className ="" onSubmit={handleSubmit } > 
          <div className="mb-4">
            <label className ="block text-sm font-medium text-gray-600">
              name
            </label>
            <input
            
            onChange={handleChange} name='name' 
            type="name"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
               onChange={handleChange} name='email' type="email"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
               onChange={handleChange} name='password' type="password"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>



  );
};

export default Signup;