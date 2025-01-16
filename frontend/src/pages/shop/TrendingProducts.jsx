import React from 'react'
import ProductCards from './ProductCards'
import products from '../../data/products.json'
import { useState } from 'react';

const TrendingProducts = () => {
    const [visibleProducts, setVisibleProducts]= useState(8);
    const loadMoreProducts=()=>{ 
        setVisibleProducts(prevCount => prevCount + 4)
    }
  return (
    <section className='section__container product__container'>
        <h2 className='section__header'>Trending Products</h2>
        <p className='section__subheader mb-12'>
            Discover the latest choices of your own. Elevate your style wth our curated collections of
            Trending Women's Fashion Products.
        </p>

        {/* products card */}
        <div className='mt-12'> <ProductCards products={products.slice(0, visibleProducts)} /></div>
 
        {/* load more products button */}
        <div className='product__btn'>
            {
                visibleProducts< products.length &&(
                    <button className='btn' onClick={loadMoreProducts}>Load More</button>
                )
            }

        </div>
       
    </section>
  )
}

export default TrendingProducts