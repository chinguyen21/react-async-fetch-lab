// create your App component here

import React, {Component} from 'react'

class App extends Component {
  state={
    data: []
  }

  async componentDidMount(){
    let res = await fetch("http://api.open-notify.org/astros.json")
    let data = await res.json()
    this.setState({data})
  }

  render(){
    return(
      <div>
        This is my App
      </div>
    )
  }
}

export default App;