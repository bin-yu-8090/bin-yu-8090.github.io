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
    background:'#FFFFFF',
  },
  actionArea: {
    display: 'flex',
    "&:hover $focusHighlight": {
      opacity: 0.1,
      color:'#000000'
    }
  },
  details: {
    top:'0px',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
   top:'0px',
    width: 275,
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
      margin: theme.spacing(0.5),
    },
  },
}));


const CardTitleText = styled.h2`
  font-size: 1em;
  text-align: left;
  color: #404040;
  font-family: 'Nutito-Bold';
`;

const CardContentText = styled.h2`
  font-size: 0.8em;
  text-align: left;
  color: #404040;
  font-family: 'Nutito-Regular';
`;

export default function ProjectCard(props) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <Card className={classes.root}>
    <Link to={props.linkto} target="_blank"> 
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
                <Chip label={keyword} size="small" style={{'font-size': '0.7em',fontFamily: 'Nutito-Regular', borderRadius: 0}}/>)}
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