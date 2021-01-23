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

export const  TemplateProjectPage= ()=> { 
   return (     
      <Mainpage>

        <NavigationBar theme={'light'}/>

        <Grid container spacing={2}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <ProjectTitle>
                Project Name
              </ProjectTitle>
            </Grid>
            <Grid item xs={12}>
              <ProjectSubTitle>
              project subtitle
              </ProjectSubTitle>
            </Grid>
            <Grid item xs={12}>
              <ProjectIntroText>
              project introduction text
              </ProjectIntroText>
            </Grid>


              <Grid item xs={12}>
                <ProjectDiscriptionText>
                  <strong className='strongtext'> Credits </strong>: <br/>
                    Project is supported by the...
                  <br/>
                  <strong className='strongtext'> Publication</strong>: <br/>
                    Project is supported by the...   
                </ProjectDiscriptionText>
              </Grid>
            </Grid>

          </Grid>
          <Grid item xs={3}></Grid>
         
          </Grid>

    </Mainpage>
    )
 }






