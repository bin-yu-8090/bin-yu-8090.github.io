import React from 'react';
import {Radar, Polar} from 'react-chartjs-2';
import {Card, } from '@material-ui/core';



export default class PetalFlowerChart extends React.Component {

  constructor(props){
    super(props)
    this.state={
      flowerChartdata:null,
      polarChartdata:null,
    }
    this.tranformingFlowwerData=this.tranformingFlowwerData.bind(this);
    this.tranformingPolarData=this.tranformingPolarData.bind(this);
  }

  componentDidMount() {
      this.tranformingFlowwerData();
      this.tranformingPolarData(); 
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props !== prevProps) {
      this.tranformingFlowwerData();
      this.tranformingPolarData(); 
    }
  }

  // transform the survey data into the format for Chart.js radarChart
  tranformingFlowwerData(){

    var inputdata=this.props.data.map(x=>x+10);
    var inputdata_extend=inputdata.map(x=>x+0.3);

    var chartdata = {
      labels: this.props.measureNames,
      datasets: [
        {
          label: '2',
          backgroundColor: 'rgba(255, 171, 0, 0.8)',
          borderColor: 'rgba(240, 149, 93, 0)',
          borderWidth:1,
          lineTension: 0.5,
          pointBackgroundColor: 'rgba(253, 216, 53, 0.8)',
          pointBorderColor:'rgba(253, 216, 53,,1)',
          pointRadius:1,
          data:[1,2,1,2,1,2,1,2,1]
        },
        {
          label: '3',
          backgroundColor: 'rgba(255, 171, 0, 0.8)',
          borderColor: 'rgba(240, 149, 93, 0)',
          borderWidth:1,
          lineTension: 0.5,
          pointBackgroundColor: 'rgba(253, 216, 53, 0.8)',
          pointBorderColor:'rgba(253, 216, 53,,0.5)',
          pointRadius:2,
          data:[2,1,2,1,2,1,2,1,2]
        },
        {
          label: '1',
          backgroundColor: 'rgba(240, 149, 93, 0.8)',
          borderColor: 'rgba(255, 171, 0, 0)',
          borderWidth:1,
          lineTension: 0.3,
          pointBackgroundColor: 'rgba(253, 216, 53, 1)',
          pointBorderColor:'rgba(253, 216, 53,1)',
          pointRadius:2,
          data:[3,3,3,3,3,3,3,3,3]
        },
        {
          label: 'Cognition',
          backgroundColor: 'rgba(236, 95, 91,1)',
          borderColor: 'rgba(236, 95, 91,1)',
          lineTension: 0.4,
          borderWidth:1,
          pointStyle:'circle',
          pointBackgroundColor:'white',
          pointBorderColor: 'rgba(255, 255, 255,1)',
          pointRadius:0, 
          data:[inputdata[0],inputdata[1],inputdata[2],3,3,3,3,3,3]
        },
        {
          label: 'Cognition_edge',
          backgroundColor: '#D75852',
          borderColor: '#D75852',
          lineTension: 0.4,
          borderWidth:1,
          pointStyle:'circle',
          pointBackgroundColor:'white',
          pointBorderColor: 'rgba(255, 255, 255,1)',
          pointRadius:0, 
          data:[inputdata[0]+0.2,inputdata[1]+0.2,inputdata[2]+0.2,3,3,3,3,3,3]
        },
        {
          label: 'Practical',
          backgroundColor: 'rgba(237, 111, 98,1)',
          borderColor: 'rgba(237, 111, 98,1)',
          lineTension: 0.4,
          borderWidth:1,
          pointStyle:'circle', 
          pointBackgroundColor: 'white',
          pointBorderColor: 'rgba(255, 255, 255,1)',
          pointRadius:0, 
          data:[3,3,3,inputdata[3],inputdata[4],inputdata[5],3,3,3]
        },
        {
          label: 'Practical_edge',
          backgroundColor: '#D75852',
          borderColor: '#D75852',
          lineTension: 0.4,
          borderWidth:1,
          pointStyle:'circle',
          pointBackgroundColor:'white',
          pointBorderColor: 'rgba(255, 255, 255,1)',
          pointRadius:0, 
          data:[3,3,3,inputdata[3]+0.2,inputdata[4]+0.2,inputdata[5]+0.2,3,3,3]
        },
        {
          label: 'Emotion',
          backgroundColor:'rgba(240, 149, 129, 1)',
          borderColor: 'rgba(240, 149, 129,0)',
          lineTension: 0.4,
          borderWidth:1,
          pointStyle:'circle',
          pointBackgroundColor: 'white',
          pointBorderColor:'rgba(255, 255, 255,0)',
          pointRadius:0, 
          data:[3,3,3,3,3,3,inputdata[6],inputdata[7],inputdata[8]]
        },
        {
          label: 'Emotion_edge',
          backgroundColor: '#D75852',
          borderColor: '#D75852',
          lineTension: 0.4,
          borderWidth:1,
          pointStyle:'circle',
          pointBackgroundColor:'white',
          pointBorderColor: 'rgba(255, 255, 255,1)',
          pointRadius:0, 
          data:[3,3,3,3,3,3,inputdata[6]+0.2,inputdata[7]+0.2,inputdata[8]+0.2]
        },
        {
          label: 'CL',
          backgroundColor: 'rgba(236, 95, 91,0.2)',
          borderColor: 'rgba(236, 95, 91,0)',
          lineTension: 0.6,
          borderWidth:1,
          pointRadius:0, 
          data:[3,inputdata_extend[0],inputdata_extend[1],inputdata_extend[2],3,3,3,3,3]
        },
        {
          label: 'CR',
          backgroundColor: 'rgba(236, 95, 91,0.2)',
          borderColor: 'rgba(236, 95, 91,0)',
          lineTension: 0.6,
          borderWidth:1,
          pointRadius:0, 
          data:[inputdata_extend[1],inputdata_extend[2],3,3,3,3,3,3,inputdata_extend[0]]
        },

        {
          label: 'PL',
          backgroundColor: 'rgba(237, 111, 98,0.2)',
          borderColor: 'rgba(237, 111, 98,0)',
          lineTension: 0.6,
          borderWidth:1,
          pointRadius:0, 
          data:[3,3,inputdata_extend[3],inputdata_extend[4],inputdata_extend[5],3,3,3,3]
        },
        {
          label: 'PR',
          backgroundColor: 'rgba(237, 111, 98,0.2)',
          borderColor: 'rgba(237, 111, 98,0)',
          lineTension: 0.6,
          borderWidth:1,
          pointRadius:0, 
          data:[3,3,3,3,inputdata_extend[3],inputdata_extend[4],inputdata_extend[5],3,3]
        },
        {
          label: 'EL',
          backgroundColor: 'rgba(240, 149, 129, 0.2)',
          borderColor:'rgba(232, 114, 142,0)',
          lineTension: 0.6,
          borderWidth:1,
          pointRadius:0, 
          data:[3,3,3,3,3,inputdata_extend[6],inputdata_extend[7],inputdata_extend[8],3]
        },
        {
          label: 'ER',
          backgroundColor: 'rgba(240, 149, 129, 0.2)',
          borderColor:'rgba(232, 114, 142,0)',
          lineTension: 0.6,
          borderWidth:1,
          pointRadius:0, 
          data:[inputdata_extend[8],3,3,3,3,3,3,inputdata_extend[6],inputdata_extend[7]],
        },
      ]
    };
    this.setState({
      flowerChartdata:chartdata
    })
  }

  tranformingPolarData(){
   var dataforpolar_ini=this.props.data.map(x=>x+3);

   var polardata = {
     labels: this.props.measureNames,
     datasets: [
       {
         data:[0,0,0,0,0,0,0,0,0],
         backgroundColor:['#c5cae9','#9fa8da','#7986cb', '#DEEAFF', '#ABCBF7', '#72ABEB','#FAE6EA', '#F2BAC6','#EC8BA1'],
         label: 'data1' 
        },
       {
         data:[1,1,1,1,1,1,1,1,1],
         backgroundColor:'white',
         label: 'data2 ' 
        },
        {
         data: dataforpolar_ini,
         backgroundColor:['rgba(28, 65, 122,0.5)','rgba(28, 65, 122,0.5)','rgba(28, 65, 122,0.5)','rgba(28, 65, 122,0.7)','rgba(28, 65, 122,0.7)','rgba(28, 65, 122,0.7)','rgba(28, 65, 122,0.9)','rgba(28, 65, 122,0.9)','rgba(28, 65, 122,0.9)'],
         borderColor:'white',
         borderWidth:1,
         label: 'My dataset',
       },
     ],
   }
   this.setState({
      polarChartdata:polardata
   })
  }

  render() {

      if(this.props.charttype === 'emotion')
      {
        return (
          <div style={card_style}>
          <div>
            <h2 style = {h2_style}> EMOTIONAL VISUALIZATION </h2>
          </div>
             <div>
               <Radar data={this.state.flowerChartdata} options={flowerChartoptions} width="600" height="500"/>     
             </div>
             </div>
        )
      }
      else if (this.props.charttype === 'function'){
        return(
          <div style={card_style}>
          <div>
          <h2 style = {h2_style}> FUNCTIONAL VISUALIZATION </h2>
            </div>
            <div>
            <Polar data={this.state.polarChartdata} options={PolarChartoptions} width="600" height="500"/>
            </div>
             </div>
        )
      }
  }
}



const flowerChartoptions = { 
  scale: {
    ticks: {  
      max: 16,
      min: 0,
      stepSize: 16,
      callback: function() {return ""}
      },
      pointLabels:{
        fontSize: 14,
        fontColor: 'gray',
        fontFamily:'Nutito-Regular'
    },
},
  layout: {
    padding: {
      left: 15,
      right:15,
      top: 15,
      bottom: 15
    }
 },
 legend:{
  display:false,
},
};

const PolarChartoptions = { 
    legend:{
      display:false,
    },
    scale: {
      ticks: {  
        max: 7,
        min: 0,
        stepSize: 1,
        callback: function() {return ""}
        },
      pointLabels:{
        display:true,
        fontSize: 14,
        fontColor: 'gray',
        fontFamily:'Nutito-Regular'
    },
  },
    layout: {
      padding: {
        left: 15,
        right:15,
        top: 15,
        bottom: 15
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
