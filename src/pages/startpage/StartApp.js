import './StartApp.css';
import beersOverview from './img/beers_overview.png';
import beerRandom from './img/beer_random.png';
import { Link } from 'react-router-dom';

function StartApp() {
  return (
    <div className="App">
      <Link to='/beers' className='linkToOverview'>
        <img src={beersOverview} alt="" />
        <h1>All Beers</h1>
        <p>Hier steht ein Text</p>
      </Link>
      <Link to='/beers/random' className='linkToRandom'>
        <img src={beerRandom} alt="" />
        <h1>Random Beer</h1>
        <p>Hier steht Beispieltext</p>
      </Link>
    </div>
  );
}

export default StartApp;
