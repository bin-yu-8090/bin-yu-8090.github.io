import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Grid} from '@material-ui/core';
import NavigationBar from '../components/navigationBar'
import styled from 'styled-components'

// define the style of the elements in this component using Styled.component

const Mainpage = styled.div`
  background-color: #282947;
  min-height: 100vh;
`;

const IntroText = styled.p`
  font-size: 1em;
  text-align: left;
  color: #C6E1EA;
  font-family: 'Nutito-Regular';
`;

const LinkText = styled.a`
  color: #68CAFA
  &:hover {
    color: #FAE058;
  }
`;


class IntroPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hoverLogo:1,
     }
  }

   intervalID = 0;

   componentDidMount() {
    this.intervalID = setInterval(draw, 5);
   }

   componentWillUnmount() {
    clearInterval(this.intervalID);
   }
  
    render (){
    return (  
    <Mainpage>
    <NavigationBar theme={'dark'}/>
      <br/>
      <br/>
      <br/>
      <Grid container spacing={1}  alignItems="center" justify="center"> 
        <Grid item md={7}>
          <div>
            <canvas id="by_logo_canvas" width={800} height={600}> </canvas>
          </div>
        </Grid>
        <Grid item md={5}>
            <div>
              <IntroText>I was born in China, and moved to Eindhoven in 2013.</IntroText>
              <IntroText>I finished Ph.D on HCI <LinkText href="https://www.researchgate.net/profile/Bin_Yu38"  target="_blank"> Design Research </LinkText> for Biofeedback.</IntroText> 
              <IntroText>I am now a Data Designer in
                  <LinkText href="https://www.philips.com/a-w/about/philips-design.html"  target="_blank"> Philips Design </LinkText>.</IntroText> 
              <IntroText>I focus on
                <Link to="/projects"> data-driven design projects</Link>. 
              </IntroText> 
              <IntroText> I write 
                  <LinkText href="https://codepen.io/yubin8090/"  target="_blank"> code </LinkText> and
                  <LinkText href="https://medium.com/@binyu_71944" target="_blank"> articles</LinkText>.
              </IntroText>
              <IntroText> I use photos to record every facet of 
                  <LinkText href="https://www.instagram.com/binyu8090/" target="_blank"> life</LinkText>.
              </IntroText>
              <IntroText>I have a more detailed 
                  <LinkText href="https://www.linkedin.com/in/bin-yu-85935450/" target="_blank"> résumé</LinkText>.
              </IntroText>
            </div>
        </Grid>  
      </Grid>
    </Mainpage>
    )
   }
}
   
export default IntroPage;


var flag=1;
var count=1000;

