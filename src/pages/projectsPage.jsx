import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import ProjectCard from '../components/projectCard'
import NavigationBar from '../components/navigationBar'
import { motion } from "framer-motion"

import BioMirror_IMAGE from '../images/projectCards/BioMirror_profile.jpg';
import HeartCalligraphy_IMAGE from '../images/projectCards/Heart-Calligraphy_profile.png';
import LightSit_IMAGE from '../images/projectCards/lightSit_profile.JPG'
import Resonance_IMAGE from '../images/projectCards/resonance_profile.JPG'
import HeartBloom_IMAGE from '../images/projectCards/heartbloom_profile.png'
import Placeholder_IMAGE from '../images/projectCards/placeholder.png'

const Mainpage = styled.div`
  background-color: #282947;
  min-height: 100vh;
`;

export const ProjecstPage = ()=> { 

   return (     
      <Mainpage>
          <NavigationBar theme={'dark'}/>
      <br/>
      <br/>
      <motion.div  
         initial={{ opacity: 0,}}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}>  
      
      <Grid container spacing={2}>

        <Grid item xs={0} sm={0} md={2}  lg={2} ></Grid>

        <Grid item xs={12} sm={12} md={4}  lg={4}>
          <ProjectCard
                image={BioMirror_IMAGE }
                name={"BioMirror"}
                description={
                  "In this work, we investigated the interaction between ourselves and the spaces we inhabit, translating internal bodily processes to tactile surfaces."}
                linkto={"/BioMirror"}
                keypwords={['Tangible Interface', 'Shape-changing Interface','HCI','Biofeedback']}
              />
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4}>
          <ProjectCard
                image={HeartCalligraphy_IMAGE}
                name={"Heart Calligraphy"}
                description={"In this work, we explored the role of the body as a channel through which physiology manifests itself as a form of beauty."}
                linkto={"/HeartCalligraphy"}
                keypwords={['Artistic Visualization', 'Live-art Installation','Biofeedback']}
              />      
        </Grid>

        <Grid item xs={0} sm={0} md={2}  lg={2} ></Grid>


         <Grid item xs={0} sm={0} md={2}  lg={2} ></Grid>

         <Grid item xs={12} sm={12} md={4}  lg={4} >
            <ProjectCard
                  image={HeartBloom_IMAGE}
                  name={"Heart Bloom"}
                  description={"In this work, we explored the role of the body as a channel through which physiology manifests itself as a form of beauty."}
                  linkto={"/HeartBloom"}
                  keypwords={['Metaphorical Visualization','Live-art Installation','Biofeedback','Charity design']}
                />   
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4}>
          <ProjectCard
                image={Resonance_IMAGE}
                name={"RESonance"}
                description={"In this work, we investigate a biofeedback environment that enhances the self-awareness and self-regulation of its inhabitant for better health."}
                linkto={"/Resonance"}
                keypwords={['Ambient Interface','Immersive Experience','Biofeedback']}
              />  
        </Grid>

        <Grid item xs={0} sm={0} md={2} lg={2}></Grid>

        <Grid item xs={0} sm={0} md={2} lg={2}></Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} > 
          <ProjectCard
                image={LightSit_IMAGE}
                name={"LightSit"}
                description={"In this work, we designed a health-promoting system that can easily embed into a workplace to support fitness and relaxation breaks."}
                linkto={"/LightSit"}
                keypwords={['Unobtrusive Sensing','Ambient Light','Workplace heath']}
              />  
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4}> </Grid>

        <Grid item xs={0} sm={0} md={2} lg={2}></Grid>

      </Grid>
      
      </motion.div>   
    </Mainpage>

    )
   }







