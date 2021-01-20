import React, { Component } from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import ReactPlayer from "react-player"

const Mainpage = styled.div`
background-color: #F2F2F2;
min-height: 100vh;
`;

const ProjectTitle = styled.h1`
  font-size: 4em;
  color: #7F7F7F;
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
  color: #C19936;
  font-family: 'Nutito-Light';
  &:hover {
    color:  #7F7F7F;
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
        <Grid container spacing={2}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <ProjectTitle>
                RESONANCE
              </ProjectTitle>
            </Grid>
            <Grid item xs={12}>
              <ProjectSubTitle>
              A space responds to your body
              </ProjectSubTitle>
            </Grid>
            <Grid item xs={12}>
              <ProjectIntroText>
              RESonance is a lightweight, room-scale audio-visual biofeedback system for relaxation training. 
              RESonance harnesses ambient lights and nature sounds to create an immersive environment where users can know about their physiological states and activities in real time. 
              On one hand, as a biofeedback interface, RESonance presents heart rate viability (HRV) data to help the users learn and practice self-regulation (i.e., resonance breathing) for relaxation. 
              The design principle of ‘natural coupling’ was employed in interface design to provide a gentle-yet-intuitive representation of biofeedback.  
              On the other hand, we the stimuli of coloured light and nature sounds may lead to an enhanced relaxation effect. 
              </ProjectIntroText>
            </Grid>

            <Grid item xs={12}>
            <div style={{textAlign:'center'}}>
              <img src={require('../../images/reSonance/resonance_closeUp.JPG')} width="77%"/>
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
              <img src={require('../../images/reSonance/resonance_system.png')} width="77%"/>
            </div>
            </Grid>
                    
            <Grid item xs={12}>
            <ProjectDiscriptionText>
            Althrough the new way of working has many advantages, the more intelligent use of time, 
            space and resources often results in less exercise and more stress.
            LightSit offers a solution. A cushion fille
            </ProjectDiscriptionText>
            </Grid>

            <Grid item xs={12}>
            <div style={{textAlign:'center'}}>
              <img src={require('../../images/reSonance/resonance_lab.png')} width="77%"/>
            </div>
            </Grid>

            <Grid item xs={12}>
            <ProjectDiscriptionText>
            Althrough the new way of working has many advantages, the more intelligent use of time, 
            space and resources often results in less exercise and more stress.
            LightSit offers a solution. A cushion fille
            </ProjectDiscriptionText>
            </Grid>

            <Grid item xs={12}>
            <div style={{textAlign:'center'}}>
              <img src={require('../../images/reSonance/resonance_psv_setup.png')} width="77%"/>
            </div>
            </Grid>


            <Grid item xs={12}>
              <div style={{textAlign:'center'}}>
                <img src={require('../../images/reSonance/resonance_psv.JPG')} width="77%"/>
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
              </Grid>
            </Grid>

          </Grid>
          <Grid item xs={3}></Grid>
         
          </Grid>

    </Mainpage>
    )
 }






