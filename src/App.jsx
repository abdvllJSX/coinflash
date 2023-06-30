import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import CoinInfo from './components/coin-info/coin-info';
import Navbar from './components/navbar/navbar';
import Loader from './components/loader/loader';

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true); // Set initial loading state to true

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setCoins(data);
        setLoading(false); // Set loading state to false after successful data fetch
      } catch (error) {
        console.log(error);
        setLoading(false); // Set loading state to false in case of an error
      }
    };

    fetchData();
  }, []);

  console.log(coins);

  return (
    <>
      <Navbar />
      {loading ? ( // Render Loader component if loading state is true
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home coins={coins} />} />
          <Route path="/coins/:coinId" element={<CoinInfo />} />
        </Routes>
      )}
    </>
  );
}

export default App;
