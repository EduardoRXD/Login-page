import { useRef } from 'react';
import { Link } from "react-router-dom";
import './style.css'
import api from "../../services/api"

function App() {
  const inputEmail = useRef()
  const inputPassword = useRef()

  async function signIn() {
    try {
      const response = await api.post('/signin', {
        email: inputEmail.current.value,
        password: inputPassword.current.value
      });
      alert(response.data.message);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        alert(error.response.data.message);
      } else {
        console.log("Error:", error);
      }
    }
  }


  return (
    <>
      <div className='singincontainer'>
        <form action="">
          <h1>Sign in</h1>
          <input placeholder="Email" type="email" name='email' ref={inputEmail} />
          <input placeholder="Password" type="password" name='password' ref={inputPassword} />
          <button type='button' onClick={signIn}>Sign in</button>
          <p>or <Link to="/">sign up</Link></p>
        </form>
      </div>
    </>
  )
}

export default App
