import React, { Component } from 'react'


// here is the annimated code
class AnimatedLogo extends Component{

  constructor(props) {
    super(props);
    this.logoBox = React.createRef()
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

   componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.logoSize !== prevProps.logoSize) {

    }
  }


    render(){
      return ( 
        <div>
           <canvas id="by_logo_canvas" width={this.props.logoSize.width} height={this.props.logoSize.width}> </canvas>
        </div>
      )};
}



export default AnimatedLogo;



var flag=1;
var count=1000;

function draw() {

  var canvas=document.getElementById("by_logo_canvas")
  var ctx =canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.width); // clear canvas


  var logo_width=Math.floor(canvas.width);
  var logo_height=Math.floor(canvas.width/5);
  var letter_w=Math.floor(logo_width/8);
  var lc_x=Math.floor(logo_width/16);
  var lc_y=Math.floor(2*(logo_width/5));

  var interSpace=Math.floor(logo_width/16);

  //console.log('logo_height',logo_height);

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
        var b=scale(count,10,990,Math.floor(logo_height/20),0);
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
        var f=scale(count,10,990,Math.floor(logo_height/5),0);
        var g=scale(count,10,990,Math.floor(logo_height/7),0);
        var h=scale(count,10,990,Math.floor(logo_height/2),0); //the distance to max displacement Math.floor(logo_height/8)

        ctx.moveTo(lc_x+2*letter_w+2*interSpace, lc_y);
        ctx.bezierCurveTo(lc_x+3*letter_w+2*interSpace-25, lc_y+f, lc_x+3*letter_w+2*interSpace+g,lc_y+h, lc_x+3*letter_w+2*interSpace,lc_y);
        ctx.moveTo(lc_x+2*letter_w+2*interSpace,lc_y+logo_height);
        ctx.bezierCurveTo(lc_x+2*letter_w+2*interSpace-g,lc_y+logo_height-h,lc_x+2*letter_w+2*interSpace+25,lc_y+logo_height-f,lc_x+3*letter_w+2*interSpace, lc_y+logo_height);


        ctx.moveTo(lc_x+2*letter_w+2*interSpace, lc_y);   // Left
        ctx.lineTo(lc_x+2*letter_w+2*interSpace,lc_y+logo_height);   // Left
        ctx.moveTo(lc_x+3*letter_w+2*interSpace, lc_y);   // right
        ctx.lineTo(lc_x+3*letter_w+2*interSpace,lc_y+logo_height);   // right

        //Y
        var k=scale(count,10,990, Math.floor(logo_height/2.2),0);

        ctx.moveTo(lc_x+3*letter_w+3*interSpace, lc_y);
        ctx.bezierCurveTo(lc_x+3*letter_w+3*interSpace,lc_y+k, lc_x+4*letter_w+3*interSpace,lc_y+k, lc_x+4*letter_w+3*interSpace,lc_y);

        ctx.moveTo(lc_x+3*letter_w+3*interSpace+k, lc_y+logo_height);   // Bottom
        ctx.lineTo(lc_x+4*letter_w+3*interSpace-k, lc_y+logo_height);   // Bottom

        ctx.moveTo(lc_x+3*letter_w+3*interSpace,lc_y);     // Left
        ctx.lineTo(lc_x+3*letter_w+3*interSpace+k,lc_y+logo_height);  // Left

        ctx.moveTo(lc_x+4*letter_w+3*interSpace, lc_y);     // Right
        ctx.lineTo(lc_x+4*letter_w+3*interSpace-k,lc_y+logo_height);  // Right
        
        //U
        var i=scale(count,10,990, Math.floor(logo_height/5.5),0);
        var j=scale(count,10,990,Math.floor(logo_height/13),0);
        var k=scale(count,10,990,Math.floor(logo_height/10),0);

        ctx.moveTo(lc_x+4*letter_w+4*interSpace, lc_y);
        ctx.bezierCurveTo(lc_x+4*letter_w+4*interSpace+k,lc_y+i, lc_x+5*letter_w+4*interSpace-k,lc_y+i, lc_x+5*letter_w+4*interSpace,lc_y);

        ctx.moveTo(lc_x+4*letter_w+4*interSpace, lc_y+logo_height-j);
        ctx.bezierCurveTo(lc_x+4*letter_w+4*interSpace+k,lc_y+logo_height,lc_x+5*letter_w+4*interSpace-k,lc_y+logo_height,lc_x+5*letter_w+4*interSpace,lc_y+logo_height-j);

        ctx.moveTo(lc_x+4*letter_w+4*interSpace, lc_y);     // Left
        ctx.lineTo(lc_x+4*letter_w+4*interSpace,lc_y+logo_height-j);  // Left

        ctx.moveTo(lc_x+5*letter_w+4*interSpace, lc_y);     // Right
        ctx.lineTo(lc_x+5*letter_w+4*interSpace,lc_y+logo_height-j);  // Right

        ctx.stroke();

}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}