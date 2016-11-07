import React, { Component } from 'react'
import ReactDom, { render } from 'react-dom'

class App extends Component{
    render(){
        return <h1><div> react 学习,这样很完美 </div></h1>
    }
}

render(<App />, document.getElementById('app'))

// document.getElementById('app').innerHTML = "<h1>xxxxxx</h1>";
