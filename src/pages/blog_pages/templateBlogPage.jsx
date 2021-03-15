import React from 'react'
import Grid from '@material-ui/core/Grid'
import NavigationBar from '../../components/navigationBar'

import {Mainpage, PostTitle,PostAbstractText, PostMainText,PostSupportText,LinkText} from './blogPageComponents'


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
             coming soon...
              </PostMainText>
            </Grid>


              <Grid item xs={12}>
                <PostSupportText>
                  <strong className='strongtext'> ... </strong>: <br/>
                  Share
                  <br/>
                  <strong className='strongtext'> ...</strong>: <br/>
                  Comment
                </PostSupportText>
              </Grid>
            </Grid>

          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}></Grid>
         
          </Grid>

    </Mainpage>
    )
 }






