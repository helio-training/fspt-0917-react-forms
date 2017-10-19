import React, { Component } from 'react'

export default class extends Component {

  state = {
    email: '',
    password: '',
  }

  handleSubmit = (e) => {
    e.preventDefault()
    
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>

        <div>
          <input type="email" name="email" placeholder="Email Address" required
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" required minLength="3"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    )
  }
}