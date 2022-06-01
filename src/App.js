import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { AnimatePresence } from "framer-motion";

import {BlogsPage, PhotographyPage, AboutPage, 
        BioMirrorPage, HeartCalligraphyPage, LightSitPage, ResonancePage,HeartBloomPage, 
        HRVVisualizationPage, 
        TemplateBlogPage, 
        FutureBiofeedbackBlogPage,
        MetaphoricalVisualizationPage} from './pages/index'

        

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
                        <Route path="/bin-yu-8090.github.io" exact component={Home}/>
                        <Route path="/bin-yu-8090.github.io/about" exact component={AboutPage}/>
                        <Route path="/bin-yu-8090.github.io/photography" exact component={PhotographyPage}/>
                        <Route path="/bin-yu-8090.github.io/projects" exact component={ProjectPage}/>         
                        <Route path="/bin-yu-8090.github.io/blogs" exact component={BlogsPage}/>
                        <Route path="/bin-yu-8090.github.io/BioMirror" exact component={BioMirrorPage}/>
                        <Route path="/bin-yu-8090.github.io/HeartCalligraphy" exact component={HeartCalligraphyPage}/>
                        <Route path="/bin-yu-8090.github.io/LightSit" exact component={LightSitPage}/>
                        <Route path="/bin-yu-8090.github.io/Resonance" exact component={ResonancePage}/>
                        <Route path="/bin-yu-8090.github.io/HeartBloom" exact component={HeartBloomPage}/> 
                        <Route path="/bin-yu-8090.github.io/HRVVisualization" exact component={HRVVisualizationPage}/> 
                        <Route path="/bin-yu-8090.github.io/MetaphoricalVisualization" exact component={MetaphoricalVisualizationPage}/> 
                        <Route path="/bin-yu-8090.github.io/Blog-title" exact component={TemplateBlogPage}/>  
                        <Route path="/bin-yu-8090.github.io/FutureBiofeedback" exact component={FutureBiofeedbackBlogPage}/>  
                </Switch>
            </Router>
       </AnimatePresence>
       </>
    )
}

export default App


