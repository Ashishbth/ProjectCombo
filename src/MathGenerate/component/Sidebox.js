import React from 'react';
import '../styles/sidebox.css';
const Sidebox = () => {
  return (
   
      <div className="sidebox">

        <div className='sidebox-item'>
          <button>
            <a href="#">Easy</a>
          </button>
          <button>
            <a href="#">Medium</a>
          </button>
          <button>
            <a href="#">Hard</a>
          </button>
          <button>
            <a href="#">Advance</a>
          </button>
        </div>
      </div>
    
  )
}

export default Sidebox;
