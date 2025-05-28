import React from 'react'

const Validate = (email,password) => {
    const emailcheck=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

         if(!emailcheck)return 'Invalid Email Address';
         if(password.length<6) return 'please use atleast 6 characters for password'

         return null;         
  
}

export default Validate