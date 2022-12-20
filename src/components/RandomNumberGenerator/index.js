// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onClickGenerateButton = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({
      count: randomNumber,
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="para1">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            onClick={this.onClickGenerateButton}
            className="button"
            type="button"
          >
            Generate
          </button>
          <p className="para2">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
