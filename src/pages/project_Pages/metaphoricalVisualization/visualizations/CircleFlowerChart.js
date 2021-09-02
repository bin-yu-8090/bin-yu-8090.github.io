import React from 'react';
import {Radar} from 'react-chartjs-2';
import Box from '@material-ui/core/Box';
import {Card, Grid} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


class CircleFlowerChart extends React.Component {

    constructor(props){
      super(props)
      this.state={
        flowerChartdata:null,
        circleBarChartdata:null,
      }
      this.tranformingflowerData=this.tranformingflowerData.bind(this);
      this.tranformingcircleBarChartData=this.tranformingcircleBarChartData.bind(this);
    }

  componentDidMount() {
    this.tranformingflowerData();
    this.tranformingcircleBarChartData();
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props !== prevProps) {
      this.tranformingflowerData();
      this.tranformingcircleBarChartData();
    }
  }

  tranformingflowerData(){
    var data=this.props.data.map(x=>x+10);
    const bottom=1;
    const grad=3;

    var dataforRader_cognition=[
      bottom,data[0]-grad,data[0],data[0]-grad, 
      bottom,data[1]-grad,data[1],data[1]-grad,
      bottom,data[2]-grad,data[2],data[2]-grad,
      0,0,0,0, 0,0,0,0, 0,0,0,0,
      0,0,0,0, 0,0,0,0, 0,0,0,0,
      ];

    var dataforRader_C_indicate=[
      bottom,Math.ceil(data[0]*0.4),Math.ceil(data[0]*0.35),Math.ceil(data[0]*0.4),
      bottom,Math.ceil(data[1]*0.4),Math.ceil(data[1]*0.35),Math.ceil(data[1]*0.4),
      bottom,Math.ceil(data[2]*0.4),Math.ceil(data[2]*0.35),Math.ceil(data[2]*0.4),
      0,0,0,0, 0,0,0,0, 0,0,0,0,
      0,0,0,0, 0,0,0,0, 0,0,0,0,
      ];
  
    var dataforRader_C_edge=[
      bottom,data[0]-3,data[0]+0.4,data[0]-3, 
      bottom,data[1]-3,data[1]+0.4,data[1]-3,
      bottom,data[2]-3,data[2]+0.4,data[2]-3,
      0,0,0,0, 0,0,0,0, 0,0,0,0,
      0,0,0,0, 0,0,0,0, 0,0,0,0,
      ];

    var dataforRader_cognition_l=[
      8,12,8, bottom, 8,12,8, 
      bottom, 8,12,8, 0,0,0,0, 
      0,0,0,0, 0,0,0,0, 0,0,0,0, 
      0,0,0,0, 0,0,0,bottom,
      ];

    var dataforRader_cognition_r=[
      0, bottom, 8,12,8, 
      bottom, 8,12,8, bottom, 8,12,8, 
      0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
      0,0,0,0, 0,0,0,0, 
      ];
    
    var dataforRader_practical=[
      0,0,0,0, 0,0,0,0, 0,0,0,0,
      bottom,data[3]-grad,data[3],data[3]-grad,
      bottom,data[4]-grad,data[4],data[4]-grad,
      bottom,data[5]-grad,data[5],data[5]-grad,
      0,0,0,0, 0,0,0,0, 0,0,0,0,];

         
    var dataforRader_P_edge=[
      0,0,0,0, 0,0,0,0, 0,0,0,0,
      bottom,data[3]-grad,data[3]+0.4,data[3]-grad,
      bottom,data[4]-grad,data[4]+0.4,data[4]-grad,
      bottom,data[5]-grad,data[5]+0.4,data[5]-grad,
      0,0,0,0, 0,0,0,0, 0,0,0,0,];

  
    var dataforRader_practical_l=[
        0,0,0, 0,0,0,0, 0,0,0,0,
        bottom,8,12,8, 
        bottom,8,12,8,
        bottom,8,12,8, 
        0,0,0,0, 0,0,0,0, 0,0,0,0,0];
      
    var dataforRader_practical_r=[
        0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
        bottom,8,12,8,
        bottom,8,12,8,
        bottom,8,12,8, 
        0,0,0,0, 0,0,0,0, 0,0,0];
        
    var dataforRader_P_indicate=[
        0,0,0,0, 0,0,0,0, 0,0,0,0,
        bottom,Math.ceil(data[3]*0.4),Math.ceil(data[3]*0.35),Math.ceil(data[3]*0.4),
        bottom,Math.ceil(data[4]*0.4),Math.ceil(data[4]*0.35),Math.ceil(data[4]*0.4),
        bottom,Math.ceil(data[5]*0.4),Math.ceil(data[5]*0.35),Math.ceil(data[5]*0.4),
        0,0,0,0, 0,0,0,0, 0,0,0,0,
        ];

    var dataforRader_emotion=[
      0,0,0,0, 0,0,0,0, 0,0,0,0,
      0,0,0,0, 0,0,0,0, 0,0,0,0,
      bottom,data[6]-grad,data[6],data[6]-grad,
      bottom,data[7]-grad,data[7],data[7]-grad,
      bottom,data[8]-grad,data[8],data[8]-grad,];

      var dataforRader_E_edge=[
        0,0,0,0, 0,0,0,0, 0,0,0,0,
        0,0,0,0, 0,0,0,0, 0,0,0,0,
        bottom,data[6]-grad,data[6]+0.4,data[6]-grad,
        bottom,data[7]-grad,data[7]+0.4,data[7]-grad,
        bottom,data[8]-grad,data[8]+0.4,data[8]-grad,];

    var dataforRader_emotion_l=[
      0,0,0, 0,0,0,0, 0,0,0,0,
      0,0,0,0, 0,0,0,0, 0,0,0,0,
      bottom,8,12,8,
      bottom,8,12,8,
      bottom,8,12,8,0];

    var dataforRader_emotion_r=[
      8,0,0,0,0, 0,0,0,0, 0,0,0,0,
      0,0,0,0, 0,0,0,0, 0,0,0,0,
      bottom,8,12,8,
      bottom,8,12,8,
      bottom,8,12,];

    var dataforRader_E_indicate=[
      0,0,0,0, 0,0,0,0, 0,0,0,0,
      0,0,0,0, 0,0,0,0, 0,0,0,0,
      bottom,Math.ceil(data[6]*0.4),Math.ceil(data[6]*0.35),Math.ceil(data[6]*0.4),
      bottom,Math.ceil(data[7]*0.4),Math.ceil(data[7]*0.35),Math.ceil(data[7]*0.4),
      bottom,Math.ceil(data[8]*0.4),Math.ceil(data[8]*0.35),Math.ceil(data[8]*0.4),
      ];


    const questionList=[
      '','', 'Sleep well', '',
      '','', 'Eat Healthy','', 
      '','', 'Good exercise', '', 
      '','', 'Bound to friends', '', 
      '','', 'Family time','', 
      '','', 'Work-life balance', '', 
      '','', 'Positive Attitude','', 
      '','', 'Low stress', '', 
      '','', 'Meaning of Life','',
    ];

    var chartdata = {
      labels:questionList,
      datasets: [
        {
          label:'center',
          backgroundColor: '#795548',
          borderColor: 'rgba(0, 0, 0, 0)',
          pointBackgroundColor:'#ffc107',
          pointBorderWidth:1,
          pointBorderColor:'rgba(0,0,0,0)',
          borderWidth:1,
          lineTension: 0.5,
          pointRadius:2,
          data: new Array(36).fill(1)
        },
        {
          label:'center_1',
          backgroundColor: '#795548',
          borderColor: 'rgba(0, 0, 0, 0)',
          pointBackgroundColor:'#ffc107',
          pointBorderWidth:1,
          pointBorderColor:'#ffc107',
          borderWidth:1,
          lineTension:0.5,
          pointRadius:2,
          data: new Array(36).fill(1.5)
        },
        {
          label:'center_2',
          backgroundColor: '#795548',
          borderColor: 'rgba(0, 0, 0, 0)',
          pointBackgroundColor:'#ffc107',
          pointBorderWidth:1,
          pointBorderColor:'rgba(0,0,0,0)',
          borderWidth:1,
          lineTension: 0.5,
          pointRadius:2,
          data: new Array(36).fill(2)
        },
        {
          label:'Cognition_inner', 
          backgroundColor:'rgba(255, 152, 0, 0.5)',
          borderColor:'rgba(239, 83, 80, 0)',
          borderWidth:1,
          lineTension: 0.5,
          pointRadius:0,
          data:dataforRader_C_indicate,
        },
        {
          label:'Cognition_leaf', 
          backgroundColor:'rgba(239, 150, 128,1)',
          borderColor: 'rgba(239, 83, 80, 0)',
          borderWidth:1,
          lineTension: 0.5,
          pointRadius:0,
          data:dataforRader_cognition,
        },
        {
          label:'Cognition_leaf_edge', 
          backgroundColor:'rgba(232, 74, 76,0.9)',
          borderColor: 'rgba(239, 83, 80, 0)',
          borderWidth:1,
          lineTension: 0.5,
          pointRadius:0,
          data: dataforRader_C_edge,
        },
        {
          label:'Cognition_l', 
          backgroundColor:'rgba(232, 74, 76,0.9)',
          borderColor: 'rgba(224, 224, 224, 0)',
          borderWidth:1,
          lineTension: 0.5,
          pointRadius:0,
          data:  dataforRader_cognition_l,
        },
        {
          label:'Cognition_r', 
          backgroundColor:'rgba(232, 74, 76,0.9)',
          borderColor: 'rgba(224, 224, 224, 0)',
          borderWidth:1,
          lineTension: 0.5,
          pointRadius:0,
          data: dataforRader_cognition_r,
        },
        {
          label:'Practical_inner', 
          backgroundColor:'rgba(255, 152, 0, 0.5)',
          borderColor:'rgba(239, 83, 80, 0)',
          borderWidth:1,
          lineTension: 0.5,
          pointRadius:0,
          data:dataforRader_P_indicate,
        },
        {
          label:'Practical_leaf', 
          backgroundColor:'rgba(239, 150, 128,1)',
          borderColor: 'rgba(239, 83, 80, 0)',
          borderWidth:1,
          lineTension: 0.5,
          pointRadius:0, 
          data:dataforRader_practical,
        },
        {
          label:'Practical_leaf_edge', 
          backgroundColor:'rgba(232, 74, 76,0.9)',
          borderColor: 'rgba(239, 83, 80, 0)',
          borderWidth:1,
          lineTension: 0.5,
          pointRadius:0,
          data: dataforRader_P_edge,
        },
        {
          label:'Practical_l', 
          backgroundColor:'rgba(232, 74, 76,0.9)',
          borderColor: 'rgba(224, 224, 224, 0)',
          borderWidth:1,
          lineTension: 0.5,
          pointRadius:0,
          data: dataforRader_practical_l,
        },
        {
          label:'Practical_r', 
          backgroundColor:'rgba(232, 74, 76,0.9)',
          borderColor: 'rgba(224, 224, 224, 0)',
          borderWidth:1,
          lineTension: 0.5,
          pointRadius:0,
          data: dataforRader_practical_r,
        },

        {
          label:'Emotion_2', 
          backgroundColor:'rgba(255, 152, 0, 0.5)',
          borderColor:'rgba(239, 83, 80, 0)',
          borderWidth:1,
          lineTension: 0.5,
          pointRadius:0,
          data:dataforRader_E_indicate,
        },
        {
          label:'Emotion', 
          backgroundColor:'rgba(239, 150, 128,1)',
          borderColor: 'rgba(239, 83, 80, 0)',
          borderWidth:1,
          lineTension: 0.5,
          pointRadius:0, 
          data:dataforRader_emotion,
        },
        {
          label:'Emotion_leaf_edge', 
          backgroundColor:'rgba(232, 74, 76,0.9)',
          borderColor: 'rgba(239, 83, 80, 0)',
          borderWidth:1,
          lineTension: 0.5,
          pointRadius:0,
          data: dataforRader_E_edge,
        },
        {
          label:'Emotion_l', 
          backgroundColor:'rgba(232, 74, 76,0.9)',
          borderColor: 'rgba(224, 224, 224, 0)',
          borderWidth:1,
          lineTension: 0.5,
          pointRadius:0,
          data: dataforRader_emotion_l,
        },
        {
          label:'Emotion_r', 
          backgroundColor:'rgba(232, 74, 76,0.9)',
          borderColor: 'rgba(224, 224, 224, 0)',
          borderWidth:1,
          lineTension: 0.5,
          pointRadius:0,
          data: dataforRader_emotion_r,
        }, 
      ]};
      this.setState({
        flowerChartdata:chartdata
      })
   }

   tranformingcircleBarChartData(){

    var data=this.props.data.map(x=>x+10);
    const bottom=2;
    const grad=5;

    var dataforRader=[
      bottom,data[0]-grad, data[0],data[0]-grad, 
      bottom,data[1]-grad,data[1],data[1]-grad,
      bottom,data[2]-grad,data[2],data[2]-grad,
      bottom,data[3]-grad,data[3],data[3]-grad,
      bottom,data[4]-grad,data[4],data[4]-grad,
      bottom,data[5]-grad,data[5],data[5]-grad,
      bottom,data[6]-grad,data[6],data[6]-grad,
      bottom,data[7]-grad,data[7],data[7]-grad,
      bottom,data[8]-grad,data[8],data[8]-grad,
    ];

    const questionList=[
      '','', 'Sleep well', '',
      '','', 'Eat Healthy','', 
      '','', 'Good exercise', '', 
      '','', 'Bound to friends', '', 
      '','', 'Family time','', 
      '','', 'Work-life balance', '', 
      '','', 'Positive Attitude','', 
      '','', 'Low stress', '', 
      '','', 'Meaning of Life','',
    ];

    var radardata2 = {
      labels:questionList,
      datasets: [
        {
          label: '-',
          backgroundColor:'rgba(255,255,255,1)',
          borderColor: 'rgba(255,255,255, 0)',
          borderWidth:1,
          lineTension: 0.5,
          pointRadius:0,
          data:new Array(36).fill(5)
        },   
        
        {
          label: 'NewData', 
          backgroundColor:'rgba(28, 65, 122,0.8)',
          borderColor: 'rgba(121, 134, 203,0)',
          lineTension: 1,
          borderWidth:1,
          pointRadius:0,
          data:dataforRader,
        },
      ]};
      this.setState({
        circleBarChartdata:radardata2
      })
   }

    render() {
      if(this.props.charttype === 'emotion')
      {
        return (
          <Card style={card_style}>
            <div>
               <h2 style = {h2_style}> EMOTIONAL VISUALIZATION</h2>
            </div>
              <div>
                <Radar data={this.state.flowerChartdata} options={CircleFlowerOptions} width="600" height="500"/>
              </div>    
         </Card>
        )
      }
      else if(this.props.charttype === 'function'){
        return(
          <Card style={card_style}>
            <div>
              <h2 style = {h2_style}>FUNCTIONAL VISUALIZATION</h2>
            </div>
            <div>
              <Radar data={this.state.circleBarChartdata} options={CircleBarChartOptions} width="600" height="500"/>     
            </div>    
       </Card>
       )        
     }
  }
}

export default CircleFlowerChart;

const CircleFlowerOptions = { 
  scales: {
    r: {
      angleLines: {
        display:false,
      },
      pointLabels: {
        color: 'gray',
        font: {
          size: 12,
          family: 'Nutito-Regular'
        },
      },
      ticks: {
        display:false,
      },
        suggestedMin: 0,
        suggestedMax: 15,
     },
    },

   plugins: {
    legend: {
        display: false,
      }
   },
};

const CircleBarChartOptions = { 
  scales: {
    r: {
      angleLines: {
        display:false,
      },
      pointLabels: {
        color: 'gray',
        font: {
          size: 12,
          family: 'Nutito-Regular'
        },
      },
      ticks: {
        display:false,
      },
        suggestedMin: 0,
        suggestedMax: 15,
     },
    },

   plugins: {
    legend: {
        display: false,
      }
   },
 
};


const card_style = {
  margin:'0.2em',
  padding:'0.5em',
  height:'100%',
  width:'100%',
  color: '#DDDDDD',
 };

 const h2_style= {
  color: '#757575',
  'text-align': 'center', 
  fontFamily:'Nutito-Regular',
  padding:'5px',
  fontSize: '0.8em'
}
