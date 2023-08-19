import {Component} from 'react'

class CoinToss extends Component {
  state = {isHead: true, headsScore: 0, tailsScore: 0}

  onClickTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    if (tossResult === 0) {
      this.setState(prevState => ({
        isHead: true,
        headsScore: prevState.headsScore + 1,
      }))
    } else {
      this.setState(prevState => ({
        isHead: false,
        tailsScore: prevState.tailsScore + 1,
      }))
    }
  }

  render() {
    const {isHead, headsScore, tailsScore} = this.state
    const srcImage = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    const totScore = headsScore + tailsScore

    return (
      <>
        <div className="coinTossContainer">
          <div className="coinTossBox">
            <h1>Coin Toss Game</h1>
            <p>Heads (or) Tails</p>
            <div>
              <img src={srcImage} alt="toss result" width="200px" />
            </div>
            <button
              type="button"
              className="toss-btn"
              onClick={this.onClickTossCoin}
            >
              Toss coin
            </button>
            <div className="resultContainer">
              <p>Total: {totScore}</p>
              <p>Heads: {headsScore}</p>
              <p>Tails: {tailsScore}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default CoinToss
