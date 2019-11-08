import React from 'react'
import './App.css'
<<<<<<< HEAD
import {
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect} from "react-router-dom"
import MainPage from './pages'
import lolApi from './pages/lolApi'
import NotFoundPage from './pages/404'
=======
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import ProjectsTitle from './components/ProjectsTitle'
import Projects from './components/Projects'
>>>>>>> 165a2071d2a593bc74674f1a2f661734c348f24b


function App() {
  return (
<<<<<<< HEAD
  <Router>
    <Switch>
      <Route exact path="/" component={MainPage}/>
      <Route path="/lolApi" component={lolApi}/>
      <Route component={NotFoundPage}/>
    </Switch> 
  </Router>
  )
=======
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
>>>>>>> 165a2071d2a593bc74674f1a2f661734c348f24b
}

export default App;
