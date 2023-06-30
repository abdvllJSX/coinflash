import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify'
import Loader from '../loader/loader';
import './Coin-info.scss';

export default function CoinInfo() {
    const params = useParams();
    const [coins, setCoins] = useState({});
    const [loading, setLoading] = useState(true)
    const url = `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://api.coingecko.com/api/v3/coins/${params.coinId}`
    )}`;

    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                const response = JSON.parse(res.data.contents);
                console.log(res)
                setCoins(response);
                setLoading(false); // Set loading state to false after successful data fetch
            })
            .catch((error) => {
                console.log(error);
                setLoading(false); // Set loading state to false in case of an error
            });
    }, [url]);

    console.log(coins);

    if (loading) {
        return <Loader />;
    }

    console.log(coins)
    return (
        <>
            <div className="coin-container">
                <div className="content">
                    <h1>{coins.name}</h1>
                </div>

                <div className="content">
                    <div className="rank">
                        <span className="rank-btn">Rank #{coins.market_cap_rank}</span>
                    </div>

                    <div className="info">
                        <div className="coin-heading">
                            {coins.image ? <img src={coins.image.small} /> : null}
                            <p>{coins.name}</p>
                            <p>{coins.symbol}</p>
                        </div>

                        <div className="coin-price">
                            <h1>${coins.market_data.current_price.usd.toLocaleString()}</h1> 
                        </div>
                    </div>
                </div>

                <div className="content">
                    <table>
                        <thead>
                            <tr>
                                <th>1h</th>
                                <th>24h</th>
                                <th>7d</th>
                                <th>14d</th>
                                <th>30d</th>
                                <th>1yr</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>{coins.market_data?.price_change_percentage_1h_in_currency ? coins.market_data.price_change_percentage_1h_in_currency.usd : null}</td>
                                <td>{coins.market_data?.price_change_percentage_24h_in_currency ? coins.market_data.price_change_percentage_24h_in_currency.usd : null}</td>
                                <td>{coins.market_data?.price_change_percentage_7d_in_currency ? coins.market_data.price_change_percentage_7d_in_currency.usd : null}</td>
                                <td>{coins.market_data?.price_change_percentage_14d_in_currency ? coins.market_data.price_change_percentage_14d_in_currency.usd : null}</td>
                                <td>{coins.market_data?.price_change_percentage_30d_in_currency ? coins.market_data.price_change_percentage_30d_in_currency.usd : null}</td>
                                <td>{coins.market_data?.price_change_percentage_1y_in_currency ? coins.market_data.price_change_percentage_1y_in_currency.usd : null}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="content">
                    <div className="stats">
                        <div className="left">
                            <div className="row">
                                <h4>24 Hours Low</h4>
                                {coins.market_data ? <p>${coins.market_data.low_24h.usd.toLocaleString()}</p> : null}
                            </div>

                            <div className="row">
                                <h4>24 Hours High</h4>
                                {coins.market_data ? <p>${coins.market_data.low_24h.usd.toLocaleString()}</p> : null}

                            </div>

                        </div>
                        <div className="right">
                            <div className="row">
                                <h4>Martket Cap</h4>
                                {coins.market_data ? <p>${coins.market_data.market_cap.usd.toLocaleString()}</p> : null}
                            </div>

                            <div className="row">
                                <h4>Circulating Supply</h4>
                                {coins.market_data ? <p>${coins.market_data.circulating_supply.toLocaleString()}</p> : null}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="about">
                        <h3>About</h3>
                        <p dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(coins.description ? coins.description.en : '')
                        }}>

                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
