import React, { useState } from 'react'
import '../css/login.css'
import Navbar from './Navbar'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../store/firebase';
import { setDoc, doc } from 'firebase/firestore';
import { toast } from "react-toastify";
import { useNavigate, Link } from 'react-router-dom';

const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault()
    // call the login function with email and password
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (!user) {
        await setDoc(doc(db, "user", user.uid), {
          email: user.email,
          username: username,
          uid: user.uid,
          createdAt: new Date(),
        });

      }
      // console.log("user Register successfully !!");
      toast.success("User registered successfully!");
      navigate('/signin');


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
        <h1>Sign UP</h1>
        <form onSubmit={handleLogin}>
          <input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='username' />
          <br />
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
          <button>SIGN UP</button>
          <br />
          <button className='btn2'>CONTINUE WITH GOOGLE</button>
          <br />
          <p>Don't have an account?
            <Link to="/signin">Sign In</Link>
          </p>
        </form>
        {<p className='error'>{error}</p>}
      </div >
    </>
  )
}

export default SignIn