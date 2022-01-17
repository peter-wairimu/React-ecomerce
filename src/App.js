import React, { useState,useEffect} from 'react'
// import Products from './components/Products/Products'
// import Navbar from './components/Navbar/Navbar'
import { commerce } from './lib/commerce';
import {Products, Navbar} from './components'




function App() {
    const [products, setProducts] = React.useState([]);
    
    const fetchProducts = async () => { 
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    // the useEffect hook is used to run a piece of code based on a specific condition.
    // in this case, we want to run the fetchProducts function when the component is rendered.
    // the second argument is an array of dependencies.
    // if any of the dependencies change, the fetchProducts function will be run again.

    useEffect(() => {
        fetchProducts();
    }, []);
    // console.log(products)
    

    return (
        <div>
        <Navbar />
        <Products products={products} />
        </div>
    )
}

export default App
