import React from 'react'
import Greeting from './Greeting'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      someKey: '',
      prevVal: 'initial value',
      greeting: "Why hello, hello"
    }
  }

  componentDidMount() {
    this.getUserData()
  }

  componentDidUpdate() {

    if (this.state.someKey !== this.state.prevVal) {

      console.log('Some Key has changed')

      this.setState({
        prevVal: this.state.someKey
      })
    }
    
  }

  getUserData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        return res.json()
      })
      .then(resJson => {
        this.setState({
          userData: resJson
        })
      })
  }

  changeGreeting = (event) => {
    event.preventDefault()
    console.log(event.target)

    this.setState({
      greeting: event.target.newGreeting.value
    })
  }

  render() {

    return (
      <div className='head' >
        <Greeting changeGreeting={this.changeGreeting} greeting={this.state.greeting} />
        <h1>{this.state.userData ? this.state.userData[this.props.userId].name : "Loading . . . "}</h1>
      </div>
    )
  }

}

export default Header
