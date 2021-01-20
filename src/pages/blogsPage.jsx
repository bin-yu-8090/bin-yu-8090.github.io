import React, { Component } from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import NavigationBar from '../components/navigationBar'
import { Link } from 'react-router-dom';

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
        <Grid container spacing={0}>


            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <PostCard 
                title={'Emotional Design for Visualization'}
                date={'15-Feb-2021'}
                intro={'I am a Data Designer in Philips Design. Before I studied design, I was a Biomedical Engineer & Researcher. I obtained dual Bachelor degrees in Industrial Design and Biomedical Engineering at Chongqing University (2010). Afterward, I continued my master study at Northeastern University (2012), during which I focused on the design of mobile ECG monitoring application. In 2012, I went to Shenzhen and worked in Research Center for Neural Engineering, Shenzhen Institute of Advanced Technology, Chinese Academy of Sciences. In this year, my research explored the application of high-density EMG signal for biofeedback rehabilitation.'}
                linkto={"/projects/HeartCalligraphy"}
                />
            </Grid>
            <Grid item xs={3}></Grid>

            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <PostCard 
                title={'Emotional Design for Visualization'}
                date={'15-Feb-2021'}
                intro={'...coming soon'}
                linkto={"/projects/HeartCalligraphy"}
                />
            </Grid>
            <Grid item xs={3}></Grid>

            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <PostCard 
                title={'Emotional Design for Visualization'}
                date={'15-Feb-2021'}
                intro={'...coming soon'}
                linkto={"/projects/HeartCalligraphy"}
                />
            </Grid>
            <Grid item xs={3}></Grid>

            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <PostCard 
                title={'Emotional Design for Visualization'}
                date={'15-Feb-2021'}
                intro={'...coming soon'}
                linkto={"/projects/HeartCalligraphy"}
                />
            </Grid>
            <Grid item xs={3}></Grid>
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
                <Link to={props.linkto} target="_blank">
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
