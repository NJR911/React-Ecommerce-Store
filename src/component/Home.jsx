import bgImage from '../assets/bg.jpg'
import Products from './products'

export default function Home() {

    return (
        <>

            <div className="hero">
                <div className="card text-bg-dark border-0">
                    <img src={bgImage} className="card-img " alt="" height="650px" />
                    <div className="card-img-overlay">
                        <div className="container">

                        </div>
                    </div>
                </div>

                <Products />
            </div>
        </>
    )
}


