import CoinInfo from '../coin-info/coin-info';
import Coin from '../coin/coin';
import './home.scss';
import { Link } from 'react-router-dom';

export default function Home({ coins }) {
    return (
        <div className="home-container">
            <div className="home-wrapper">
                <div className="heading">
                    <p>#</p>

                    <div className="diff">
                        <p className="coin-name">coin</p>

                    </div>

                    <div className="paragraph">
                        <p>price</p>
                    </div>

                    <div className="paragraph hide-mobile">
                        <p className="hide-mobile">Volume</p>
                    </div>

                    <div className="paragraph hide-mobile">
                        <p className="hide-mobile">MKT cap</p>
                    </div>
                </div>
                {coins.map((coin) => (
                    <Link to={`/coins/${coin.id}`} key={coin.id}>
                        <Coin coins={coin} />
                    </Link>
                ))}
            </div>
        </div>
    );
}
