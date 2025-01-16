import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from "../../assets/header.png"

const Banner = () => {
  return (
    <div className='section__container header__container'>
        <div className='header__content z-30'>
            <h4 className='uppercase'>UPTO 20% Discount on</h4>
            <h1>Girl's Fashion</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod voluptates perferendis dicta vero molestias consequuntur maxime placeat? Ratione laudantium sequi animi magni sunt perspiciatis nihil non. Repellendus, veniam repudiandae. Similique!</p>
        <button className='btn'>
            <Link to='/shop'>EXPLORE NOW</Link>
        </button>
        </div>
<div className='header__image'>
    <img src={bannerImg} alt="Banner Image" />
</div>

    </div>
  )
}

export default Banner