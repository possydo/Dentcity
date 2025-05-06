
import { Fragment } from 'react';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Layouts from "./components/Layout";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Booking from './pages/Booking';



const routes = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element= {<Layouts/>} >
    <Route index path='/Home' element={<Home />} />
    <Route path='/Contact' element={ <Contact/>} />
    <Route path='/Booking' element={ <Booking/>} />
  </Route>
))






function App() {
  return (
    <Fragment>
    <RouterProvider router={routes}/>
    </Fragment>

  );
}

export default App;
