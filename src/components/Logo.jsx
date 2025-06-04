import logo from '../assets/images/logo.svg';

// const Logo = () => {
//   return <img src={logo} alt='jobify' className='logo' />;
// };

// export default Logo;
import React from 'react'

export default function Logo() {
  return (
    <div>
      <img src={logo} alt="jobify" className='logo' />
    </div>
  )
}
