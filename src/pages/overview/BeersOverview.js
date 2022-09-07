import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar"
import { Link } from "react-router-dom"
import './BeersOverview.css'

const BeersOverview = () => {
    const [beers, setBeers] = useState([])

    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(res => res.json())
            .then(data => setBeers(data))
    }, [])

    return (
        <>

            <h2>This is the Overview of Beers</h2>
            {beers.map((item) => {
                return (
                    <article className="beerTeaser">
                        <img src={item.image_url} alt="" />
                        <div>
                            <h3>{item.name}</h3>
                            <p>{item.tagline}</p>
                            <p>created by: {item.contributed_by}</p>
                            <Link key={item._id} to={`/beers/${item._id}`}>Details</Link>
                        </div>
                    </article>
                )
            })}
            <Navbar />

        </>
    )
}

export default BeersOverview