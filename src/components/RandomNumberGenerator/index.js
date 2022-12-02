import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNum: 0}

  onGenerateRandomNum = () => {
    const updateRandomNum = Math.ceil(Math.random() * 100)
    this.setState({
      randomNum: updateRandomNum,
    })
  }

  render() {
    const {randomNum} = this.state
    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.onGenerateRandomNum}
          >
            Generate
          </button>
          <p className="heading">{randomNum}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
