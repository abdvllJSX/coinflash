import { useState, useEffect } from 'react';
import Home from './components/home/home';
function App() {
  const [coins, setCoins] = useState([])
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en'

  useEffect(() => {
    fetch(url).then(response => response.json()).then(data => setCoins(data))

  }, [])
  return (
    <>
    <Home coins ={coins}/>
    </>
  )
}

export default App