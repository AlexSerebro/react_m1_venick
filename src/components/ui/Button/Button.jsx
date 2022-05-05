import { Component } from "react";
import PropTypes from 'prop-types';
  
  export class Button extends Component{
  state = {
    counter: 1
  }

  updateCounter=() =>{
    this.setState((prevState) => (
      { counter: prevState.counter + 1 }))
    }
    render() {
      return <button onClick={this.updateCounter}>Click Me { this.state.counter}</button>
    }
}

// Button.propTypes = {
//   list: PropTypes.arrayOf(StatList)
// };