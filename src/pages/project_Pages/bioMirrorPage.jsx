import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import ReactPlayer from "react-player"
import NavigationBar from '../../components/navigationBar'

// import images in this page
import biomirror_1_gif from '../../images/bioMirror/Biomirror_2_small.gif'; // Tell Webpack this JS file uses this image
import biomirror_2_gif from '../../images/bioMirror/Biomirror_1_2_small.gif'; // Tell Webpack this JS file uses this image
import biomirror_3_gif from '../../images/bioMirror/Biomirror_3_small.gif'; // Tell Webpack this JS file uses this image
import biomirror_s2_img from '../../images/bioMirror/BioMirror_S1.jpg'; // Tell Webpack this JS file uses this image
import biomirror_s3_img from '../../images/bioMirror/BioMirror_S2.jpg'; // Tell Webpack this JS file uses this image
import biomirror_milan_img from '../../images/bioMirror/BioMirror_Milan.jpg'; // Tell Webpack this JS file uses this image


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

export const BioMirrorPage = ()=> { 
   return (     
      <Mainpage>
        <NavigationBar theme={'light'}/>

        <Grid container spacing={2}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <ProjectTitle>
                BioMirror
              </ProjectTitle>
            </Grid>
            <Grid item xs={12}>
              <ProjectSubTitle>
              A mirror that let you see inside yourself
              </ProjectSubTitle>
            </Grid>
            <Grid item xs={12}>
              <ProjectIntroText>
              BioMirror is a set of interactive surfaces that respond to users ‘heartbeats, respiration and autonomic nervous system activities. 
              As a traditional mirror reflects one’s outside appearance, BioMirror reflects human internal bodily processes. 
              The surface is complex paper-based structure with repetitive incisions created by laser cutting. 
              The rear serves as a medium to transform force from servomotors, vibration motors or fans into an action, 
              stimulating the patterns on the surface to vibrate, swing, bulge or rotate to display physiological information in dynamic physical form.
              </ProjectIntroText>
            </Grid>

            <Grid item xs={12}>
              <div>
                  <ReactPlayer style={{margin: '0 auto'}}
                      url="https://vimeo.com/145148275"
                    />
              </div>
            </Grid>

            <Grid item xs={12}>
            <div style={{textAlign:'center'}}>
              <img src={biomirror_1_gif}/>
            </div>
            </Grid>

            <Grid item xs={12}>
            <div style={{textAlign:'center'}}>
              <img src={biomirror_2_gif}/>
            </div>
            </Grid>

            <Grid item xs={12}>
            <div style={{textAlign:'center'}}>
              <img src={biomirror_3_gif}/>
            </div>
            </Grid>

            <Grid item xs={12}>
            <div style={{textAlign:'center'}}>
              <img src={biomirror_s2_img} width="77%" />
            </div>
            </Grid>

            <Grid item xs={12}>
            <div style={{textAlign:'center'}}>
              <img src={biomirror_s3_img} width="77%" />
            </div>
            </Grid>

            <Grid item xs={12}>
            <div style={{textAlign:'center'}}>
              <img src={biomirror_milan_img} width="77%" />
            </div>
            </Grid>


            <Grid item xs={12}>
            <ProjectDiscriptionText>
            <strong className='strongtext'> Credits </strong>: <br/>
              Biomirror is a collaboration with  
              <LinkText href="https://www.alissanienke.nl/"  target="_blank" style={{'text-align': 'center'}}>
                A+N design studio
              </LinkText>
              Eindhoven, the Netherlands
              and is supported by the research team (Prof.Loe Feijs, Dr.Jun Hu, Dr. Mathias Funk), Industrial Design, TU/e and Creative Industries Fund NL
              <br/>
              <strong className='strongtext'> Exhibitions</strong>: <br/>
              Milano Design Week (2014), Dutch Design Week (Mind the Step Exhibition, 2015) and Dubai Design Week (Global Grad Show, 2015).
              <br/>
              <strong className='strongtext'> Press</strong>: <br/>
              BioMirror is featured by 
              <LinkText href="http://edition.cnn.com/2015/10/26/design/dubai-design-graduates-show/index.html?eref=edition"  target="_blank" style={{'text-align': 'center'}}>
              CNN</LinkText> as one of "the most innovative projects from the world's leading design schools"
              <br/>
              <strong className='strongtext'> Publication</strong>: <br/>
              Yu, B., Bongers, N., Van Asseldonk, A., Hu, J., Funk, M., & Feijs, L.
              <LinkText href="https://dl.acm.org/doi/abs/10.1145/2839462.2839469?casa_token=2KTAKovcmnUAAAAA:6WsTY92ZEb17hxWNNSd5aKrjLMgQAExSR2t6UTI1LVu-umDhByJGpZZHbZLkSvg5kHDW_jHOvORJ"  target="_blank">  
              LivingSurface: biofeedback through shape-changing display. 
              </LinkText> 
              In Proceedings of the 2016 <em className='journalname'> TEI </em>, 2016.
              <br/>

            </ProjectDiscriptionText>
            </Grid>








            </Grid>



          </Grid>
          <Grid item xs={3}></Grid>
         
          </Grid>

    </Mainpage>
    )
 }