function draw() {

  var ctx = document.getElementById("by_logo_canvas").getContext('2d');
  ctx.clearRect(0, 0, 800, 600); // clear canvas

  var logo_height=Math.floor(window.screen.height/8);
  var logo_width=Math.floor(window.screen.width/4);
  var letter_w=Math.floor(logo_width/5);
  var lc_x=Math.floor(window.screen.width/10);
  var lc_y=2*Math.floor(window.screen.height/9);

  var interSpace=Math.floor(letter_w/2);

    count=count-flag; 

    if(count<0 ||count>1000) 
        {
          flag=flag*-1;
        }

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'rgba(255, 255, 255, 1)';

        // B
        ctx.moveTo(lc_x,lc_y);   // top
        ctx.lineTo(lc_x+letter_w,lc_y);   // top
        ctx.moveTo(lc_x,lc_y+logo_height);  // bottom
        ctx.lineTo(lc_x+letter_w,lc_y+logo_height);  // bottom
        ctx.moveTo(lc_x,lc_y);   // left
        ctx.lineTo(lc_x, lc_y+logo_height);  // left
 
        var a=scale(count,10,990,lc_x,lc_x+letter_w);
        var b=scale(count,10,990,10,0);
        var c=scale(count,10,990,lc_x,lc_x+letter_w);

        ctx.moveTo(lc_x+letter_w, lc_y);
        ctx.bezierCurveTo(lc_x+letter_w, lc_y+Math.floor(logo_height*0.5), a, lc_y+Math.floor(logo_height*0.5)+b, c, lc_y+Math.floor(logo_height*0.5));
        ctx.moveTo(lc_x+letter_w, lc_y+logo_height);
        ctx.bezierCurveTo(lc_x+letter_w, lc_y+Math.floor(logo_height*0.5), a, lc_y+Math.floor(logo_height*0.5)-b, c, lc_y+Math.floor(logo_height*0.5));

        // I
        ctx.moveTo(lc_x+letter_w+interSpace, lc_y);   // Top
        ctx.lineTo(lc_x+2*letter_w+interSpace, lc_y);   // Top
        ctx.moveTo(lc_x+letter_w+interSpace, lc_y+logo_height);   // Bottom
        ctx.lineTo(lc_x+2*letter_w+interSpace, lc_y+logo_height);   // Bottom

        var d=scale(count,10,990,lc_x+letter_w+interSpace+logo_height/2,lc_x+letter_w+interSpace);
        var e=scale(count,10,990,lc_x+2*letter_w+interSpace-logo_height/2,lc_x+2*letter_w+interSpace);

        ctx.moveTo(lc_x+letter_w+interSpace, lc_y);
        ctx.bezierCurveTo(d, lc_y+Math.floor(logo_height/4), d, lc_y+logo_height-Math.floor(logo_height/4), lc_x+letter_w+interSpace, lc_y+logo_height);

        ctx.moveTo(lc_x+2*letter_w+interSpace, lc_y);
        ctx.bezierCurveTo(e, lc_y+Math.floor(logo_height/4) ,e, lc_y+logo_height-Math.floor(logo_height/4), lc_x+2*letter_w+interSpace, lc_y+logo_height);

        //N
        var f=scale(count,10,990,40,0);
        var g=scale(count,10,990,30,0);
        var h=scale(count,10,990,100,0);

        ctx.moveTo(lc_x+2*letter_w+2*interSpace, lc_y);
        ctx.bezierCurveTo(lc_x+3*letter_w+2*interSpace-25, lc_y+f, lc_x+3*letter_w+2*interSpace+g,lc_y+h, lc_x+3*letter_w+2*interSpace,lc_y);
        ctx.moveTo(lc_x+2*letter_w+2*interSpace,lc_y+logo_height);
        ctx.bezierCurveTo(lc_x+2*letter_w+2*interSpace-g,lc_y+logo_height-h,lc_x+2*letter_w+2*interSpace+25,lc_y+logo_height-f,lc_x+3*letter_w+2*interSpace, lc_y+logo_height);


        ctx.moveTo(lc_x+2*letter_w+2*interSpace, lc_y);   // Left
        ctx.lineTo(lc_x+2*letter_w+2*interSpace,lc_y+logo_height);   // Left
        ctx.moveTo(lc_x+3*letter_w+2*interSpace, lc_y);   // right
        ctx.lineTo(lc_x+3*letter_w+2*interSpace,lc_y+logo_height);   // right

        //Y
        var k=scale(count,10,990,65,0);

        ctx.moveTo(lc_x+3*letter_w+3*interSpace, lc_y);
        ctx.bezierCurveTo(lc_x+3*letter_w+3*interSpace,lc_y+k, lc_x+4*letter_w+3*interSpace,lc_y+k, lc_x+4*letter_w+3*interSpace,lc_y);

        ctx.moveTo(lc_x+3*letter_w+3*interSpace+k, lc_y+logo_height);   // Bottom
        ctx.lineTo(lc_x+4*letter_w+3*interSpace-k, lc_y+logo_height);   // Bottom

        ctx.moveTo(lc_x+3*letter_w+3*interSpace,lc_y);     // Left
        ctx.lineTo(lc_x+3*letter_w+3*interSpace+k,lc_y+logo_height);  // Left

        ctx.moveTo(lc_x+4*letter_w+3*interSpace, lc_y);     // Right
        ctx.lineTo(lc_x+4*letter_w+3*interSpace-k,lc_y+logo_height);  // Right
        
        //U
        var i=scale(count,10,990,35,0);
        var j=scale(count,10,990,15,0);

        ctx.moveTo(lc_x+4*letter_w+4*interSpace, lc_y);
        ctx.bezierCurveTo(lc_x+4*letter_w+4*interSpace+25,lc_y+i, lc_x+5*letter_w+4*interSpace-25,lc_y+i, lc_x+5*letter_w+4*interSpace,lc_y);

        ctx.moveTo(lc_x+4*letter_w+4*interSpace, lc_y+logo_height-j);
        ctx.bezierCurveTo(lc_x+4*letter_w+4*interSpace+25,lc_y+logo_height,lc_x+5*letter_w+4*interSpace-25,lc_y+logo_height,lc_x+5*letter_w+4*interSpace,lc_y+logo_height-j);

        ctx.moveTo(lc_x+4*letter_w+4*interSpace, lc_y);     // Left
        ctx.lineTo(lc_x+4*letter_w+4*interSpace,lc_y+logo_height-j);  // Left

        ctx.moveTo(lc_x+5*letter_w+4*interSpace, lc_y);     // Right
        ctx.lineTo(lc_x+5*letter_w+4*interSpace,lc_y+logo_height-j);  // Right

        ctx.stroke();

}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

