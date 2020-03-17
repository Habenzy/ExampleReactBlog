import React from 'react'


class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount() {
    this.getUserData()
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

  render() {

    return (
      <div className='head' >
        {this.state.userData ?
          this.state.userData.map((user) => {
            return <h4 key={user.id} onClick={this.props.displayPosts}>{user.name}</h4>
          })
          : <h1>Loading . . . </h1>
        }
      </div>
    )
  }

}

export default Header
