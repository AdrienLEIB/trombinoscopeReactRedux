import React from 'react';
import logo from './logo.svg';
import './App.css';
// import ThemeProvider from 'styled-components';
import {Provider} from 'react-redux';

import Todo from './component/todo';
import Trombinoscope from './component/trombinoscope';

import { store } from './config/store';
// import { theme } from './config/theme';

function App() {
  return (
    <Provider store={store} className="App">
      <Todo/>
      <Trombinoscope/>
    </Provider>
  );
}

export default App;
