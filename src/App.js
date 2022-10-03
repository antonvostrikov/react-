import React, { Component } from 'react'
import Car from './components/Car'

class App extends Component {
  state = {
    cars: [
      { car: 'Volkswaggen', model: 'Passat B5', engine: '1.8T AEB', color: 'Black' },
      { car: 'Renault', model: 'Symbol', engine: '1.4', color: 'Gray' },
      { car: 'Hyndai', model: 'Solaris', engine: '1.6', color: 'Gray' }
    ],
    title: ''
  }

  changeTitle = (newtitle) => {
    this.setState({
      title: newtitle
    })
  }

  changeInput = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  render() {
    const cars = this.state.cars
    return (
      <div className="App" style={{width: '600px', margin: '0 auto'}}>
        <span>{this.state.title}</span>
        <input type="text" onChange={this.changeInput} />
        <button onClick={this.changeColor}>Add Title</button>
        <Car car={cars[0].car} model={cars[0].model} engine={cars[0].engine} color={cars[0].color} changeTitle={this.changeTitle.bind(this, cars[0].car)}/> 
        <Car car={cars[1].car} model={cars[1].model} engine={cars[1].engine} color={cars[1].color} changeTitle={() => this.changeTitle(cars[1].car)}/>
        <Car car={cars[2].car} model={cars[2].model} engine={cars[2].engine} color={cars[2].color} changeTitle={this.changeTitle.bind(this, cars[2].car)}/>
      </div>
    );
  }
}

export default App;
