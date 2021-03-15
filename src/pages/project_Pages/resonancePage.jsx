import React from 'react'
import Grid from '@material-ui/core/Grid'
import ReactPlayer from "react-player"
import NavigationBar from '../../components/navigationBar'

import resonance_img_1 from '../../images/reSonance/resonance_closeUp.JPG'; 
import resonance_img_2 from '../../images/reSonance/resonance_system.png'; 
import resonance_img_3 from '../../images/reSonance/resonance_lab.png'; 
import resonance_img_4 from '../../images/reSonance/resonance_psv_setup.png'; 
import resonance_img_5 from '../../images/reSonance/resonance_psv.JPG'; 


import{Mainpage, ProjectTitle, ProjectSubTitle, ProjectIntroText, LinkText, ProjectDiscriptionText, ProjectEndingText} from './styledComponents'


export const  ResonancePage= ()=> { 
   return (     
      <Mainpage>
        <NavigationBar theme={'light'}/>
        <Grid container spacing={2}>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <ProjectTitle>
              RESonance
              </ProjectTitle>
          </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
             <ProjectSubTitle>
             A Biofeedback Mind-Room for Immersive Relaxation Experience
              </ProjectSubTitle>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>


          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
            <ProjectIntroText>
              RESonance is a lightweight, room-scale audio-visual biofeedback system for relaxation training. 
              RESonance harnesses ambient lights and natural sound to create an immersive environment where users can know about their physiological states in real-time. 
              On the one hand, as a biofeedback interface, RESonance presents heart rate variability (HRV) data to help the users learn and practice self-regulation (i.e., resonance breathing) for relaxation. 
              The design principle of ‘natural coupling’ was employed in interface design to provide a gentle-yet-intuitive representation of biofeedback.  
              On the other hand, the stimuli of light and soundscape may lead to an enhanced relaxation effect.  
              </ProjectIntroText>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
          <div style={{textAlign:'center'}}>
              <img src={resonance_img_1} width="100%"/>
            </div>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
            <ReactPlayer style={{margin: '0 auto'}}
                        url="https://vimeo.com/265450859"
                        width="100%"
                      />
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>


          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
            <div style={{textAlign:'center'}}>
              <img src={resonance_img_2} width="100%"/>
            </div>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>


          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
          <ProjectDiscriptionText>
             The heart rate variability (IBI and HRV) data are measured by a PPG sensor on the figner, and applied to control the brightness, color and distribution of 
             the multiple ambient light sources in the room.
            </ProjectDiscriptionText>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>


          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
            <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
            <div style={{textAlign:'center'}}>
                <img src={resonance_img_3} width="100%"/>
              </div>
            </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
            <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
            <ProjectDiscriptionText>
              As the user breathes in, the brightness is transferred to the center light close to the body. 
              Conversely, on exhale, and the brightness is transferred to the ambient lights far from the body. 
              Along with the deep breathing, when the user achieves better relaxation, 
              the improved HRV will lead the lights to become more saturated blue-green.
            </ProjectDiscriptionText>
            </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>


          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
            <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
            <div style={{textAlign:'center'}}>
              <img src={resonance_img_4} width="100%"/>
            </div>
            </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
            <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
            <div style={{textAlign:'center'}}>
                <img src={resonance_img_5} width="100%"/>
              </div>
            </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
            <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
            <ProjectEndingText>
              <strong className='strongtext'> Credits </strong>: <br/>
                    RESonance is supported by the research team (Prof.Loe Feijs, Dr.Jun Hu, Dr. Mathias Funk, Dr. Ronghao Liang), Industrial Design, TU/e and PSV.
                  <br/>
                  <strong className='strongtext'> Publication</strong>: <br/>
                    Yu, B., Hu, J., Funk, M., Liang, R. H., Xue, M., & Feijs, L.
                    <LinkText href="https://ieeexplore.ieee.org/abstract/document/8404138"  target="_blank"> 
                    RESonance: Lightweight, room-scale audio-visual biofeedback for immersive relaxation training. 
                    </LinkText>  <em className='journalname'>IEEE Access</em>, 2018
              </ProjectEndingText>
            </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          </Grid>

    </Mainpage>
    )
 }






