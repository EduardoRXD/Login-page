import './style.css'
import { useRef } from 'react';
import api from "../../services/api"
import { Link } from "react-router-dom";

function App() {
  const inputBirthday = useRef()
  const inputName = useRef()
  const inputEmail = useRef()
  const inputPassword = useRef()

  async function signUp() {
    try {
      const response = await api.post('/signup', {
        email: inputEmail.current.value,
        password: inputPassword.current.value,
        name: inputName.current.value,
        birthday: inputBirthday.current.value
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
      <div className='homecontainer'>
        <form action="">
          <h1>Sign up</h1>
          <h2>Birthday date</h2>
          <input type="date" name='date' ref={inputBirthday}/>
          <h2>Name</h2>
          <input placeholder="Name" type="text" name='name' ref={inputName}/>
          <h2>Email</h2>
          <input placeholder="Email" type="email" name='email' ref={inputEmail}/>
          <h2>Password</h2>
          <input placeholder="Password" type="password" name='password' ref={inputPassword}/>
          <button type='button' onClick={signUp}>Sign up</button>

          <p>or <Link to="/signin">sign in</Link></p>
          </form>
      </div>
    </>
  )
}

export default App
