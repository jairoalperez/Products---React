import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import CardGroup from 'react-bootstrap/CardGroup'
import axios from 'axios'

function Products() {

    const [products, setProducts] = useState(null)

    useEffect(() => {
        const FetchProducts = () => {

            var config = {
                method: 'get',
                url: 'https://dummyjson.com/products',
                headers: {}
            };

            axios(config)
                .then(function (response) {
                    setProducts(response.data.products)
                })
                .catch(function (error) {
                    console.log(error);
                });

        }
        FetchProducts()
    }, [])

    return (
        <>
            {
                (products !== null && products !== undefined) ?
                    <>
                        <div>
                            <CardGroup>
                                {products.map(product => {
                                    return (
                                        <div key={product.id} className='m-4'>
                                            <Product title={product.title} description={product.description} price={product.price} img={product.thumbnail} identifier={"/products/"+product.id}></Product>
                                        </div>
                                    )
                                })}
                            </CardGroup>
                        </div>
                    </>
                    :
                    <>
                        loading...
                    </>
            }



        </>

    )
}

export default Products