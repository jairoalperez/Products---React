import React, { useEffect, useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ProductDetails() {

    let urlParams = window.location.pathname.split("/")
    let productId = urlParams[urlParams.length - 1]

    const [product, setProduct] = useState(null)

    useEffect(() => {

        const fetchData = () => {

            var config = {
                method: 'get',
                url: 'https://dummyjson.com/products/' + productId,
                headers: {}
            };

            axios(config)
                .then(function (response) {
                    setProduct(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        fetchData()

    }, [])

    return (
        <div className="gradient-custom-2">
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="9" xl="7">
                        {
                            (product !== null && product !== undefined) ?
                                <>
                                    <MDBCard>
                                        <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                                            <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '300px', height: '250' }}>
                                                <MDBCardImage src={product.thumbnail}
                                                    alt="image 1" className="w-100 rounded-3 img-thumbnail" style={{ height: '200px', zIndex: '1' }} /> 
                                            </div>
                                            <div className="ms-3" style={{ marginTop: '130px' }}>
                                                <MDBTypography tag="h5">{product.title}</MDBTypography>
                                                <MDBCardText>{product.brand}</MDBCardText>
                                            </div>
                                        </div>
                                        <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                                            <div className="d-flex justify-content-end text-center py-1">
                                                <div>
                                                    <MDBCardText className="mb-1 h5">${product.price}.99</MDBCardText>
                                                    <MDBCardText className="small text-muted mb-0">Price</MDBCardText>
                                                </div>
                                                <div className="px-3">
                                                    <Link className="btn btn-primary" to={"/checkout/"+product.id}>Checkout</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <MDBCardBody className="text-black p-4">
                                            <div className="mb-5">
                                                <p className="lead fw-normal mb-1">About</p>
                                                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                                                    <MDBCardText className="font-italic mb-1">{product.description}.</MDBCardText>
                                                    <MDBCardText className="font-italic mb-1">- Brand: {product.brand}.</MDBCardText>
                                                    <MDBCardText className="font-italic mb-0">- Category: {product.category}.</MDBCardText>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                <MDBCardText className="lead fw-normal mb-0">Recent photos</MDBCardText>
                                                <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
                                            </div>
                                            <MDBRow>
                                                <MDBCol className="mb-2">
                                                    <MDBCardImage src={product.images[0]}
                                                        alt="image 1" className="w-100 rounded-3" style={{ height: '200px' }} />
                                                </MDBCol>
                                                <MDBCol className="mb-2">
                                                    <MDBCardImage src={product.images[1]}
                                                        alt="image 1" className="w-100 rounded-3" style={{ height: '200px' }} />
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                <MDBCol className="mb-2">
                                                    <MDBCardImage src={product.images[2]}
                                                        alt="image 1" className="w-100 rounded-3" style={{ height: '200px' }} />
                                                </MDBCol>
                                                <MDBCol className="mb-2">
                                                    <MDBCardImage src={product.images[3]}
                                                        alt="image 1" className="w-100 rounded-3" style={{ height: '200px' }} />
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCardBody>
                                    </MDBCard>
                                </>
                                :
                                <>
                                    loading...
                                </>
                        }
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}