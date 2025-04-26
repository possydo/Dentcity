// import logo from './logo.svg';
import { Fragment } from 'react';
import './App.css';
import Navs from './components/Nav';
import Home from '../src/pages/Home.js';

function App() {
  return (
    <Fragment>
      <Navs />
      <Home/>
    </Fragment>

  );
}

export default App;
