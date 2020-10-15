import React from "react";

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>SPACEX</div>
        <nav>
          <ul>
            <li>
              <a href='/'>Launches</a>
            </li>
            <li>
              <a href='/'>products</a>
            </li>
            <li>
              <a href='/'>solutions</a>
            </li>
            <li>
              <a href='/'>reach</a>
            </li>
            <li className='btn'>
              <a href='/'>Sign In</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
