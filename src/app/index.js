import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {IntroPage, ProjecstPage, AboutPage, BioMirrorPage, HeartCalligraphyPage, LightSitPage, ResonancePage,HeartBloomPage, PhotographyPage, BlogsPage} from '../pages/index'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/custom.css'

function App() {

    return (
        <Router>
                <Route path="/" exact component={IntroPage}/>
                <Route path="/about" exact component={AboutPage}/>
                <Route path="/photography" exact component={PhotographyPage}/>
                <Route path="/projects" exact component={ProjecstPage}/>         
                <Route path="/blogs" exact component={BlogsPage}/>
                <Route path="/projects/BioMirror" exact component={BioMirrorPage}/>
                <Route path="/projects/HeartCalligraphy" exact component={HeartCalligraphyPage}/>
                <Route path="/projects/LightSit" exact component={LightSitPage}/>
                <Route path="/projects/Resonance" exact component={ResonancePage}/>
                <Route path="/projects/HeartBloom" exact component={HeartBloomPage}/>      
        </Router>

    )
}

export default App
