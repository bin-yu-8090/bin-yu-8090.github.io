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
  @media screen and (max-width: 767px) {
    font-size: 2em;
  }
`;

const DateText = styled.p`
  font-size: 0.8em;
  color: #C6E1EA;
  font-family: 'Nutito-Light';
  @media screen and (max-width: 767px) {
    font-size: 1.2em;
  }
`;

const DetailsText = styled.p`
  font-size: 0.9em;
  color: #C6E1EA;
  font-family: 'Nutito-Light';
  @media screen and (max-width: 767px) {
    font-size: 1.5em;
  }
`;


export const BlogsPage= ()=> { 
   return (     
      <Mainpage>
        <NavigationBar theme={'dark'}/>
        <br/>
        <br/>
        <br/>

        <Grid container spacing={0}>

                
        <Grid item xs={1} sm={2} md={3} lg={3} xl={3}></Grid>
           <Grid item xs={10} sm={8} md={6} lg={6} xl={6}>
              <PostCard 
                title={'How I envision Biofeebdack after 6 years research'}
                date={'15-Feb-2021'}
                intro={'Seven years ago, I started my Ph.D. research with a question: how to bring biofeedback closer to our everyday life so that we can use it intuitively with comfort. Since then, I have tried to find my answers in the field of Human-Computer Interaction (HCI) and have done a lot of design explorations on biofeedback sensing, display, and user interactions. Although I got some promising findings and design implications, my Ph.D. work might still be a probe into the potential of biofeedback in everyday use. And I see more future explorations are needed from the field of HCI. In this article, I will share my thoughts about future research on Biofeedback.'}
                linkto={"/FutureBiofeedback"}
                />
            </Grid>
            <Grid item xs={1} sm={2} md={3} lg={3} xl={3}></Grid>



           <Grid item xs={1} sm={2} md={3} lg={3} xl={3}></Grid>
           <Grid item xs={10} sm={8} md={6} lg={6} xl={6}>
              <PostCard 
                title={'Emotional Design for Visualization'}
                date={'15-Feb-2021'}
                intro={' When representing scientific data, we are generally not trying to evoke an emotional response from our readers, but rather to allow them to explore the data and draw empirical conclusions themselves.  While representing personal data to the everyday users for self-learning, self-regulation, self-management, the visualization could and sometimes should arouse user feelings directly. These emotions aroused by visualisations in access to their data might increase bond with personal data, and motivation to continuously use the data-related projects.'}
                linkto={"/Blog-title"}
                />
            </Grid>
            <Grid item xs={1} sm={2} md={3} lg={3} xl={3}></Grid>

        </Grid>

    </Mainpage>
    )
 }


function PostCard(props) {
  return (    
    <div>
      <div className='rowC'>
          <div>
            <TitleText>
                <Link style={{'text-decoration': 'none'}} to={props.linkto}>
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
