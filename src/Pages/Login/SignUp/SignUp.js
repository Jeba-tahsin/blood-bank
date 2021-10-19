import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import initializeAuthorization from "../Firebase/firebase.init";
import GoogleLogin from "../GoogleIn/GoogleLogin";

initializeAuthorization();

const SignUp = () => {
    const [user, setUser] = useState({
        name:'',
        address:'',
        email:'',
        password:''
    });

    const [success, setSuccess] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const getInput = (e) => {
      const getValue = {...user};
      getValue[e.target.name] = e.target.value ;
      setUser(getValue);
    } 

    const handleSignUp = (e) => {
        if(user.email !== '' && user.password !== '' && user.name !== '' && user.address !== ''){
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.email, user.password)
              .then((userCredential) => {
                const user = userCredential.user;
                
                setSuccess('Signup success')
                setErrorMsg('');

              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorMessage);
                setSuccess('');
              });
        }
        e.preventDefault();
      }
      
  return (
    <div>
      <p>{success}</p>
      <p>{errorMsg}</p>
      <form onSubmit={handleSignUp}>
        <div class="mb-3 d-flex justify-content-center mt-4">
          <label for="exampleInputEmail1" class="form-label">
            Name :
          </label>
          <input
            onBlur={getInput}
            type="text"
            class="form-control w-50"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="your name"
            name="name"
          />
        </div>
        <div class="mb-3 d-flex justify-content-center mt-4">
          <label for="exampleInputEmail1" class="form-label">
            Address :
          </label>
          <input
            onBlur={getInput}
            type="text"
            class="form-control w-50"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="your address"
            name="address"
          />
        </div>
        <div class="mb-3 d-flex justify-content-center mt-4">
          <label for="exampleInputEmail1" class="form-label">
            Email :
          </label>
          <input
            onBlur={getInput}
            type="email"
            class="form-control w-50"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="your email"
            name="email"
          />
        </div>
        <div class="mb-3 d-flex justify-content-center">
          <label for="exampleInputPassword1" class="form-label">
            Password :
          </label>
          <input
            onBlur={getInput}
            type="password"
            class="form-control w-50 "
            id="exampleInputPassword1"
            placeholder="your password"
            name="password"
          />
        </div>
        <button type="submit" class="btn btn-primary mb-4">
          Submit
        </button>
      </form>
      <div>
      <Link to='/login'>Login</Link>
      </div>
      <GoogleLogin></GoogleLogin>
    </div>
  );
};

export default SignUp;
