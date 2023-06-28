import './coin.scss'
export default function Coin({coins}) {
    return (
        <>
            <div className="coin-row">
                <p>{coins.market_cap_rank}</p>
                <div className="img-symbol">
                    <img src={coins.image} alt="" />
                    <p>{coins.symbol.toUpperCase()}</p>
                </div>
                <p>{coins.current_price.toLocaleString()}</p>
                <p className="hide-mobile">{coins.price_change_percentage_24h.toLocaleString()}</p>
                <p className="hide-mobile">{coins.market_cap.toLocaleString()}</p>
            </div>
        </>
    )
}