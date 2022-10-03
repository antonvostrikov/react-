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
    // const cars = this.state.cars
    return (
      <div className="App" style={{width: '600px', margin: '0 auto'}}>
        <span>{this.state.title}</span>
        <input type="text" onChange={this.changeInput} />
        <button onClick={this.changeColor}>Add Title</button>
        { this.state.cars.map((car, index) => {
          return (
            <Car key={index} car={car.car} model={car.model} engine={car.engine} color={car.color} changeTitle={() => this.changeTitle(car.car)}/>
          )
        }) }
      </div>
    );
  }
}

export default App;
