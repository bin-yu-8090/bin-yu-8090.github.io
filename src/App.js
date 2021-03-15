import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { AnimatePresence } from "framer-motion";

import {BlogsPage, PhotographyPage, AboutPage, 
        BioMirrorPage, HeartCalligraphyPage, LightSitPage, ResonancePage,HeartBloomPage, 
        TemplateBlogPage} from './pages/index'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style/custom.css'
import Global from "./style/global";
import Home from "./pages/Home";
import ProjectPage from './pages/projectPage'

function App() {
    return (
        <>
        <Global />
        <AnimatePresence>
            <Router>
                <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" exact component={AboutPage}/>
                        <Route path="/photography" exact component={PhotographyPage}/>
                        <Route path="/projects" exact component={ProjectPage}/>         
                        <Route path="/blogs" exact component={BlogsPage}/>
                        <Route path="/BioMirror" exact component={BioMirrorPage}/>
                        <Route path="/HeartCalligraphy" exact component={HeartCalligraphyPage}/>
                        <Route path="/LightSit" exact component={LightSitPage}/>
                        <Route path="/Resonance" exact component={ResonancePage}/>
                        <Route path="/HeartBloom" exact component={HeartBloomPage}/>    
                        <Route path="/Blog-title" exact component={TemplateBlogPage}/>  
                </Switch>
            </Router>
       </AnimatePresence>
       </>
    )
}

export default App


{/* <AnimatePresence>
<Router>
  <Switch>
        <Route path="/" exact component={IntroPage}/>
        <Route path="/about" exact component={AboutPage}/>
        <Route path="/photography" exact component={PhotographyPage}/>
        <Route path="/projects" exact component={ProjecstPage}/>         
        <Route path="/blogs" exact component={BlogsPage}/>
        <Route path="/BioMirror" exact component={BioMirrorPage}/>
        <Route path="/HeartCalligraphy" exact component={HeartCalligraphyPage}/>
        <Route path="/LightSit" exact component={LightSitPage}/>
        <Route path="/Resonance" exact component={ResonancePage}/>
        <Route path="/HeartBloom" exact component={HeartBloomPage}/>    
        <Route path="/Blog-title" exact component={TemplateBlogPage}/>  
</Switch>
</Router>
</AnimatePresence> */}