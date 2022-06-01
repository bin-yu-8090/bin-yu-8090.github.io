import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
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
        <HashRouter>
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
                        <Route path="/HRVVisualization" exact component={HRVVisualizationPage}/> 
                        <Route path="/MetaphoricalVisualization" exact component={MetaphoricalVisualizationPage}/> 
                        <Route path="/Blog-title" exact component={TemplateBlogPage}/>  
                        <Route path="/FutureBiofeedback" exact component={FutureBiofeedbackBlogPage}/>  
                </Switch>
         </HashRouter>
       </AnimatePresence>
       </>
    )
}

export default App


