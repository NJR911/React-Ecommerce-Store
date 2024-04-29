import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";




export default function Products() {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)

    const componentMounted = true

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const res = await fetch("https://fakestoreapi.com/products")
            if (componentMounted) {
                setData(await res.clone().json())
                setFilter(await res.json())
                setLoading(false)
                console.log(filter)
            }

            return () => {
                componentMounted = false
            }
        }

        getProduct()
    }, [])

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={250}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={250}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={250}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={250}/>
                </div>
            </>
        )
    }

    const filterProduct = (cat) => {
        const updateList = data.filter((x) => x.category === cat)
        setFilter(updateList)
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>
                        All 
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>
                        {"Men's clothing"} 
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>
                        {"Women's clothing"}
                        </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>
                        Jewelery
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>
                        Electronic
                    </button>
                </div>
                {filter.map((Product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4" key={Product.id}>
                                    <img src={Product.image} className="card-img-top" alt={Product.title} height="250px"/>
                                        <div className="card-body">
                                            <h5 className="card-title mb-0"> {Product.title.substring(0, 12)} </h5>
                                            <p className="card-text lead fw-bold"> {Product.price} $ </p>
                                            <NavLink to={`/products/${Product.id}`} className="btn btn-outline-dark"> Buy Now </NavLink>
                                        </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        ) 

    }

    return (
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </>
    )
}

