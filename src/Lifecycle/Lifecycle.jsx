import React, { Component } from 'react'

export default class Lifecycle extends Component {
    
    constructor(){
        console.log("Constructor method");
        super()
        this.state={
            count:0
        }
    }
    incr=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    componentDidMount=()=>{
        console.log("Componenet did mount");
    }
    componentDidUpdate=()=>{
        console.log("Component did update");
    }
    componentWillUnmount=()=>{
        alert("Component got unmounted")
        console.log("Got killed");
    }

  render() {
    console.log("Render method");
    return (
      <div>
        <button onClick={this.incre}>Increment</button>
      </div>
    )
  }
}
