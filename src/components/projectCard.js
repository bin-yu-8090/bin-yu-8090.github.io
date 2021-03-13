import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
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

// const useStyles = makeStyles({
//   root: {
//     borderRadius: 0,
//     maxWidth: 480,
//     background:'#F5F5F5',
//   },
//   media: {
//     height: 200,
//   },
// });


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    borderRadius: 0,
    width: 550,
    background:'#464866',   
    "&:hover  $content": {
      color:'#D9D9D9',
    },
    "&:hover ": {
      //border: '2px solid #d9d9d9',
    }
  },
  actionArea: {
    display: 'flex',
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
    flex: '1 0 auto',
    background:'none', 
    top:'0px',
    width: 275,
    color: '#D9D9D9',
  },
  cover: {
    width: 275,
    height:275
  },
  focusHighlight:{
  },
  chipBox: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.4),
    },
  },
}));


const CardTitleText = styled.h2`
  font-size: 1em;
  text-align: left;
  font-family: 'Nutito-Bold';
`;

const CardContentText = styled.h2`
  font-size: 0.8em;
  text-align: left;
  font-family: 'Nutito-Regular';
`;

export default function ProjectCard(props) {
  const classes = useStyles();

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
              {props.description}
            </CardContentText>
            <div className={classes.chipBox}>
              {props.keypwords.map(keyword => 
                <Chip label={keyword} size="small" style={{'font-size': '0.7em',fontFamily: 'Nutito-Regular', borderRadius: 25,  height:'20px', color:'#d9d9d9', background:'#717288'}}/>)}
             </div>
             
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