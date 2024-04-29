import { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"
import { NavLink, useParams } from "react-router-dom"
import { addToCart } from "../reducers/cartSlice"
import { useDispatch } from "react-redux"


export default function Product(){
    const {id} = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const res = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await res.json())
            setLoading(false)
        }
        getProduct()
    }, [])
 
    const Loading = () => {
        return(
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6">
                    <Skeleton height={50} width={300} />
                </div>
            </>
        )
    }

    const ShowProduct = () => {
        const dispatch = useDispatch()
        return(
            <>

                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className="display-5">
                        {product.title}
                    </h1>
                    <p className="lead fw-bold">
                        Rating {product.rating && product.rating.rate} 
                         <i className="fa fa-star mx-1"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        {product.price} $
                    </h3>
                    <p className="lead">
                        {product.description}
                    </p>
                    <button onClick={() => dispatch(addToCart(product))} className="btn btn-outline-dark mx-1 px-4 py-2">
                        Add to Cart
                    </button>
                    <NavLink to="/cart" className="btn btn-dark mx-1 px-3 py-2">
                        Go to Cart
                    </NavLink>
                </div>
            </>
        )
    }
 

    return(
        <>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </>
    )
}

