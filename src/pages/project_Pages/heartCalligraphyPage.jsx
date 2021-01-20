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


const Mainpage = styled.div`
background-color: #F2F2F2;
min-height: 100vh;
`;

const ProjectTitle = styled.h1`
  font-size: 4em;
  color: #000000;
  padding-top:1em;
  text-align: center;
  font-family: 'Nutito-Regular';
`;

const ProjectSubTitle = styled.h2`
  font-size: 1.2em;
  color:#000000;
  text-align: center;
  font-family: 'Nutito-Regular';
`;

const ProjectIntroText= styled.p`
  font-size: 1em;
  text-align: center;
  color: #7F7F7F;
  font-family: 'Nutito-Light';
`;

const LinkText = styled.a`
  font-size: 1em;
  padding-left:0.5em;
  padding-right:0.5em;
  color: #C19936;
  font-family: 'Nutito-Light';
  &:hover {
    color:#262626;
  }
`;

const ProjectDiscriptionText= styled.p`
  font-size: 0.8em;
  padding-left:8em;
  padding-right:5em;
  text-align: left;
  color: #807F7F;
  font-family: 'Nutito-Light';
`;

export const HeartCalligraphyPage = ()=> { 
   return (     
      <Mainpage>
        <NavigationBar theme={'light'}/>

        <Grid container spacing={2}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <ProjectTitle>
                Heart Calligraphy
              </ProjectTitle>
            </Grid>
            <Grid item xs={12}>
              <ProjectSubTitle>
              Let the Heart Lead the Brush
              </ProjectSubTitle>
            </Grid>
            <Grid item xs={12}>
              <ProjectIntroText>
                In traditional Chinese culture calligraphy is seen as a silent reflection of the mind. 
                A Chinese calligrapher believes that the mind leads the brush, and his goal is to vividly and honestly convey his mind on paper. 
                Heart Calligraphy is inspired by this philosophy and enabled by biofeeddback techniques. 
                It researches how human biodata can be translated into an aesthetic visual language [self-representation] and an aesthetic experience of self [self-awareness]. 
                In this biofeedback installation, the heart leads the brush. When the participant places his or her hands on the sensor, 
                the heartbeat is measured and directs a drawing machine to portray the human body from the inside, with a first-person view. 
                The participant follows his or her heartbeat by observing the pen movement and an abstract portrait gradually appears. 
              </ProjectIntroText>
            </Grid>

            <Grid item xs={12}>
            <div style={{textAlign:'center'}}>
              <img src={heartcalligraphy_img_1} width='77%'/>
            </div>
            </Grid>


            <Grid item xs={12}>
            <div style={{textAlign:'center'}}>
              <img src={heartcalligraphy_img_2} width='77%'/>
            </div>
            </Grid>

            <Grid item xs={12}>
            <div style={{textAlign:'center'}}>
              <img src={heartcalligraphy_img_3} width='77%'/>
            </div>
            </Grid>

            <Grid item xs={12}>
            <div style={{textAlign:'center'}}>
              <img src={heartcalligraphy_img_4} width='77%'/>
            </div>
            </Grid>

            <Grid item xs={12}>
            <div style={{textAlign:'center'}}>
              <img src={heartcalligraphy_img_5} width='77%'/>
            </div>
            </Grid>

            <Grid item xs={12}>
            <div style={{textAlign:'center'}}>
              <img src={heartcalligraphy_img_6} width='77%'/>
            </div>
            </Grid>

            <Grid item xs={12}>
            <div style={{textAlign:'center'}}>
              <img src={heartcalligraphy_img_7} width='77%'/>
            </div>
            </Grid>

            <Grid item xs={12}>
              <div>
                  <ReactPlayer style={{margin: '0 auto'}}
                      url="https://vimeo.com/501280561"
                    />
              </div>
            </Grid>


            <Grid item xs={12}>
            <ProjectDiscriptionText>
            <strong className='strongtext'> Credits </strong>: <br/>
              Heart Calligraphy is a collaboration with  
              <LinkText href="https://www.rogierarents.nl/"  target="_blank" style={{'text-align': 'center'}}>
               Rogier Arents
              </LinkText>
              Rotterdam, the Netherlands
              and is supported by the research team (Prof.Loe Feijs, Dr.Jun Hu, Dr. Mathias Funk), Industrial Design, TU/e and Creative Industries Fund NL
              <br/>
            <strong className='strongtext'> Exhibitions </strong>: <br/>
              Dutch Design Week, Eindhoven, NL (2015); 
              International Conference on Tangible, Embedded and Embodied Interaction (TEI), Eindhoven, NL (2016);   
              Next Up, Kazerne, Eindhoven, NL (2016);   
              Wanted Design, New York, USA (2016);   
              Maand van de grafiek, TU/e, Eindhoven NL (2017); <br/>
              <strong className='strongtext'>Publications </strong>: 
              <br/>
              Yu, B., & Arents, R. (2019). 
              <LinkText href="https://www.mitpressjournals.org/doi/abs/10.1162/leon_a_01772"  target="_blank"> 
                Biofeedback Painting: Let the Heart Lead the Brush. 
              </LinkText>
              <em className='journalname'>Leonardo</em>, 2019
              <br/>
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
            </ProjectDiscriptionText>
            </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}></Grid>
         
          </Grid>

    </Mainpage>
    )
 }






