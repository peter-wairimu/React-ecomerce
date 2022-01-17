import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
    { id: 1, name: 'shoes', description: 'black shoes', price: '$100',image: "https://images.unsplash.com/photo-1598832517527-7e5b15ee1b2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80" },
    { id: 2, name: 'laptop', description: 'macbook', price: '$200',image: "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" },
]



const Products = () => { 
    return (
           <main>
        <Grid container justify="center" spacing={3}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={ product} />

                    </Grid>
            ))}
        </Grid>
    </main>


    )
 


};

export default Products;