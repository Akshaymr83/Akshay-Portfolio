import React from 'react';
import "./app.css";
import Header from "./components/header/Header";
import Home from './home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Works from './components/works/Works';
import Form from './components/Form/form';
import Down from './components/DownNav/Down';




const App = () => {
  return (
    <>
    <Header />
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualification/>
      <Works/>
      <Form/>
      <Down/>
    </main>
    </>
  )
}

export default App
