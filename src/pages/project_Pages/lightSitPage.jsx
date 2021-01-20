import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import ReactPlayer from "react-player"

import lightsit_img_1 from '../../images/lightSit/LightSit_pics-00.jpg'; 
import lightsit_img_2 from '../../images/lightSit/system.png'; 
import lightsit_img_3 from '../../images/lightSit/LightSit_pics-02.jpg'; 
import lightsit_img_4 from '../../images/lightSit/intervention_mode.jpg'; 
import lightsit_img_5 from '../../images/lightSit/LightSit_pics-03.jpg'; 
import lightsit_img_6 from '../../images/lightSit/stretch_mode.jpg'; 
import lightsit_img_7 from '../../images/lightSit/LightSit_pics-04.jpg'; 
import lightsit_img_8 from '../../images/lightSit/breathing_mode.jpg'; 

const Mainpage = styled.div`
background-color: #F2F2F2;
min-height: 100vh;
`;

const ProjectTitle = styled.h1`
  font-size: 4em;
  color: #000000;
  padding-top:1em;
  text-align: center;
  font-family: 'Nutito-Regular';
`;

const ProjectSubTitle = styled.h2`
  font-size: 1.2em;
  color:#000000;
  text-align: center;
  font-family: 'Nutito-Regular';
`;

const ProjectIntroText= styled.p`
  font-size: 1em;
  text-align: center;
  color: #7F7F7F;
  font-family: 'Nutito-Light';
`;

const LinkText = styled.a`
  font-size: 1em;
  padding-left:0.5em;
  padding-right:0.5em;
  color: #C19936;
  font-family: 'Nutito-Light';
  &:hover {
    color:#262626;
  }
`;

const ProjectDiscriptionText= styled.p`
  font-size: 0.9em;
  padding-left:7em;
  padding-right:5em;
  text-align: left;
  color: #807F7F;
  font-family: 'Nutito-Light';
`;

const ProjectEndText= styled.p`
  font-size: 0.8em;
  padding-top:5em;
  padding-left:8em;
  padding-right:5em;
  text-align: left;
  color: #807F7F;
  font-family: 'Nutito-Light';
`;

export const LightSitPage = ()=> { 
   return (     
      <Mainpage>
        <Grid container spacing={2}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <ProjectTitle>
                LightSit
              </ProjectTitle>
            </Grid>
            <Grid item xs={12}>
              <ProjectSubTitle>
              Subtle periods of rest and activity at your workstation
              </ProjectSubTitle>
            </Grid>
            <Grid item xs={12}>
              <ProjectIntroText>
                Althrough the new way of working has many advantages, the more intelligent use of time, space and resources often results in less exercise and more stress.
                LightSit offers a solution. A cushion filled with sensors that discreetly register your breathing patterns and a light strip integrated in the mornitor stand.
                If you have been sitting for too long, you are supported with stretching exercises for your back by the strip of light that shifts between left and right. 
                If you are suffering from stress, you are invited to concentrate on your breathing. Through the rhythm of the illuminating and dimming lights.
                LightSit contributes to office vitality initiatives and features in the unobtrusive sensing and the ambient display that it can facilitate ofitness 
                and relaxation training seamlessly without overburdening the work routine.
              </ProjectIntroText>
            </Grid>


            <Grid item xs={12}>
            <div style={{textAlign:'center'}}>
              <img src={lightsit_img_1} width='77%'/>
            </div>
            </Grid>

            <Grid item xs={12}>
            <div style={{textAlign:'center'}}>
              <img src={lightsit_img_2} width='77%'/>
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
                <img src={lightsit_img_3} width='77%'/>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div style={{textAlign:'center'}}>
                <img src={lightsit_img_4} width='77%'/>
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
                <img src={lightsit_img_5} width='77%'/>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div style={{textAlign:'center'}}>
                <img src={lightsit_img_6} width='77%'/>
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
                <img src={lightsit_img_7} width='77%'/>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div style={{textAlign:'center'}}>
                <img src={lightsit_img_8} width='77%'/>
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
              <div>
                  <ReactPlayer style={{margin: '0 auto'}}
                      url="https://vimeo.com/267333802"
                    />
              </div>
            </Grid>


            <Grid item xs={12}>
            <ProjectEndText>
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
            </ProjectEndText>
            </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}></Grid>
         
          </Grid>

    </Mainpage>
    )
 }






