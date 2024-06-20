import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header  style= {{textAlign:"-webkit-center"}} className=" py-8 ">
      <div className="container max-auto  ">
        <div className="flex justify-between items-center  ">
                    {/* (logo) */}
          <a href="#">
            <img className="w-20 h-20  " src={logo} alt="" />
          </a>
                    {/* {button} */}
          <button   className="btn btn-sm  ">Work with me</button>

        </div>
      </div>
    </header>
  )
}

export default Header
