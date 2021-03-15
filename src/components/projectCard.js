import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
  shadows: ["none"],
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    borderRadius: 0,
    width: props => props.width + 'px',
    background:'#464866',   
    "&:hover  $content": {
      color:'#D9D9D9',
    },
    "&:hover ": {
      //border: '2px solid #d9d9d9',
    }
  },
  actionArea: {
    //display: 'flex',
    "&:hover": {
      background:'#282947', //'#374785',  
   }
  },
  details: {
    top:'0px',
    display: 'flex',
    flexDirection: 'column',
    background:'none', 
  },
  content: {
    //flex: '1 0 auto',
    background:'none', 
    width: props => props.width + 'px',
    color: '#D9D9D9',
  },
  cover: {
    width: props => props.width + 'px',
    height:props => props.width + 'px',
  },
  focusHighlight:{
  },
  chip:{
    backgroundColor:'#717288',
    borderRadius:20,
    height:30,
    color:'#d9d9d9',
  }
}));



const CardTitleText = styled.h2`
  font-size: 1em;
  text-align: left;
  font-family: 'Nutito-Bold';
  @media screen and (max-width: 767px) {
    font-size: 3em;
  }
`;

const CardContentText = styled.h2`
  font-size: 0.8em;
  text-align: left;
  font-family: 'Nutito-Regular';
  @media screen and (max-width: 767px) {
    font-size: 2em;
  }
`;

const Keywords= styled.p`
  font-size: 0.8em;
  text-align: left;
  font-family: 'Nutito-Regular';
  @media screen and (max-width: 767px) {
    font-size: 2em;
  }
`;

const ChipsBox = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  text-align:left;
  display: 'flex';
`;




export default function ProjectCard(props) {

  const classes = useStyles(props.style);

  return (
    <ThemeProvider theme={theme}>
    <Card className={classes.root}>
    <Link to={props.linkto}> 
      <CardActionArea 
         classes={{
          root: classes.actionArea,
          focusHighlight: classes.focusHighlight
        }}>
        <CardMedia
          className={classes.cover}
          image={props.image}
         />
        <div className={classes.details}>
          <CardContent className={classes.content}>
          <CardTitleText>
              {props.name}
            </CardTitleText>
            <CardContentText>
            <br/>
              {props.description}
              <br/>
            </CardContentText>  
          </CardContent>
        </div>
        </CardActionArea>
      </Link> 
   </Card>
 
    </ThemeProvider>
  );
}






   {/* <Card className={classes.card}>
      <Link to={props.linkto} target="_blank"> 
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
          />
          <CardContent  className={classes.overlay}>
            <CardTitleText>
              {props.name}
            </CardTitleText>
            <CardContentText>
              {props.description}
            </CardContentText>
          </CardContent>
        </CardActionArea>
      </Link> 
    </Card> */}


  //   <ChipsBox >
  //   {props.keypwords.map(keyword => 
  //      <Keywords>{keyword}</Keywords>
  //    )}
  //  </ChipsBox>