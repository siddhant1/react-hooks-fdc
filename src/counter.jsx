import React from 'react'
import './styles.css'

export default class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {count: this.props.count}
  }

  increment() {
    this.setState(({count}) => ({count: count + 1}))
  }
  decrement() {
    this.setState(({count}) => ({count: count - 1}))
  }
  render() {
    return (
      <div className="container">
        <div onClick={this.increment} className="btn">
          +
        </div>
        <div className="count">{'0'}</div>
        <div onClick={this.decrement} className="btn">
          -
        </div>
      </div>
    )
  }
}

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//   }
// };
