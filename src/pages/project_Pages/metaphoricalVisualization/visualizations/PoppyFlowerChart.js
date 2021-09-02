import React from 'react';
import {Radar} from 'react-chartjs-2';
import Box from '@material-ui/core/Box';
import {Card} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';



class PoppyFlowerChart extends React.Component {

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
          lineTension: 0.5,
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

            if(this.props.charttype == 'emotion')
            {
              return (
                <Card style={card_style}>
                <div>
                   <h2 style = {h2_style}> EMOTIONAL VISUALIZATION</h2>
                </div>
                <div>
                   <Radar data={this.state.flowerchartdata} options={flowerChartoptions} width="600" height="500"/>
                </div>
                </Card>
              )
            }
            else if (this.props.charttype == 'function'){
              return(
                <Card style={card_style}>
                  <div>
                    <h2 style = {h2_style}> FUNCTIONAL VISUALIZATION</h2>
                  </div>
                <div>
                   <Radar data={this.state.radarchartdata} options={radarChartoptions} width="600" height="500"/>
                </div>         
             </Card>
              )
            }
      }   
    
}

export default PoppyFlowerChart;

const flowerChartoptions = { 
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
        suggestedMax: 16
    }
    },
    layout: {
        padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 10
      }
   },
   plugins: {
    legend: {
        display: false,
      }
   },
};

const radarChartoptions = { 
    scales: {
      r: {
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
        angleLines: {
              display: true,
          },
        suggestedMin: 0,
        suggestedMax: 7
      }
  },
    layout: {
        padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 10
      }
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
