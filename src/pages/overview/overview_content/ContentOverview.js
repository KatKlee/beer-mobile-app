import { Link } from "react-router-dom";

const ContentOverview = () => {
    return (
        <>
            <img src="" alt="" />
            <div>
                <h3>Beer Name</h3>
                <p>Hier steht ein Slogan</p>
                <p>created by: Produzentenname</p>
                <Link to='/beers/beerID'>Zu den Details</Link>
            </div>
        </>
    )
}

export default ContentOverview