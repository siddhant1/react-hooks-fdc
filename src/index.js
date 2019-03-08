import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import Context from './demoContext.js'
import Counter from './counter';

class App extends React.Component {
  render() {
    return (
      <Context.Provider value={{color: '#092327'}}>
        <div className="App container2">
          {/* <img
          style={{height: '150px'}}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png"
        />
        <h1> Intro to React Hooks</h1>

        <h2>@dev_siddhant</h2> */}
          <Counter />
        </div>
      </Context.Provider>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
