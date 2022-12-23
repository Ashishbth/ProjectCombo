import React, { useContext } from 'react';
import Context from '../../Context/context';
import '../styles/sidebox.css';
const Sidebox = () => {
  const {easy , medium , hard , advance} = useContext(Context);

  const Functions = {
    Easy : ()=>setInterval(()=>{ easy()},5000), 
    Medium : ()=>setInterval(()=>{ medium()},5000), 
    Hard : ()=>setInterval(()=>{ hard()},5000), 
    Advance : ()=>setInterval(()=>{ advance()},5000), 
  };

 

  return (
   
      <div className="sidebox">

        <div className='sidebox-item'>
          <button onClick={Functions.Easy}> 
            <a href="/">Easy</a>
          </button>
          <button onClick={Functions.Medium}>
            <a href="/">Medium</a>
          </button>
          <button onClick={Functions.Hard}>
            <a href="/">Hard</a>
          </button>
          <button onClick={Functions.Advance}>
            <a href="/">Advance</a>
          </button>
        </div>
      </div>
    
  )
}

export default Sidebox;
