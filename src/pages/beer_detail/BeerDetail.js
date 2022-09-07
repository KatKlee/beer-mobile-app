import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Navbar from "../../components/Navbar"

const BeerDetail = () => {
    const params = useParams()
    const [beer, setBeer] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${params.beerid}`)
            .then(res => res.json())
            .then(data => setBeer(data))
    }, [])

    return (
        <>
            <img src={beer.image_url} alt="" />
            <button onClick={() => navigate(-1)}>Zurück</button>
            <h1>{beer.name}</h1>
            <p>{beer.tagline}</p>
            <p>First brewed: {beer.first_brewed}</p>
            <p>Attenuation Level: {beer.attenuation_level}</p>
            <p>Produzent: {beer.contributed_by}</p>
            <p>{beer.description}</p>

            <Navbar />
        </>
    )
}

export default BeerDetail