import React, {Component} from 'react'
import Button from './button.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      buttonText: "change text"
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    if(event.target.innerHTML === 'change text') this.setState({buttonText: 'hit me again'})
    else this.setState({buttonText: 'change text'})
  }

  render(){
    return(
      <div>
        <h1>hello World</h1>
        <Button 
          handleClick = {this.handleClick}
          buttonText = {this.state.buttonText}
        />
      </div>
    )
  }
}

export default App
