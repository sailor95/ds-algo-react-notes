import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';

import MyNavbar from './components/ui/MyNavbar'
import Home from './components/main-pages/home/Home';
import ReactPage from './components/main-pages/react';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Route exact path="/" component={Home} />
      <ReactPage />
    </div>
  );
}

export default App;
