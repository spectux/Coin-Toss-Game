import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    headsCount: 0,
    tailsCount: 0,
    totalCount: 0,
    tossResult: '',
  }

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState(prevState => ({
      tossResult: tossResult === 0 ? 'heads' : 'tails',
      totalCount: prevState.totalCount + 1,
      headsCount:
        tossResult === 0 ? prevState.headsCount + 1 : prevState.headsCount,
      tailsCount:
        tossResult === 1 ? prevState.tailsCount + 1 : prevState.tailsCount,
    }))
  }

  render() {
    const {headsCount, tailsCount, totalCount, tossResult} = this.state
    return (
      <div>
        <h1>Coin Toss Game</h1>
        <p>Heads (or) Tails</p>
        <div className="coin-toss-container">
          <div className="coin-image-container">
            <img
              src={`https://assets.ccbp.in/frontend/react-js/${tossResult}-img.png`}
              alt="toss result"
              className="coin-image"
            />
            <p className="toss-result">{tossResult.toUpperCase()}</p>
          </div>
          <div className="counts-container">
            <p>Total: {totalCount}</p>
            <p>Heads: {headsCount}</p>
            <p>Tails: {tailsCount}</p>
          </div>
          <button className="toss-button" onClick={this.tossCoin}>
            Toss Coin
          </button>
        </div>
      </div>
    )
  }
}

export default CoinToss
