import React from 'react'

const Validate = (email) => {
    const emailcheck=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

         if(!emailcheck)return 'Invalid Email Address';

         return null;         
  
}

export default Validate