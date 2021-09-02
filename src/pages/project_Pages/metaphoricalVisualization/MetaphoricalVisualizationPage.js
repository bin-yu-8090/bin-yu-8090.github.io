import React from 'react';
import {Grid} from '@material-ui/core';
import { Icon, Button } from 'semantic-ui-react'
import './metaVisPagestyle.css';
import 'semantic-ui-css/semantic.min.css'

import{Mainpage, ProjectTitleAPP, ProjectSubTitle, ProjectIntroText, LinkText,  ProjectDiscriptionText, ProjectSectionTitle, JumpLink, MultipleImgsFrame, ProjectEndingText} from '../styledComponents'

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

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
            <ProjectIntroText>
             Metaphorical visualizations map the characteristics of some well-understood visual images/patterns to
             the data source, making the visualization more meaningful and understandable.
              </ProjectIntroText>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

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
    

          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}> 
          <div style={{padding:'5%'}}>
            <PetalFlowerChart data={surveydata} measureNames={questionList} charttype ={visMode}/>
           </div>      
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}> 
          <div style={{padding:'5%'}}>
          <CircleFlowerChart data={surveydata} measureNames={questionList} charttype ={visMode}/>
           </div>      
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}> 
          <div style={{padding:'5%'}}>
          <PoppyFlowerChart data={surveydata} measureNames={questionList} charttype ={visMode}/>
           </div>      
          </Grid>

          </Grid>
          
        </div>
   

  );
  }
  



