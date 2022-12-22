import React from 'react'
import Container from './component/Container';
import Header from './component/Header';
import Sidebox from './component/Sidebox';
import './styles/layout.css';
const Layout = () => {
  return (
    <>
    <div>
        <Header/>
        <div className="layout-side">
           <div className="layout-sidebox">
              <Sidebox />
            </div>
            <div className="layout-container">
              <Container />
           </div> 

        </div>
        Layout

    </div>
    </>
  )
}

export default Layout;
