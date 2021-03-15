import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import NavigationBar from '../../components/navigationBar'

const Mainpage = styled.div`
background-color: #F2F2F2;
min-height: 100vh;
`;

const PostTitle = styled.h1`
  font-size: 2em;
  color: #262626;
  padding-top:1em;
  text-align: center;
  font-family: 'Nutito-Regular';
`;


const PostAbstractText= styled.p`
  font-size: 1em;
  text-align: left;
  color: #807F7F;
  font-family: 'Nutito-Light';
`;

const PostMainText= styled.p`
  font-size: 0.8em;
  text-align: left;
  color: #807F7F;
  font-family: 'Nutito-Light';
`;

const PostSupportText= styled.p`
  font-size: 0.8em;
  text-align: left;
  color: #807F7F;
  font-family: 'Nutito-Light';
`;




const LinkText = styled.a`
  font-size: 1em;
  padding-left:0.5em;
  padding-right:0.5em;
  color: #C19936;
  font-family: 'Nutito-Light';
  &:hover {
    color:  #7F7F7F;
  }
`;


export const  TemplateBlogPage= ()=> { 
   return (     
      <Mainpage>

        <NavigationBar theme={'light'}/>

        <Grid container spacing={2}>
         <Grid item xs={1} sm={2} md={3} lg={3} xl={3}></Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={6}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <PostTitle>
              <br/>
              <br/>
              <br/>
              Emotional Design for Visualization
              </PostTitle>
            </Grid>
            <Grid item xs={12}>
              <PostAbstractText>
              When representing scientific data, we are generally not trying to evoke an emotional response from our readers, 
              but rather to allow them to explore the data and draw empirical conclusions themselves.  
              While representing personal data to the everyday users for self-learning, self-regulation, self-management, the visualization could and sometimes should arouse user's feelings directly. 
              These user's emotions aroused by visualisations in access to theirselves' data might increase bond with personal data, and motivation to continuously use the data-related projects.
              </PostAbstractText>
            </Grid>

            <Grid item xs={12}>
             <PostMainText>
            ....coming soon
              </PostMainText>
            </Grid>


              <Grid item xs={12}>
                <PostSupportText>
                  <strong className='strongtext'> ... </strong>: <br/>
                    Share with Friends
                  <br/>
                  <strong className='strongtext'> ...</strong>: <br/>
                  Share with Friends
                </PostSupportText>
              </Grid>
            </Grid>

          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}></Grid>
         
          </Grid>

    </Mainpage>
    )
 }






