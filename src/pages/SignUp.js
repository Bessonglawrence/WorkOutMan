import React,{useState} from 'react';
import { useSignup } from '../hooks/useSignup';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup, isLoading, error } = useSignup()

    const handleSubmit = async(event) => {
        event.preventDefault();
        
        await signup(email , password)
    }

  return (
    <form className='signup' onSubmit={handleSubmit}>
        <h1>SignUp</h1>

        <label>Email :</label>
        <input  
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
        />

        <label>PassWord :</label>
        <input  
            type="text"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
        />

        <button disabled={isLoading}> Sign Up</button>
        {error && <div className='error'>{error}</div>}

    </form>
  )
}

export default SignUp;
