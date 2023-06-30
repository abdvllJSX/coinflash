import './coin.scss'
export default function Coin({ coins }) {
    return (
        <>
            <div className="coin-row">
                <p>{coins.market_cap_rank}</p>
                <div className="img-symbol">
                    <img src={coins.image} alt="" />
                    <p>{coins.symbol.toUpperCase()}</p>
                </div>
                <div className="left">
                    <p>{coins.current_price.toLocaleString()}$</p>
                </div>
                <div className="left hide-mobile">
                    <p className="hide-mobile">{coins.price_change_percentage_24h.toLocaleString()}$</p>
                </div>
                <div className="left hide-mobile">
                    <p className="hide-mobile">{coins.market_cap.toLocaleString()}$</p>
                </div>
            </div>
        </>
    )
}