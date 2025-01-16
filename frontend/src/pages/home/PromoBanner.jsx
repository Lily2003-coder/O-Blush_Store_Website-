import React from 'react'

const PromoBanner = () => {
  return (
    <section className='section__container banner__container'>
        <div className='banner__card'>
            <span><i className="ri-truck-line"></i></span>
            <h4>Free Delivery</h4>
            <p>Offers convenience and the ability to shop from anywhere, anytime.</p>
        </div>

        <div className='banner__card'>
            <span><i className="ri-money-rupee-circle-line"></i></span>
            <h4>100% Money Back Guaranty</h4>
            <p>Our site dffers a review system where our customers can share their feebacks and ratings.</p>
        </div>

        <div className='banner__card'>
            <span><i className="ri-user-voice-fill"></i></span>
            <h4>Strong Support</h4>
            <p>Offers customer support services to assist customers with questions and issues.</p>
        </div>
    </section>
  )
}

export default PromoBanner