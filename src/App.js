import React from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import ProjectsTitle from './components/ProjectsTitle'
import Projects from './components/Projects'


function App() {
  return (
    <div className="container-fluid">
      <Header/>
      <Body/>
      <ProjectsTitle/>
      <Projects 
        name="WHAT'S THE COOLDOWN?"
        num="1"
        hrefP=""
        hrefC=""
      />
      <Projects 
        name="WHAT'S THE COOLDOWN?"
        num="1"
        hrefP=""
        hrefC=""
      />
      <Projects 
        name="WHAT'S THE COOLDOWN?"
        num="1"
        hrefP=""
        hrefC=""
      />
      <Footer/>
    </div>
    
  );
}

export default App;
