import React from 'react';
import './App.css';
import Header from './Header';
import Clock from './Clock';

class App extends React.Component {

  constructor(props){
    super(props)

    this.state= {
      postsDisplayed: false
    }
  }

  togglePostDisplay = () => {
    this.setState((previousState => {
      return {
        postsDisplayed: !previousState.postsDisplayed
      }
    }))
  }

  render() {
    return (
      <div className="App">
        <Clock />
        <Header displayPosts={this.togglePostDisplay} />
        {this.state.postsDisplayed ? <h3>Here's all the posts!</h3>: null}
      </div>
    );
  }
}

export default App;
