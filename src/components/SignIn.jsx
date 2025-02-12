import React, { useState } from 'react'
import '../css/login.css'
import Navbar from './Navbar'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../store/firebase';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault()
    // call the login function with email and password
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      alert("user login successfully logged in");
      navigate("/");
      console.log("login successful");

    }
    catch (error) {
      setError(error.message);
      // setTimeout(() => setError(""), 3000); // clear error after 3 seconds
    }
  };



  return (
    <>
      <Navbar />
      <div className='loginContainer'>
        <h1>Sign In</h1>
        <form onSubmit={handleLogin}>
          <input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email" />
          <br />
          <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" />
          <br />
          <button>SIGN IN</button>
          <br />
          <button className='btn2'>CONTINUE WITH GOOGLE</button>
          <br />
          <p>Don't have an account? <Link to={'/signup'}>Sign Up</Link></p>
        </form>
        {error && <p className='error'>{error}</p>}
      </div>
    </>
  )
}

export default SignIn