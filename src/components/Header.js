import React from 'react'
import headerimg1 from '../assets/img-1.png'
import headerimg2 from '../assets/img-2.png'
const Header = () => {
  return (
    <div className='header'>
        <div className="header-container">
        <div className="header-left">
        <h1>Hire a <i>Freelancer </i>
        for any task
        </h1>
        <span>Over 1200+ expect Freelancers are waiting for you</span>
        <div className="search">
            <div className="search-container">
             <i class="ph ph-magnifying-glass"></i>
            <input type="text" placeholder="Service title..." />
            </div>
            <button>Search</button>
        </div>
        <p>Popular searches: <b>Video Production, Image Editing</b></p>
        </div>
        <div className="header-right">
        <img src={headerimg2} alt="" />
        <img src={headerimg1} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Header