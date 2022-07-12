import React from 'react'
import { useState } from 'react'
// import { useHistory } from 'react-router-dom'

const Register = () => {
  const [name, setName] = useState("")
  const [mobile, setMobile] = useState("")
  const [company_name, setCompany_Name] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm_password, setConfirmPassword] = useState("")

  

  async function signUp() {
    let item = { name, mobile, company_name, email, password, 'password2': confirm_password }
    console.warn(item)


    let result = await fetch("http://103.171.181.146:8001/MyApp/register/", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      }
    })
    result = await result.json()
    localStorage.setItem("/user-info", JSON.stringify(result))
    
  }


  return (

    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)} />
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="mobile"
            placeholder="Mobile"
            onChange={(e) => setMobile(e.target.value)} />
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="company_name"
            placeholder="company_name"
            onChange={(e) => setCompany_Name(e.target.value)} />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)} />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)} />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)} />

          <button
            onClick={signUp}
            type="submit"
            className="w-full text-center py-3 rounded bg-green-200 text-white hover:bg-green-dark focus:outline-none my-1"
          >Create Account</button>
        </div>
      </div>
      <div className="text-grey-dark mt-6">
        Already have an account?
        <a className="no-underline border-b border-blue text-blue" href="../login/">
          Log in
        </a>.
      </div>
    </div>
  )
}

export default Register