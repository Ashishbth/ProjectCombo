import React, { useContext } from 'react';
import Context from '../../Context/context';
import '../styles/sidebox.css';
const Sidebox = () => {
  const {easy , medium , hard , advance} = useContext(Context);

  return (
   
      <div className="sidebox">

        <div className='sidebox-item'>
          <button onClick={easy}> 
            <a href="/">Easy</a>
          </button>
          <button onClick={medium}>
            <a href="/">Medium</a>
          </button>
          <button onClick={hard}>
            <a href="/">Hard</a>
          </button>
          <button onClick={advance}>
            <a href="/">Advance</a>
          </button>
        </div>
      </div>
    
  )
}

export default Sidebox;
