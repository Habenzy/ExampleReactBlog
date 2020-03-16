import React from 'react'

class Greeting extends React.Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.changeGreeting}>
          <input type='text' name='newGreeting'/>
          <input type='submit' />
        </form>
        <h1>{this.props.greeting}</h1>
      </div>
    )
  }
}

export default Greeting
