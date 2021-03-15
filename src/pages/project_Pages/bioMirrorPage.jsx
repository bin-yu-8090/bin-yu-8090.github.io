import React, { Component } from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import ReactPlayer from "react-player"
import NavigationBar from '../../components/navigationBar'
import { motion } from "framer-motion"
import useResizeObserver from "@react-hook/resize-observer";

// import images in this page
import biomirror_1_gif from '../../images/bioMirror/Biomirror_2_small.gif'; // Tell Webpack this JS file uses this image
import biomirror_2_gif from '../../images/bioMirror/Biomirror_1_2_small.gif'; // Tell Webpack this JS file uses this image
import biomirror_3_gif from '../../images/bioMirror/Biomirror_3_small.gif'; // Tell Webpack this JS file uses this image
import biomirror_s2_img from '../../images/bioMirror/BioMirror_S1.jpg'; // Tell Webpack this JS file uses this image
import biomirror_s3_img from '../../images/bioMirror/BioMirror_S2.jpg'; // Tell Webpack this JS file uses this image
import biomirror_milan_img from '../../images/bioMirror/BioMirror_Milan.jpg'; // Tell Webpack this JS file uses this image



import{Mainpage, ProjectTitle, ProjectSubTitle, ProjectIntroText, LinkText, FigureText, ProjectEndingText} from './styledComponents'


const useSize = (target) => {
  const [size, setSize] = React.useState();

  React.useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect());
  }, [target]);

  // Where the magic happens
  useResizeObserver(target, (entry) => setSize(entry.contentRect));
  return size;
};



export const BioMirrorPage = ()=> { 

  const target = React.useRef(null);
  const size = useSize(target);

   return (     
      <Mainpage>
        <NavigationBar theme={'light'}/>

        <motion.div  
         initial={{ opacity: 0,}}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}>  

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <ProjectTitle>
                BioMirror
              </ProjectTitle>
          </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
             <ProjectSubTitle>
               A mirror that let you see inside yourself
              </ProjectSubTitle>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>


          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
            <ProjectIntroText>
                  BioMirror is a set of interactive surfaces that respond to users ‘heartbeats, respiration, and autonomic nervous system activities. 
                  As a traditional mirror reflects one’s outside appearance, BioMirror reflects human internal bodily processes. 
                  The surface is a complex paper-based structure with repetitive incisions created by laser cutting. 
                  The rear serves as a medium to transform force from servomotors, vibration motors, or fans into action, 
                  stimulating the patterns on the surface to vibrate, swing, bulge, or rotate to display physiological information in dynamic physical form.
              </ProjectIntroText>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={6}>
            <div ref={target}  style={{textAlign:'center'}}>
            {Math.round(size?.width)>425? 
                  <ReactPlayer 
                        width="100%" 
                        url="https://vimeo.com/145148275"
                      />
                      :
                      <ReactPlayer 
                        width="100%" 
                        height='100%'
                        url="https://vimeo.com/145148275"
                      />
                }
             </div>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>


          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
            <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
              <div ref={target}  style={{textAlign:'center'}}>
                  <img src={biomirror_1_gif} width={'100%'} />
                </div>
                <FigureText>
                  The surface ‘dance’ with their heartbeats, <br/> 
                  a high heart rate leads to a more ‘energetic’ surface with faster and stronger vibration.
                </FigureText>
            </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
            <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
            <div style={{textAlign:'center'}}>
                <img src={biomirror_2_gif} width={'100%'}/>
              </div>
              <FigureText>
              The strip-shaped segments of the surface curves and  bulges  outward when user's breathe-in, <br/> 
              and the surface become flat again when the user breathe out.
              </FigureText>
            </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
            <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
              <div style={{textAlign:'center'}}>
                  <img src={biomirror_3_gif} width={'100%'}/>
              </div>
                <FigureText>
                The spiral cut patterns do a circular motion around themselves. <br/>
                A low Heart Rate Variability leads to a fast speed of motion indicating the user is in a  relatively stressful state, <br/>
                and  a  slow  motion  indicates a relaxing state.
                </FigureText>
            </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
            <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
            <div style={{textAlign:'center'}}>
                <img src={biomirror_s2_img} width="100%" />
              </div>
              <br/>
              <div style={{textAlign:'center'}}>
                <img src={biomirror_s3_img} width="100%" />
              </div>
              <br/>
              <div style={{textAlign:'center'}}>
                <img src={biomirror_milan_img} width="100%" />
              </div>
              <br/>
              <FigureText>
                BioMirror was installed at the Dutch Invertuals Exhibition<br/>  
                at Milan Design Week, Italy, in April 2015. <br/>
                This allowed us to observe how audiences interact with the surfaces.
              </FigureText>
            </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>



          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
            <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
            <ProjectEndingText>
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
              </ProjectEndingText>
            </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>


        </Grid>
        


        </motion.div> 

    </Mainpage>
    )
 }






