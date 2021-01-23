import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import ReactPlayer from "react-player"
import NavigationBar from '../../components/navigationBar'

import resonance_img_1 from '../../images/reSonance/resonance_closeUp.JPG'; 
import resonance_img_2 from '../../images/reSonance/resonance_system.png'; 
import resonance_img_3 from '../../images/reSonance/resonance_lab.png'; 
import resonance_img_4 from '../../images/reSonance/resonance_psv_setup.png'; 
import resonance_img_5 from '../../images/reSonance/resonance_psv.JPG'; 

const Mainpage = styled.div`
background-color: #F2F2F2;
min-height: 100vh;
`;

const ProjectTitle = styled.h1`
  font-size: 4em;
  color: #262626;
  padding-top:1em;
  text-align: center;
  font-family: 'Nutito-Regular';
`;

const ProjectSubTitle = styled.h2`
  font-size: 1.2em;
  color: #7F7F7F;
  text-align: center;
  font-family: 'Nutito-Regular';
`;

const ProjectIntroText= styled.p`
  font-size: 1em;
  text-align: center;
  color: #807F7F;
  font-family: 'Nutito-Light';
`;

const LinkText = styled.a`
  font-size: 1em;
  padding-left:0.5em;
  padding-right:0.5em;
  color: #4C8AC6;
  font-family: 'Nutito-Light';
  &:hover {
    color:#0063b2;
    font-family: 'Nutito-Regular';
  }
`;

const ProjectDiscriptionText= styled.p`
  font-size: 0.8em;
  padding-left:8em;
  padding-right:5em;
  text-align: left;
  color: #807F7F;
  font-family: 'Nutito-Light';
`;

export const  ResonancePage= ()=> { 
   return (     
      <Mainpage>

        <NavigationBar theme={'light'}/>

        <Grid container spacing={2}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <ProjectTitle>
                RESonance
              </ProjectTitle>
            </Grid>
            <Grid item xs={12}>
              <ProjectSubTitle>
              A Biofeedback Mind-Room for Immersive Relaxation Experience
              </ProjectSubTitle>
            </Grid>
            <Grid item xs={12}>
              <ProjectIntroText>
              RESonance is a lightweight, room-scale audio-visual biofeedback system for relaxation training. 
              RESonance harnesses ambient lights and natural sound to create an immersive environment where users can know about their physiological states in real-time. 
              On the one hand, as a biofeedback interface, RESonance presents heart rate variability (HRV) data to help the users learn and practice self-regulation (i.e., resonance breathing) for relaxation. 
              The design principle of ‘natural coupling’ was employed in interface design to provide a gentle-yet-intuitive representation of biofeedback.  
              On the other hand, the stimuli of light and soundscape may lead to an enhanced relaxation effect.  
              </ProjectIntroText>
            </Grid>

            <Grid item xs={12}>
            <div style={{textAlign:'center'}}>
              <img src={resonance_img_1} width="77%"/>
            </div>
            </Grid>

            <Grid item xs={12}>
              <div>
                  <ReactPlayer style={{margin: '0 auto'}}
                      url="https://vimeo.com/265450859"
                    />
              </div>
            </Grid>

            <Grid item xs={12}>
            <div style={{textAlign:'center'}}>
              <img src={resonance_img_2} width="77%"/>
            </div>
            </Grid>
                    
            <Grid item xs={12}>
            <ProjectDiscriptionText>
             The heart rate variability (IBI and HRV) data are measured by a PPG sensor on the figner, and applied to control the brightness, color and distribution of 
             the multiple ambient light sources in the room.
            </ProjectDiscriptionText>
            </Grid>

            <Grid item xs={12}>
            <div style={{textAlign:'center'}}>
              <img src={resonance_img_3} width="77%"/>
            </div>
            </Grid>

            <Grid item xs={12}>
            <ProjectDiscriptionText>
            As the user breathes in, the brightness is transferred to the center light close to the body. 
            Conversely, on exhale, and the brightness is transferred to the ambient lights far from the body. 
            Along with the deep breathing, when the user achieves better relaxation, 
            the improved HRV will lead the lights to become more saturated blue-green.
            </ProjectDiscriptionText>
            </Grid>

            <Grid item xs={12}>
            <div style={{textAlign:'center'}}>
              <img src={resonance_img_4} width="77%"/>
            </div>
            </Grid>


            <Grid item xs={12}>
              <div style={{textAlign:'center'}}>
                <img src={resonance_img_5} width="77%"/>
              </div>
            </Grid>

              <Grid item xs={12}>
                <ProjectDiscriptionText>
                  <strong className='strongtext'> Credits </strong>: <br/>
                    RESonance is supported by the research team (Prof.Loe Feijs, Dr.Jun Hu, Dr. Mathias Funk, Dr. Ronghao Liang), Industrial Design, TU/e and PSV.
                  <br/>
                  <strong className='strongtext'> Publication</strong>: <br/>
                    Yu, B., Hu, J., Funk, M., Liang, R. H., Xue, M., & Feijs, L.
                    <LinkText href="https://ieeexplore.ieee.org/abstract/document/8404138"  target="_blank"> 
                    RESonance: Lightweight, room-scale audio-visual biofeedback for immersive relaxation training. 
                    </LinkText>  <em className='journalname'>IEEE Access</em>, 2018
                </ProjectDiscriptionText>
                <br/>
                <br/>

              </Grid>
            </Grid>

          </Grid>
          <Grid item xs={3}></Grid>
         
          </Grid>

    </Mainpage>
    )
 }






