import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'
import ProjectsTitle from '../components/ProjectsTitle'
import Projects from '../components/Projects'

import React from 'react'
function MainPage() {
    return(
        <div className="container-fluid">

            <Header/>
            <Body/>
            <ProjectsTitle/>
            <Projects 
                name="WHAT'S THE COOLDOWN?"
                num="1"
                hrefP="../../public/hi.html"
                hrefC=""
            />
            <Projects 
                name="WHAT'S THE COOLDOWN?"
                num="2"
                hrefP=""
                hrefC=""
            />
            <Projects 
                name="WHAT'S THE COOLDOWN?"
                num="3"
                hrefP=""
                hrefC=""
            />
            <Footer/>
        </div>

    )
    
}


export default MainPage