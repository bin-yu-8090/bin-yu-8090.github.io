import React from 'react';
import {Grid} from '@material-ui/core';
import { Icon, Button } from 'semantic-ui-react'
import './metaVisPagestyle.css';
import 'semantic-ui-css/semantic.min.css'

import{Mainpage, ProjectTitleAPP,  ProjectBoldSectionTitle, ProjectSubTitle, ProjectIntroText, LinkText,  ProjectDiscriptionText, ProjectSectionTitle, JumpLink, MultipleImgsFrame, ProjectEndingText} from '../styledComponents'

import PoppyFlowerChart from './visualizations/PoppyFlowerChart'
import PetalFlowerChart from './visualizations/PetalFlowerChart'
import CircleFlowerChart from './visualizations/CircleFlowerChart'

const questionList=[
'Sleep well', 'Eat Healthy', 'Good exercise', 'Bound to friends', 'Family time', 'Work-life balance', 'Positive Attitude', 'Low stress', 'Meaning of Life',
];


export const MetaphoricalVisualizationPage = ()=> { 

  const [surveydata, setSurveydata] = React.useState(Array(9).fill(0));
  const [visMode, setvisMode] = React.useState('function');

     const loadRandomAnswers= () => {
        const min = Math.ceil(1);
        const max = Math.floor(4);
        var randomarr=Array.from({ 
          length: 9
        }, () => Math.floor(Math.random() * (max - min)) + min); 
        setSurveydata(randomarr);
      }


    return (
    <div>
      
          <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <ProjectTitleAPP>Metaphorical Visualization</ProjectTitleAPP>
          </Grid>

          <Grid item xs={1} sm={1} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={10} md={6} lg={6} xl={4}>
             <br/>
              <br/>
              <ProjectDiscriptionText>
              In data-centered personal care products, visualizations may serve as a key communication tool to facilitate the 'conversation' between product and users, better engaging the users with their data. 
              To ensure everyday users could receive the right information and understand its meaning, for the same dataset, the visualization should be adapted to the data literacy of the users. 
              For instance, the representation, information density, the interaction flexibility may be adaptive to make the visualization effective in function and also positively affective for user experience.
              </ProjectDiscriptionText>

              <ProjectDiscriptionText>
              In this project, I have explored incorporating visual metaphors into personal data visualization. This exploration resulted in several metaphorical visualizations which have been shown to effectively help 
              everyday users understand the data’s meaning, treasure their data, and finally engage with the data-centered personal care product or service.
              </ProjectDiscriptionText>

              <ProjectDiscriptionText>
              Metaphorical visualizations map the characteristics of some well-understood visual images/patterns to the data source, making the visualization more meaningful and understandable. 
              Analogy and metaphor are considered key aspects of human cognition. Metaphors enable us to understand abstract information with familiar and well-understood images. 
              Visual metaphors not only help to present information but shape a specific meaning. A right visual metaphor can increase the expressiveness of information and define the context for the correct 
              interpretation of information and its meanings.
              </ProjectDiscriptionText>

              <ProjectDiscriptionText>
              In many literary works, flowers and trees are used as images typically associated with life and health, such as ‘the Tree of Life’ and ‘Let life be beautiful like summer flowers’ by Tagore. 
              A blooming flower or lush tree is often a symbol of a healthy person, in contrast; a withered flower or tree represents an unhealthy state. Therefore, I use the image of the flower as a metaphor 
              in visualization design, aiming to add a layer of meaning regarding health for example.
              </ProjectDiscriptionText>

              <br/>
          </Grid>
          <Grid item xs={1} sm={1} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={2} xl={2}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={8} xl={8}>
          <br/>
         <ProjectBoldSectionTitle> Visualization Concept I  </ProjectBoldSectionTitle>
         <br/>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={2} xl={2}> </Grid>



          <Grid item xs={1} sm={2} md={3} lg={2} xl={2}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={8} xl={8}>
          <div style={{'text-align':'center'}}> 
           <Button className='buttonStyle' size='tiny' onClick={loadRandomAnswers}>Load data</Button>
           <Button className='buttonStyle'  size='tiny' onClick={()=> setSurveydata(Array(9).fill(0))}> Reset </Button> 
           <Button.Group size='tiny' >
           <Button size='tiny' className='funcButtonStyle' 
                  onClick={() => setvisMode('function')}>Functional</Button>
           <Button.Or />
           <Button size='tiny' className='metaButtonStyle'  
                 onClick={() => setvisMode('emotion')}>Metaphorical</Button>
          </Button.Group>
         </div>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={2} xl={2}> </Grid>

          <Grid item xs={1} sm={1} md={3} lg={4} xl={4}> </Grid>
          <Grid item xs={10} sm={10} md={6} lg={4} xl={4}>
          <div style={{padding:'5%'}}>
            <PetalFlowerChart data={surveydata} measureNames={questionList} charttype ={visMode}/>
           </div>  
          </Grid>
          <Grid item xs={1} sm={1} md={3} lg={4} xl={4}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={2} xl={2}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={8} xl={8}>
          <br/>
         <ProjectBoldSectionTitle> Visualization Concept II  </ProjectBoldSectionTitle>
         <br/>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={2} xl={2}> </Grid>



          <Grid item xs={1} sm={2} md={3} lg={2} xl={2}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={8} xl={8}>
            <div style={{'text-align':'center'}}> 
            <Button className='buttonStyle' size='tiny' onClick={loadRandomAnswers}>Load data</Button>
            <Button className='buttonStyle'  size='tiny' onClick={()=> setSurveydata(Array(9).fill(0))}> Reset </Button> 
            <Button.Group size='tiny' >
            <Button className='funcButtonStyle' 
                    onClick={() => setvisMode('function')}>Functional</Button>
            <Button.Or/>
            <Button className='metaButtonStyle'  
                  onClick={() => setvisMode('emotion')}>Metaphorical</Button>
            </Button.Group>
          </div>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={2} xl={2}> </Grid>

          <Grid item xs={1} sm={1} md={3} lg={4} xl={4}> </Grid>
          <Grid item xs={10} sm={10} md={6} lg={4} xl={4}>
            <div style={{padding:'5%'}}>
            <CircleFlowerChart data={surveydata} measureNames={questionList} charttype ={visMode}/>
            </div>  
          </Grid>
          <Grid item xs={1} sm={1} md={3} lg={4} xl={4}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={2} xl={2}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={8} xl={8}>
          <br/>
         <ProjectBoldSectionTitle> Visualization Concept III  </ProjectBoldSectionTitle>
         <br/>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={2} xl={2}> </Grid>



          <Grid item xs={1} sm={2} md={3} lg={2} xl={2}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={8} xl={8}>
              <div style={{'text-align':'center'}}> 
              <Button className='buttonStyle' size='tiny' onClick={loadRandomAnswers}>Load data</Button>
              <Button className='buttonStyle'  size='tiny' onClick={()=> setSurveydata(Array(9).fill(0))}> Reset </Button> 
              <Button.Group size='tiny' >
              <Button className='funcButtonStyle' 
                      onClick={() => setvisMode('function')}>Functional</Button>
              <Button.Or/>
              <Button className='metaButtonStyle'  
                    onClick={() => setvisMode('emotion')}>Metaphorical</Button>
              </Button.Group>
            </div>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={2} xl={2}> </Grid>

          <Grid item xs={1} sm={1} md={3} lg={4} xl={4}> </Grid>
           <Grid item xs={10} sm={10} md={6} lg={4} xl={4}>
              <div style={{padding:'5%'}}>
              <PoppyFlowerChart data={surveydata} measureNames={questionList} charttype ={visMode}/>
              </div>  
           </Grid>
          <Grid item xs={1} sm={1} md={3} lg={4} xl={4}> </Grid>

          </Grid>
          
        </div>
   

  );
  }
  



