import React from 'react'

class Greeting extends React.Component {

  render() {
    return (
      <div>
        <form >
          <input type='text' name='newGreeting'/>
          <input type='submit' />
        </form>
        <h1>Hello</h1>
      </div>
    )
  }
}

export default Greeting
