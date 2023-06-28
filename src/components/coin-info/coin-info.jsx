import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Coin-info.scss';

export default function CoinInfo() {
    const params = useParams();
    const [coins, setCoins] = useState({});
    const url = `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://api.coingecko.com/api/v3/coins/${params.coinId}`
    )}`;

    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                const response = JSON.parse(res.data.contents);
                setCoins(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [url]);

    return (
        <>
            <h1>{coins.id}</h1>
        </>
    );
}
