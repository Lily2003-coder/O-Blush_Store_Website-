import React from 'react'
import { useParams } from 'react-router-dom'
import products from "../../data/products.json"
import { useState,useEffect } from 'react'
import ProductCards from '../shop/ProductCards'

const CategoryPage = () => {
    const {categoryName}=useParams();
    const [filteredProducts, setFilteredProducts] =useState([]);

    useEffect(()=>{
        const filtered= products.filter((product)=>product.category=== categoryName.toLowerCase());
        setFilteredProducts(filtered);
    }, [categoryName])
    // console.log(categoryName)


    // to make the page load from top
    useEffect(()=>{
        window.scrollTo(0,0)
    })


  return (
    <>
    <section className='section__container bg-primary-light'>
        <h2 className='section__header capitalize'>{categoryName}</h2>
        <p className='section__subheader'>Discover the latest choices of your own. Elevate your style wth our curated collections of Trending Women's Fashion Products.</p>
</section>

{/* products card */}
<div className='section__container'>
    <ProductCards products={filteredProducts}/></div>
    </>
  )
}

export default CategoryPage