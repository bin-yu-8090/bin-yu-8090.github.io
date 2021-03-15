import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import ReactPlayer from "react-player"
import NavigationBar from '../../components/navigationBar'

import lightsit_img_1 from '../../images/lightSit/LightSit_pics-00.jpg'; 
import lightsit_img_2 from '../../images/lightSit/system.png'; 
import lightsit_img_3 from '../../images/lightSit/LightSit_pics-02.jpg'; 
import lightsit_img_4 from '../../images/lightSit/intervention_mode.jpg'; 
import lightsit_img_5 from '../../images/lightSit/LightSit_pics-03.jpg'; 
import lightsit_img_6 from '../../images/lightSit/stretch_mode.jpg'; 
import lightsit_img_7 from '../../images/lightSit/LightSit_pics-04.jpg'; 
import lightsit_img_8 from '../../images/lightSit/breathing_mode.jpg'; 


import{Mainpage, ProjectTitle, ProjectSubTitle, ProjectIntroText, LinkText,  ProjectDiscriptionText, ProjectSectionTitle, JumpLink, MultipleImgsFrame, ProjectEndingText} from './styledComponents'



export const LightSitPage = ()=> { 
   return (     
      <Mainpage>
        <NavigationBar theme={'light'}/>

        <Grid container spacing={2}>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <ProjectTitle>
              LightSit
              </ProjectTitle>
          </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
             <ProjectSubTitle>
             Subtle periods of rest and activity at your workstation
              </ProjectSubTitle>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>


          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
           <ProjectIntroText>
               Although the new way of working has many advantages, the more intelligent use of time, space and resources often result in less exercise and more stress.
                LightSit offers a solution. A cushion filled with sensors that discreetly register your breathing patterns and a light strip integrated in the monitor stand.
                If you have been sitting for too long, you are supported with stretching exercises for your back by the strip of light that shifts between left and right. 
                If you are suffering from stress, you are invited to concentrate on your breathing. Through the rhythm of the illuminating and dimming lights.
                LightSit contributes to office vitality initiatives and features in the unobtrusive sensing and the ambient display that it can facilitate fitness 
                and relaxation training seamlessly without overburdening the work routine.
              </ProjectIntroText>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>


          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
           <div style={{textAlign:'center'}}>
              <img src={lightsit_img_1} width='100%'/>
            </div>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
           {Math.round(size?.width)>425? 
                  <ReactPlayer 
                        width="100%" 
                        url="https://vimeo.com/267333802"
                      />
                      :
                      <ReactPlayer 
                      width="100%" 
                        height='100%'
                        url="https://vimeo.com/267333802"
                      />
                }
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
            <ProjectDiscriptionText>
                We developed a seat pad that can monitor a user’s sitting behavior and heart rate. 
                Six square-type force-sensing resistors (FSRs) are embedded on the front side of the fabric pad to detect the sitting postures and sedentary durations. 
                On the other side of the seat pad, two polyvinylidene fluoride (PVDF)film sensors are used for measuring Heart rate variability (HRV), 
                which has been widely used as a robust stress indicator. 
                In the LightSit software, the data can be processed into targeted information, 
                which maps to changes in light color and patterns as feedback. 
                A flexible light strip was integrated into the bottom surface of a monitor stand as a lighting display 
                to facilitate ambient user-system interaction and present feedback information beyond screen-based visualizations.
                </ProjectDiscriptionText>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
            <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
            <div style={{textAlign:'center'}}>
                <img src={lightsit_img_2} width='100%'/>
              </div>
            </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
             <br/>
             <hr/>
             <br/>
          </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
          <ProjectDiscriptionText>
              In <em><strong>Ambient Intervention Mode</strong></em>, the measured sedentary time (10–30 min) is mapped to the brightness of the light(10 to 255) 
              and the user's data is mapped to the saturation of the light (10–255). When the user sits for an extended period with high-stress 
              levels (close to minimum HRV value), the light becomes brighter and more saturated (orange).
              </ProjectDiscriptionText>
              <br/>
              <div style={{textAlign:'center'}}>
                <img src={lightsit_img_3} width='100%'/>
              </div>
              <br/>
              <div style={{textAlign:'center'}}>
                <img src={lightsit_img_4} width='100%'/>
              </div>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
             <br/>
             <hr/>
             <br/>
          </Grid>


          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
          <ProjectDiscriptionText>
              In <em><strong>Interactive Exercise Mode</strong></em>, LightSit could engage the office worker in the stretch training by providing the guidance for achieving target movements 
              and real-time feedback about the exercise flow and results. The light shows a direction for the body trunk movement and change color when the user moves to the instructed side. 
              Then, a sparkling pattern appears once the user arrives at the target position. Finally, the light shifts to the opposite side to suggest a new lateral movement.
              </ProjectDiscriptionText>
              <br/>     
              <div style={{textAlign:'center'}}>
                <img src={lightsit_img_5} width='100%'/>
              </div>
              <br/>  
              <div style={{textAlign:'center'}}>
                <img src={lightsit_img_6} width='100%'/>
              </div>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
             <br/>
             <hr/>
             <br/>
          </Grid>


          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
          <ProjectDiscriptionText>
              In <em><strong>Deep Breathing Mode</strong></em>, The user's IBI data controls the light brightness so that the light becomes bright during inhalation and becomes dim during exhalation. 
              This immediate feedback can help the individual better focus on breathing regulation and achieve a smooth and deep breathing pattern. 
              The user HRV data controls the saturation value ranging from 10 to 250. Thus, a highly saturated colored light represents an improved HRV, which indicates a healthy benefit from slow breathing.
              </ProjectDiscriptionText>
              <br/>
              <div style={{textAlign:'center'}}>
                <img src={lightsit_img_7} width='100%'/>
              </div>
              <br/>
              <div style={{textAlign:'center'}}>
                <img src={lightsit_img_8} width='100%'/>
              </div>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
             <br/>
             <hr/>
             <br/>
          </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
          <ProjectEndingText>
            <strong className='strongtext'> Credits </strong>: <br/>
              LightSit is designed and developed together with 
              <LinkText href="https://www.xipeiren.com"  target="_blank" style={{'text-align': 'center'}}>
               Xipei Ren
              </LinkText>
               from Beijing Institute of Technology
              <br/>
            <strong className='strongtext'> Exhibitions </strong>: <br/>
              Dutch Design Week, Eindhoven, NL (2018);  <br/>
              <strong className='strongtext'>Publications </strong>: 
              <br/>
              Ren, X., Yu, B., Lu, Y., Zhang, B., Hu, J., & Brombacher, A.
               <LinkText href="https://www.mdpi.com/1424-8220/19/9/2162"  target="_blank"> 
                 LightSit: An unobtrusive health-promoting system for relaxation and fitness microbreaks at work.
              </LinkText>
               <em className='journalname'>Sensors</em>, 2019.
               <br/>
               Ren, X., Yu, B., Lu, Y., Chen, Y., & Pu, P.
              <LinkText href="https://www.tandfonline.com/doi/full/10.1080/10447318.2018.1506641"  target="_blank"> 
                HealthSit: designing posture-based interaction to promote exercise during fitness breaks. 
              </LinkText>
              <em className='journalname'>International Journal of Human–Computer Interaction</em>, 2019.
              <br/>
              <br/>
            </ProjectEndingText>
        
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
     
          </Grid>

    </Mainpage>
    )
 }






