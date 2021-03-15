import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import ReactPlayer from "react-player"
import NavigationBar from '../../components/navigationBar'

import heartcalligraphy_img_1 from '../../images/heartCalligraphy/Heart-Calligraphy_charcoal.jpg'; 
import heartcalligraphy_img_2 from '../../images/heartCalligraphy/Heart-Calligraphy_gouache.jpg'; 
import heartcalligraphy_img_3 from '../../images/heartCalligraphy/Heart-Calligraphy_Ink-dots.jpg'; 
import heartcalligraphy_img_4 from '../../images/heartCalligraphy/HC_1.jpg'; 
import heartcalligraphy_img_5 from '../../images/heartCalligraphy/HC_2.jpg'; 
import heartcalligraphy_img_6 from '../../images/heartCalligraphy/HC_3.jpg'; 
import heartcalligraphy_img_7 from '../../images/heartCalligraphy/HC_4.jpg'; 

import{Mainpage, ProjectTitle, ProjectSubTitle, ProjectIntroText, LinkText, FigureText, ProjectEndingText} from './styledComponents'

export const HeartCalligraphyPage = ()=> { 
   return (     
      <Mainpage>
        <NavigationBar theme={'light'}/>

        <Grid container spacing={2}>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <ProjectTitle>
              Heart Calligraphy
              </ProjectTitle>
          </Grid>


          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
            <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
              <ProjectSubTitle>
                Let the Heart Lead the Brush 
                </ProjectSubTitle>
            </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
           <ProjectIntroText>
              In traditional Chinese culture, calligraphy is seen as a silent reflection of the mind. 
              A Chinese calligrapher believes that the mind leads the brush, and his goal is to vividly and honestly convey his mind on paper. 
              Heart Calligraphy is inspired by this philosophy and enabled by biofeedback techniques. 
              It researches how human biodata can be translated into an aesthetic visual language [self-representation] and an aesthetic experience of self [self-awareness]. 
              In this biofeedback installation, the heart leads the brush. When the participant places his or her hands on the sensor, 
              the heartbeat is measured and directs a drawing machine to create an abstract portrait gradually appears. 
              </ProjectIntroText>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
          <div style={{textAlign:'center'}}>
              <img src={heartcalligraphy_img_1} width='100%'/>
            </div>
            <FigureText>
              This Heart Calligraphy was produced on sketching paper with a charcoal stick. <br/>
              The charcoal stick drew lines of equal length in rows, but the pen pressure was adjusted by the HR data.
            </FigureText>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
          <div style={{textAlign:'center'}}>
              <img src={heartcalligraphy_img_2} width='100%'/>
            </div>
            <FigureText>
              This Heart Calligraphy was created by a brush using gouache paint on paper. <br/>
              The heart rate data was mapped to pen downtime and pressure, leaving dots of different texture and shade. 
            </FigureText>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
          <div style={{textAlign:'center'}}>
              <img src={heartcalligraphy_img_3} width='100%'/>
            </div>
            <FigureText>
            This Heart Calligraphy  was created by a pipette with inkjet ink on paper. The HR data was mapped to pen downtime. <br/>
            With each heartbeat, the pipette was moved to the next position and placed on the paper until new data came in. <br/> 
            The drawing created in this way shows an array of round ink spots of different size and intensity. 
            </FigureText>
       
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>


          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
          <div style={{textAlign:'center'}}>
              <img src={heartcalligraphy_img_4} width='100%'/>
            </div>
       
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>


          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
          <div style={{textAlign:'center'}}>
              <img src={heartcalligraphy_img_5} width='100%'/>
            </div>
       
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
           <div style={{textAlign:'center'}}>
              <img src={heartcalligraphy_img_6} width='100%'/>
            </div>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
           <div style={{textAlign:'center'}}>
              <img src={heartcalligraphy_img_7} width='100%'/>
            </div>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
                  <ReactPlayer style={{margin: '0 auto'}}
                      url="https://vimeo.com/501280561"
                      width="100%"
                    />
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
            <ProjectEndingText>
             <br/>
             <br/>
              <strong className='strongtext'> Credits </strong>: <br/>
                Heart Calligraphy is a collaboration with  
                <LinkText href="https://www.rogierarents.nl/"  target="_blank" style={{'text-align': 'center'}}>
                Rogier Arents
                </LinkText>
                Rotterdam, the Netherlands
                and is supported by the research team (Prof.Loe Feijs, Dr.Jun Hu, Dr. Mathias Funk), Industrial Design, TU/e and Creative Industries Fund NL
                <br/>
                <br/>
              <strong className='strongtext'> Exhibitions </strong>: <br/>
                Dutch Design Week, Eindhoven, NL (2015); 
                International Conference on Tangible, Embedded and Embodied Interaction (TEI), Eindhoven, NL (2016);   
                Next Up, Kazerne, Eindhoven, NL (2016);   
                Wanted Design, New York, USA (2016);   
                Maand van de grafiek, TU/e, Eindhoven NL (2017); <br/>
                <br/>
                <strong className='strongtext'>Publications </strong>: 
                Yu, B., & Arents, R. (2019). 
                <LinkText href="https://www.mitpressjournals.org/doi/abs/10.1162/leon_a_01772"  target="_blank"> 
                  Biofeedback Painting: Let the Heart Lead the Brush. 
                </LinkText>
                <em className='journalname'>Leonardo</em>, 2019
                Yu, B., Arents, R., Hu, J., Funk, M., & Feijs, L. 
                <LinkText href="https://dl.acm.org/doi/abs/10.1145/2839462.2856341?casa_token=8DWQwFS3Ii0AAAAA:GcIKJ7as3q9vj-oguXzboCMVh4bb7l3y5OeXIBDtZJ_2--ct4dm6SxZMjiXQUcH2L9U8Vv6TUBPt"  target="_blank">  
                Heart calligraphy: an abstract portrait inside the body. 
                </LinkText> 
                In Proceedings of the 2016 <em className='journalname'> TEI </em>, 2016.
                <br/>
                Yu, B., Arents, R., Funk, M., Hu, J., & Feijs, L. M.
                <LinkText href="https://dl.acm.org/doi/abs/10.1145/2851581.2892289?casa_token=xqe27USWys8AAAAA:vQGNTeSv3FNpsMAkv2QmFLnsXq9I4qNPVj_tT46GIAKEz-p39vbrMJshA0lUgmMOIQKANaKXtfso"  target="_blank">  
                HeartPlotter: Visualizing bio-data by drawing on paper. 
                </LinkText> 
                In Extended Abstracts of the 2016 <em className='journalname'> CHI </em>, 2016. 
                <br/>      
              </ProjectEndingText>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          </Grid>

    </Mainpage>
    )
 }






