import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar"
import { Link } from "react-router-dom"

const BeerRandom = () => {
    const [random, setRandom] = useState([])

    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRandom(data)
            })
    }, [])

    return (
        <>
            <img src={random.image_url} alt="" />
            <h1>{random.name}</h1>
            <p>{random.tagline}</p>
            <p>First brewed: {random.first_brewed}</p>
            <p>Attenuation Level: {random.attenuation_level}</p>
            <p>Produzent: {random.contributed_by}</p>
            <p>{random.description}</p>
            <Link to='/'>Zurück</Link>
            <Navbar />
        </>
    )
}

export default BeerRandom