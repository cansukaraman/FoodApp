import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import MenuComponent from './components/MenuComponent'
import { food } from './data/Food';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: food
    };
  }

  render() {
    return (
      <div>
        <div className="App">
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Welcome Food Bar</NavbarBrand>
            </div>
          </Navbar>
          <MenuComponent dishes={this.state.dishes} />
        </div>
      </div>
    )
  }
}

export default App;
