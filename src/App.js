import React from 'react';
import './App.css';
import Head from './Components/Head';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Head/>
      <div id="wrapper">
      	<Header/>
      	<Content/>
      	<Footer/>
      </div>
    </div>
  );
}

export default App;
