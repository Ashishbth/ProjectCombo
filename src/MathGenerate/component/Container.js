import React, { useContext } from "react";
import Context from "../../Context/context";
import "../styles/container.css";

const Container = () => {
  const { value1, value2, setInput, input , onStart , add , marks} = useContext(Context);

  
  let result = value1 + value2;
  
  const Display = ()=>{
    setTimeout(()=>{
      add(result);

    },2000)
  }

  return (
    <div className="container">
      <nav className="container-nav" id="nav-item">
        <h3>Correct !</h3>
      </nav>
      {/* <div className="progressbar"></div> */}
      <div className="cal-area">
        <div className="cal-items">

          <span> {value1}</span>
          <span>+</span>
          <span> {value2}</span>
          <span>=</span>
          <span>
            
            <input
              className="user-input"
              value={input}
              autoFocus
              onKeyUp={Display}
              placeholder="Enter Yours Answer"
              onChange={(e) => setInput(e.target.value)}
              />
              
          </span>
          <button className="conatiner-btn" onClick={onStart}>Start</button>
        </div>
      </div>
      <div className="score-area">
        <h4>Your Score : </h4>
        <div className="score">
          <p>{marks}</p>
        </div>
      </div>
    </div>
  );
};

export default Container;
