import React from 'react'
import '../styles/container.css';
const Container = () => {
  return (
    <div className='container'>
      <nav className="container-nav" id='nav-item'>
        <h3>Correct !</h3>
      </nav>
      <div className="cal-area">
        <div className="cal-items">
          <span>4</span>
          <span>+</span>
          <span>4</span>
          <span>=</span>
          <span>
            <input type="text" className="user-input"  placeholder='Enter Yours Answer'/>
          </span>
        </div>
      </div>
      <div className="score-area">
        <h4>Your Score : </h4>
        <div className="score">
          <p>4</p>
        </div>
      </div>
      
    </div>
  )
}

export default Container;
