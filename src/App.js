import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configurestore';
import Main from './components/MainComponent'
import './App.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

const store = ConfigureStore();

export default App;
