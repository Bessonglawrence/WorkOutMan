import React,{useState} from 'react';


const LogIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(event) => {
        event.preventDefault();
        console.log(email , password)
    }

  return (
    <form className='login' onSubmit={handleSubmit}>
        <h1>Log In</h1>

        <label>Email :</label>
        <input  
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
        />

        <label>PassWord :</label>
        <input  
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
        />

        <button> Log In </button>

    </form>
  )
}

export default LogIn;
