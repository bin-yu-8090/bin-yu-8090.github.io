import React, { Component } from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import NavigationBar from '../components/navigationBar'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const Mainpage = styled.div`
background-color: #282947;
min-height: 100vh;
`;

const TitleText = styled.p`
  font-size: 1.2em;
  color: #C6E1EA;
  font-family: 'Nutito-Regular';
`;

const DateText = styled.p`
  font-size: 0.8em;
  color: #C6E1EA;
  font-family: 'Nutito-Light';
`;

const DetailsText = styled.p`
  font-size: 0.9em;
  color: #C6E1EA;
  font-family: 'Nutito-Light';
`;


export const BlogsPage= ()=> { 
   return (     
      <Mainpage>
        <NavigationBar theme={'dark'}/>
        <br/>
        <br/>
        <br/>
        <motion.div  
         initial={{ opacity: 0,}}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}>  

        <Grid container spacing={0}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <PostCard 
                title={'Emotional Design for Visualization'}
                date={'15-Feb-2021'}
                intro={' When representing scientific data, we are generally not trying to evoke an emotional response from our readers, but rather to allow them to explore the data and draw empirical conclusions themselves.  While representing personal data to the everyday users for self-learning, self-regulation, self-management, the visualization could and sometimes should arouse user feelings directly. These emotions aroused by visualisations in access to their data might increase bond with personal data, and motivation to continuously use the data-related projects.'}
                linkto={"/Blog-title"}
                />
            </Grid>
            <Grid item xs={3}></Grid>

        </Grid>
      </motion.div>
    </Mainpage>
    )
 }


function PostCard(props) {
  return (    
    <div>
      <div className='rowC'>
          <div>
            <TitleText>
                <Link to={props.linkto}>
                  {props.title}
                </Link>
                </TitleText>
          </div>
          <div style={{paddingLeft:'1em',paddingTop:'0.4em'}}>
            <DateText>
              {props.date}
            </DateText>
          </div>
      </div>
      <div>
        <DetailsText>
          {props.intro} 
        </DetailsText>
      </div>  
      <hr style={{background:'grey'}}/>
    </div>
  )
 }
