import React,{useState,useEffect,useRef} from 'react'
import '../styles/App.css';
const App = () => {

//code here 
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const emailRef=useRef(null);
const passwordRef=useRef(null);

useEffect(()=>{
  emailRef.current.focus();
},[]);

const handleEmail=(e)=>{
setEmail(e.target.value)
}
const handlePass=(e)=>{
setPassword(e.target.value)
}
const handleSubmit=()=>{
  const emailText=document.getElementById('emailText');
 const passText=document.getElementById('passwordText');
 const emailIP=emailRef.current;
 const passwordIP=passwordRef.current;

if(emailIP && passwordIP && emailText&&passText)
{  
  emailText.innerText=`Your Email : ${email}`;
  passText.innerText=`Your Password : ${password}`;
  if(!email.trim()){
    emailIP.focus();
  }else if(!password.trim()){
    passwordIP.focus();
  }}
};


  return (
    <div id="main">
      Email
      <input id="inputEmail" type="text" value={email} ref={emailRef} onChange={handleEmail}/><br/>
      Password
      <input id="inputPassword" type="text" value={password} ref={passwordRef} onChange={handlePass}/><br/>
      <button id="submitButton" onClick={handleSubmit}>Submit</button><br/>
      <p id="emailText">Your Email : {email}</p>
      <p id ="passwordText">Your Password : {password}</p>
      
    </div>
  )
}


export default App;
