import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
        <div className='container'>
            <Link to='/'>
                <h1>WorkOut Man</h1>
            </Link>
            <nav>
              <div>
                <Link to='/login'>LogIn</Link>
                <Link to='/signup' >SignUp</Link>
              </div>
            </nav>
        </div>
    </header>
  );
}

export default Navbar;