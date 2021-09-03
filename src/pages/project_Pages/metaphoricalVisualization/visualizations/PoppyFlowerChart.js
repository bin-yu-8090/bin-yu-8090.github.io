import React from 'react';
import {Radar} from 'react-chartjs-2';
import {Card} from '@material-ui/core';


export default class PoppyFlowerChart extends React.Component {

    constructor(props){
      super(props)
      this.state={
        flowerchartdata:null,
        radarchartdata:null,
        charttype:1
      }
      this.tranformingDataFlowerChart = this.tranformingDataFlowerChart.bind(this);
      this.tranformingDataRadarChart = this.tranformingDataRadarChart.bind(this);
    }

  componentDidMount() {
      this.tranformingDataFlowerChart();
      this.tranformingDataRadarChart();
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props !== prevProps) {
      this.tranformingDataFlowerChart();
      this.tranformingDataRadarChart();
    }
  }


  tranformingDataFlowerChart(){
    var inputdata=this.props.data.map(x=>x+10);
    var inputdata_1=this.props.data.map(x=>x*0.2+4);

    var flowerchartdata = {
      labels: this.props.measureNames,
      datasets: [
        {
          label: '',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          borderColor: 'rgba(0, 0, 0, 0)',
          pointBackgroundColor: 'rgba(0,0,0, 0.5)',
          pointBorderWidth:1,
          pointBorderColor:'rgba(255, 255, 255, 0.5)',
          borderWidth:2,
          lineTension: 0.5,
          pointRadius:2,
          data:[1,1,1,1,1,1,1,1,1]
        },
        {
          label: '-',
          backgroundColor: 'rgba(183, 28, 28, 0.3)',
          borderColor: 'rgba(183, 28, 28, 0.5)',
          pointBackgroundColor: 'rgba(239, 83, 80, 1)',
          pointBorderColor:'rgba(239, 83, 80,1)',
          borderWidth:1,
          lineTension: 0.3,
          pointRadius:0,
          pointStyle:'triangle',
          data:inputdata_1
        },

        {
          label: 'Baseline',
          backgroundColor:'rgba(183, 28, 28, 0.2)',
          borderWidth:0,
          lineTension: 0.4,
          pointRadius:0,
          data:[14,14,14,14,14,14,14,14,14]
        },

        {
          label: 'Survey data',
          backgroundColor: 'rgba(239, 83, 80, 0.7)',
          borderColor: 'rgba(239, 83, 80,1)',
          lineTension: 0.4,
          borderWidth:1,
          pointRadius:3,
          pointStyle:'triangle',
          pointBackgroundColor: 'rgba(255, 255, 255,1)',
          pointBorderColor: 'rgba(255, 255, 255,1)',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(63, 81, 181,1)',
          data:inputdata
        },

      ]};
      this.setState({
        flowerchartdata:flowerchartdata
      })
   }

   tranformingDataRadarChart(){
    var inputdata=this.props.data.map(x=>x+3);

    console.log('input data', inputdata);

    var radardata = {
      labels: this.props.measureNames,
      datasets: [
        {
          label: 'Survey data',
          backgroundColor: 'rgba(28, 65, 122, 0.5)',
          borderColor: 'rgba(28, 65, 122, 1)',
          lineTension: 0,
          borderWidth:2,
          pointRadius:3,
          pointStyle:'circle',
          pointBackgroundColor: 'rgba(28, 65, 122, 1)',
          pointBorderColor: 'rgba(28, 65, 122, 0.5)',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(28, 65, 122, 0.5)',
          data:inputdata
        },

      ]};
      this.setState({
        radarchartdata:radardata
      })
   }



    render() {

            if(this.props.charttype === 'emotion')
            {
              return (
                <div style={card_style}> 
                <div>
                   <Radar data={this.state.flowerchartdata} options={flowerChartoptions} width="600" height="500"/>
                </div>
                </div>
              )
            }
            else if (this.props.charttype === 'function'){
              return(
                <div style={card_style}>
                <div>
                   <Radar data={this.state.radarchartdata} options={radarChartoptions} width="600" height="500"/>
                </div>         
             </div>
              )
            }
      }   
    
}


const flowerChartoptions = { 
  tooltips:{
    enabled:false
  },
  scale: {
    ticks: {  
      max: 16,
      min: 0,
      stepSize: 8,
      callback: function() {return ""}
      },
      pointLabels:{
       // fontSize: 14,
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
  display: false,
  }
};

const radarChartoptions = { 
  tooltips:{
    enabled:false
  },
  scale: {
    ticks: {  
        max: 7,
        min: 0,
        stepSize: 1,
        callback: function() {return ""}
        },
        pointLabels:{
         // fontSize: 14,
          fontColor: 'gray',
          fontFamily:'Nutito-Regular'
      },
   },
   legend:{
    display: false,
   },
    layout: {
    padding: {
      left: 15,
      right:15,
      top: 15,
      bottom: 15
    }
},
}

const card_style = {
  margin:'0.2em',
  padding:'0.5em',
  height:'100%',
  width:'100%',
  color: '#DDDDDD',
 };

