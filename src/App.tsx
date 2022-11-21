import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes ,} from 'react-router-dom';
import HomeScreen from './Pages/HomeScreen';
import MainNav from './Components/MainNav';

function App() {
  return (
    <BrowserRouter>
    <MainNav/>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
