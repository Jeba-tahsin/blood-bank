import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const GoogleLogin = () => {
    const googleProvider = new GoogleAuthProvider();

  const googleHandler = () => {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log('jeba',user);
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return <div>
      <button onClick={googleHandler} className='btn btn-primary'>Google sign in</button>
     </div>;
};

export default GoogleLogin;
