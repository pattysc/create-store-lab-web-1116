import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super()

    this.state = {
      userName: '',
      hometown: ''
    }
  }

  usernameKeydown(event){
    this.setState({ userName: event.target.value })
  }

  hometownKeydown(event){
    this.setState({
      hometown: event.target.value
    })
  }

  userSubmit(event){
    event.preventDefault()
    this.props.store.dispatch({type: 'ADD_USER', payload: this.state})
  }

  render(){
    return(
      <div>
        user input
        <form onSubmit={this.userSubmit.bind(this)}>
          <input type="text" onChange={this.usernameKeydown.bind(this)}/>
          <input type="text" onChange={this.hometownKeydown.bind(this)}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

module.exports = UserInput
