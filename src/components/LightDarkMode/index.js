import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isLightMode: true,
  }

  onClickButton = () => {
    this.setState(prevState => ({isLightMode: !prevState.isLightMode}))
  }

  render() {
    const {isLightMode} = this.state
    const modeClassName = isLightMode ? 'light-mode' : 'dark-mode'
    const buttonText = isLightMode ? 'Dark Mode' : 'Light Mode'

    return (
      <div className="app-bg-container">
        <div className={`mode-container ${modeClassName}`}>
          <h1>Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.onClickButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
