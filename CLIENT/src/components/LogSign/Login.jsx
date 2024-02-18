import React, { useState } from 'react';



const Login = () => {

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: data.email,
      password: data.password
    };
    axios.post("http://localhost:8980/user/login", userData).then((response) => {
      console.log(response.status, response.data.token);
    });
  };

  return (
    <div className=" py-40 max-w-md  p-10 flex flex-col  rounded-md text-black bg-white">
 

  <form className="flex flex-col gap-3">
    <div className="block "> 
      <label htmlFor="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
      <input type="text" id="email" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />
    </div>
    <div className="block "> 
      <label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
      <input type="text" id="password" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" />
    </div>
    <div>
      <a className="text-sm text-[#7747ff]" href="#">Forgot your password?
      </a></div>
    <button type="submit" className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">Submit</button>
  </form>
  <div className="text-sm text-center mt-[1.6rem]">Don’t have an account yet? <a className="text-sm text-[#e90c0c8c]" href="Signup">Sign up for free!</a></div>
</div>

)
};

export default Login;