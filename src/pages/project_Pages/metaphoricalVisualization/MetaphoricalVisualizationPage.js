import React from 'react';
import {Grid} from '@material-ui/core';
import { Icon, Button } from 'semantic-ui-react'
import './metaVisPagestyle.css';
import 'semantic-ui-css/semantic.min.css'

// import DonutLargeIcon from '@material-ui/icons/DonutLarge';
// import FilterVintageIcon from '@material-ui/icons/FilterVintage';

import{Mainpage, ProjectTitleAPP, ProjectSubTitle, ProjectIntroText, LinkText,  ProjectDiscriptionText, ProjectSectionTitle, JumpLink, MultipleImgsFrame, ProjectEndingText} from '../styledComponents'

import PoppyFlowerChart from './visualizations/PoppyFlowerChart'
import PetalFlowerChart from './visualizations/PetalFlowerChart'
import CircleFlowerChart from './visualizations/CircleFlowerChart'

const questionList=[
'Sleep well', 'Eat Healthy', 'Good exercise', 'Bound to friends', 'Family time', 'Work-life balance', 'Positive Attitude', 'Low stress', 'Meaning of Life',
];

class MetaphoricalVisualizationPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           surveydata: Array(9).fill(0),
           visMode:'function',
        }
          this.clearAnswers=this.clearAnswers.bind(this);
          this.loadRandomAnswers=this.loadRandomAnswers.bind(this);
          this.changeVisModetoFunc=this.changeVisModetoFunc.bind(this);
          this.changeVisModetoMeta=this.changeVisModetoMeta.bind(this);
      }

      clearAnswers(){
        this.setState({surveydata:Array(9).fill(0)});
       }

     loadRandomAnswers(){
        const min = Math.ceil(1);
        const max = Math.floor(4);
        var randomarr=Array.from({ 
          length: 9
        }, () => Math.floor(Math.random() * (max - min)) + min); 
        this.updateSurveyData(randomarr);
      }

      updateSurveyData = (surveyanswers) => {
        this.setState({
             surveydata: surveyanswers,
          });
       }

       changeVisModetoFunc = () => {
        this.setState({
          visMode: 'function',
        });
      };

      changeVisModetoMeta = () => {
        this.setState({
          visMode: 'emotion',
        });
      };


  render(){
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
           <Button className='buttonStyle' size='tiny' onClick={this.loadRandomAnswers}>Load data</Button>
           <Button className='buttonStyle'  size='tiny' onClick={this.clearAnswers}> Reset </Button> 
           <Button.Group size='tiny'>
           <Button className='funcButtonStyle' 
                  onClick ={this.changeVisModetoFunc}>Functional</Button>
           <Button.Or/>
           <Button className='metaButtonStyle'  onClick ={this.changeVisModetoMeta}>Metaphorical</Button>
          </Button.Group>
         </div>
          </Grid>
    

          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}> 
          <div style={{padding:'5%'}}>
            <PetalFlowerChart data={this.state.surveydata} measureNames={questionList} charttype ={this.state.visMode}/>
           </div>      
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}> 
          <div style={{padding:'5%'}}>
          <CircleFlowerChart data={this.state.surveydata} measureNames={questionList} charttype ={this.state.visMode}/>
           </div>      
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}> 
          <div style={{padding:'5%'}}>
          <PoppyFlowerChart data={this.state.surveydata} measureNames={questionList} charttype ={this.state.visMode}/>
           </div>      
          </Grid>

    




          </Grid>
          
        </div>
   

  );
  }
    }

export default MetaphoricalVisualizationPage;

const card_style = {
  margin:'0.2em',
  padding:'0.5em',
  height:'500px',
  width:'800px',
  color: '#DDDDDD',
 };
const headBar_Dark_style = {
  background:'#454545', // Gray 60,
  padding: '0.8em',
  color: '#DDDDDD',
  fontFamily:'philipsFont_Book',
  fontSize: '1.1em'
 };
 
  const h2_style= {
    color: '#4d4d4d',
    'text-align': 'left', 
    fontFamily:'philipsFont_Book',
    fontSize: '1em'
  }

  const h1_style= {
    color: '#696969',
    'text-align': 'left', 
    fontFamily:'philipsFont_Book',
    fontSize: '1em'
  }

  const text_style= {
    padding:'10px',
    color: '#696969',
    'text-align': 'left', 
    fontFamily:'philipsFont_Book',
    fontSize: '0.9em'
  }



  
                      /* <ToggleButton value="function">
                       <Icon name='home' size='small' />
                          <p style={{'margin-top':'0px', 'margin-bottom':'0px', 'margin-left':'5px'}}> Function </p>
                      </ToggleButton>
                      <ToggleButton  value="emotion">
                  
                        <p style={{'margin-top':'0px', 'margin-bottom':'0px', 'margin-left':'5px'}}> Emotion </p>
                      </ToggleButton>
                    </ToggleButtonGroup>  */
