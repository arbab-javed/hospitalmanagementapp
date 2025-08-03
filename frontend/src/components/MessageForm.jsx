import React, { useState } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';

export default function MessageForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState(""); 
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage =async (e) => {
    e.preventDefault();
   try {
    await axios.post("http://localhost:3000/api/v1/message/sendmessage",{firstName,lastName,email,phonenumber,message},
      {
        withCredentials:true,
        headers:{
          "Content-Type":"application/json"
        }
      
      },
    ).then(res=>{
      toast.success(res.data.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhonenumber("");
      setMessage("");
    })
   } catch (error) {
    toast.error(error.response.data.message);
   }
  }

  return (
    <div className='container form-component message-form'>
      <h2>Send Us A Message</h2>
      <form onSubmit={handleMessage}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <input
            type="text"
            placeholder='First Name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder='Last Name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <input
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder='Phone Number'
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <textarea
            rows={7}
            placeholder='Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ width: '100%' }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button type='submit'>Send</button>
        </div>
      </form>
    </div>
  );
}
