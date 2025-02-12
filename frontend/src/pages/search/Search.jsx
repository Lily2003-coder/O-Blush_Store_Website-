import React from 'react'
import productsData from "../../data/products.json"
import { useState } from 'react'
import ProductCards from '../shop/ProductCards';
const Search = () => {
    const[searchQuery, setSearchQuery]=useState('');
    const[fIlteredProduct, setFilteredProducts]=useState(productsData);

    const handleSearch=()=>{
        const query=searchQuery.toLowerCase();

        const filtered=productsData.filter(product=> product.name.toLowerCase().includes
        (query) || product.description.toLocaleLowerCase().includes(query));
        setFilteredProducts(filtered);
    }
  return (
    <>
   <section className='section__container bg-primary-light'>
        <h2 className='section__header capitalize'>Search Products</h2>
        <p className='section__subheader'>Discover the latest choices of your own. Elevate your style wth our curated collections of Trending Women's Fashion Products.</p>
</section>

<section className='section__container'>
    <div className='w-full mb-12 flex flex-col md:flex-row items-center justify-center gap-4'>
        <input type="text" 
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
        className='search-bar w-full max-w-4xl p-2 border rounded'
        placeholder='Search for products...' />

        <button 
        onClick={handleSearch}
        className='search-button w-full md:w-auto py-2 px-8 bg-primary text-white rounded'>Search</button>
    </div>

    <ProductCards products={fIlteredProduct}/>

</section>
    
    </>
  )
}

export default Search