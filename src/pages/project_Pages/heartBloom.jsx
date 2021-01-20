import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import ReactPlayer from "react-player"
import NavigationBar from '../../components/navigationBar'

import heartbloom_img_1 from '../../images/heartBloom/heartbloom_1.gif'; 
import heartbloom_img_2 from '../../images/heartBloom/heartbloom_2.gif'; 
import heartbloom_img_3 from '../../images/heartBloom/heartbloom_3.gif'; 
import heartbloom_img_4 from '../../images/heartBloom/heartbloom_4.gif'; 
import heartbloom_img_5 from '../../images/heartBloom/heartbloom_red_flower_drawing.JPG'; 
import heartbloom_img_6 from '../../images/heartBloom/heartbloom_flowers.jpg'; 
import heartbloom_img_7 from '../../images/heartBloom/HeartBloom_dubai1.jpg'; 
import heartbloom_img_8 from '../../images/heartBloom/HeartBloom_dubai2.jpg'; 
import heartbloom_img_9 from '../../images/heartBloom/HeartBloom_dubai3.jpg'; 
import heartbloom_img_10 from '../../images/heartBloom/HeartBloom_dubai4.JPG'; 
import heartbloom_img_11 from '../../images/heartBloom/heartbloom_children_1.JPG'; 
import heartbloom_img_12 from '../../images/heartBloom/heartbloom_children_2.JPG'; 
import heartbloom_img_13 from '../../images/heartBloom/heartbloom_children_3.JPG'; 
import heartbloom_img_14 from '../../images/heartBloom/heartbloom_children_4.png'; 
import heartbloom_img_15 from '../../images/heartBloom/heartbloom_children_5.png'; 
import heartbloom_img_16 from '../../images/heartBloom/HeartBloom_collective_drawing.png'; 
import heartbloom_img_17 from '../../images/heartBloom/HeartBloom_DDW_6.jpg'; 
import heartbloom_img_18 from '../../images/heartBloom/HeartBloom_DDW_7.jpg'; 
import heartbloom_img_19 from '../../images/heartBloom/HeartBloom_DDW_8.jpg'; 
import heartbloom_img_20 from '../../images/heartBloom/HeartBloom_DDW_5.jpg'; 
import heartbloom_img_21 from '../../images/heartBloom/HeartBloom_DDW_1.jpg'; 
import heartbloom_img_22 from '../../images/heartBloom/HeartBloom_DDW_2.jpg'; 
import heartbloom_img_23 from '../../images/heartBloom/HeartBloom_DDW_3.jpg'; 
import heartbloom_img_24 from '../../images/heartBloom/HeartBloom_DDW_4.jpg'; 
import heartbloom_img_25 from '../../images/heartBloom/HeartBloom_DDW_9.jpg'; 
import heartbloom_img_26 from '../../images/heartBloom/HeartBloom_DDW_10.jpg'; 


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

const ProjectSectionTitle = styled.h3`
  font-size: 1.2em;
  color:#000000;
  padding-bottom: 1em;
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
    color:#FF4C42;
  }
`;

const ProjectDiscriptionText= styled.p`
  font-size: 0.9em;
  padding-left:7em;
  padding-right:5em;
  text-align: left;
  color: #807F7F;
  font-family: 'Nutito-Light';
`;


const MultipleImgsFrame= styled.div`
  padding-left:6em;
  padding-right:6em;
`;

const ProjectEndText= styled.p`
  font-size: 0.8em;
  padding-top:5em;
  padding-left:8em;
  padding-right:5em;
  text-align: left;
  color: #807F7F;
  font-family: 'Nutito-Light';
`;

export const HeartBloomPage = ()=> { 
   return (     
      <Mainpage>
        <NavigationBar theme={'light'}/>

        <Grid container spacing={2}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <ProjectTitle>
                HeartBloom
              </ProjectTitle>
            </Grid>
            <Grid item xs={12}>
              <ProjectSubTitle>
              Make each heartbeat count
              </ProjectSubTitle>
            </Grid>
            <Grid item xs={12}>
              <ProjectIntroText>
              Heart Bloom started with Biofeedback research (2014).
              It is an exploration of tangible interface that empowers participants to see, hear and feel the rhythm of their heart. 
              Also, it is a metaphorical visualization that illustrates the users’ heartbeat into a floral graphics, which reflects the natural biorhythm inside the human body.
              Since 2015, Heart Bloom has been continuing to evolve from a biofeedback interface, a metaphorical visualization to
              a live installation (2015), charity activity (2016) and fundraising (business) service design (2017).
              </ProjectIntroText>
            </Grid>

    
            <Grid item xs={12}>
            <br/>
            <hr/>
            <br/>
            </Grid>

            <Grid item xs={12}>
              <ProjectSectionTitle>
                  HEART BLOOM as Biofeedback Interface
              </ProjectSectionTitle>
              <ProjectDiscriptionText>
                Only when you experience excitement or fear you actually feel your heart beat fast inside our chest. 
                However, without you being aware of it, the heart is continually changing its frequency. 
                Biofeedback is a technique that measures physiological processes, and rapidly gives back the data to the users, 
                helping them to be aware of their physiological conditions. 
              </ProjectDiscriptionText>
            </Grid>

            <Grid item xs={12}>
              <div>
                  <ReactPlayer style={{margin: '0 auto'}}
                      url="https://vimeo.com/188134735"
                    />
              </div>
            </Grid>


            <Grid item xs={12}>
              <ProjectDiscriptionText>
                Heart Bloom is a tangible interface, which offers the users a biofeedback experience through mechanical movement, sound, and visualization. 
                Each heartbeat triggers one movement, creating a line or a dot. The variation of the heart rate is demonstrated by the pen’s behaviour in real time. 
                The overall heart rate variability is reflected by the visual characteristics of the generated drawing on paper. 
              </ProjectDiscriptionText>
            </Grid>


            <Grid item xs={12}>
            <MultipleImgsFrame >
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <img src={heartbloom_img_1} width='100%' />
                </Grid>
                <Grid item xs={6}>
                  <img src={heartbloom_img_2}  width='100%'/>
                </Grid>
                <Grid item xs={6}>
                  <img src={heartbloom_img_3}  width='100%'/>
                </Grid>
                <Grid item xs={6}>
                  <img src={heartbloom_img_4}  width='100%'/>
                </Grid>
              </Grid>            
            </MultipleImgsFrame>
            </Grid>

            <Grid item xs={12}>
             <div style={{textAlign:'center'}}>
               <img src={heartbloom_img_5} width='77%'/>
              </div>
             </Grid>


            <Grid item xs={12}>
            <ProjectDiscriptionText>
              Each Heart Bloom has itself unique pattern based on different physiological and emotional conditions. 
            </ProjectDiscriptionText>
     
             <div style={{textAlign:'center'}}>
               <img src={heartbloom_img_6} width='77%'/>
              </div>
             </Grid>

             <Grid item xs={12}> <br/> <hr/> <br/></Grid>
            
            <Grid item xs={12}>
              <ProjectSectionTitle>
                  HEART BLOOM as a participatory live-art installation
              </ProjectSectionTitle>
              <ProjectDiscriptionText>
              In November 2015, Heart Bloom was exhibited as Dubai Design Week. As a live installation, it enable each audience to experience their heart rhythm in real time.
              It only offered a on-site interactive experience, but also an extended participatory 'social' experience. 
              The installation drawed the participant’s heartbeat data into a blooming flower on a postcard which was then mailed to their beloved ones 
              as a special and ‘heartful’ greeting, shortening the distance of the heart and heart.
              </ProjectDiscriptionText>
            </Grid>

            <Grid item xs={12}>
            <div>
                  <ReactPlayer style={{margin: '0 auto'}}
                      url="https://vimeo.com/146027682"
                    />
              </div>
            </Grid>

            <Grid item xs={12}>
              <MultipleImgsFrame >
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <img src={heartbloom_img_7} width='100%' />
                  </Grid>
                  <Grid item xs={6}>
                    <img src={heartbloom_img_8}  width='100%'/>
                  </Grid>
                  <Grid item xs={6}>
                    <img src={heartbloom_img_9}  width='100%'/>
                  </Grid>
                  <Grid item xs={6}>
                    <img src={heartbloom_img_10}  width='100%'/>
                  </Grid>
                </Grid>            
              </MultipleImgsFrame>
            </Grid>

            <Grid item xs={12}> <br/> <hr/> <br/></Grid>

            <Grid item xs={12}>
            <ProjectSectionTitle>
                HEART BLOOM as a charitable initiative 
              </ProjectSectionTitle>

            <ProjectDiscriptionText>
              In 2016, HEART BLOOM served as a charitable initiative that aims to help children with congenital heart disease (CHD).
              We brought HEART BLOOM to those CHD children to let them play with and create the ‘blooming flowers’ on cards. 
              The interaction with HEART BLOOM also allows them to see, hear and feel every beat of their heart. 
              We wanted to create a positive message to those CHD children that everyone is special, and their tender hearts are lovable and also full of power. 

            </ProjectDiscriptionText>
            </Grid>

            <Grid item xs={12}>
              <MultipleImgsFrame >
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                  <img src={heartbloom_img_11} width='100%'/>
                  </Grid>
                  <Grid item xs={6}>
                  <img src={heartbloom_img_12} width='100%'/>
                  </Grid>
                  <Grid item xs={6}>
                  <img src={heartbloom_img_13} width='100%'/>
                  </Grid>
                  <Grid item xs={6}>
                  <img src={heartbloom_img_14} width='100%'/>
                  </Grid>
                </Grid>            
              </MultipleImgsFrame>
            </Grid>

            <Grid item xs={12}>
            <div style={{textAlign:'center'}}>
              <img src={heartbloom_img_15} width='77%'/>
            </div>
            </Grid>


            <Grid item xs={12}>
              <ProjectDiscriptionText>
                The HEART BLOOMs created by CHD children were made into a collective drawing which was exhibited in Ducth Design Week 2016,
                which aimed to raise public attention and awareness that the heartbeat of a CHD children might be abnormal but inimitably beautiful, 
                it is wonderful for us to help them to keep the heart beating, and to moisten these ‘flowers’ blooming for long.
              </ProjectDiscriptionText>
            </Grid>

            <Grid item xs={12}>
            <div style={{textAlign:'center'}}>
              <img src={heartbloom_img_16} width='77%'/>
            </div>
            </Grid>

            <Grid item xs={12}> <br/> <hr/> <br/></Grid>

          <Grid item xs={12}>
           <ProjectSectionTitle>
              HEART BLOOM as a charitable fundraising service
            </ProjectSectionTitle>

            <ProjectDiscriptionText>
              During Dutch Design Week 2016, Heart Bloom served as a charitable fundraising service for Hartstichting (Dutch Heart Foundation).
              The on-site installation invite the visitors to participate in this charity project. By interacting with the installation, 
              the participants created a unique Heart Bloom card, which was collected into a artwork that shows 
              the diversity of the heart and raises awareness about congenital heart disease. 
              We developed the 
              <LinkText href="http://heartbloom.rogierarents.nl/ddw.html"  target="_blank" style={{'text-align': 'center'}}>
              HeartBloom fundraising website
              </LinkText>, which provides the participants the access to their heart bloom pattern 
              and also an entry to Dutch Heart Foundation website for online donation. 
              In this first stage of the project, a postcard printing and mailing service is provided. 
              By making a small amount of online donation (5-20 euro), the participants can receive a postcard with their created Heart Bloom as a reward. 
            </ProjectDiscriptionText>
            </Grid>

            <Grid item xs={12}>
            <div>
                  <ReactPlayer style={{margin: '0 auto'}}
                      url="https://vimeo.com/188135542"
                    />
              </div>
            </Grid>

            <Grid item xs={12}>
              <MultipleImgsFrame >
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                  <img src={heartbloom_img_17} width='100%'/>
                  </Grid>
                  <Grid item xs={6}>
                  <img src={heartbloom_img_18} width='100%'/>
                  </Grid>
                  <Grid item xs={6}>
                  <img src={heartbloom_img_19} width='100%'/>
                  </Grid>
                  <Grid item xs={6}>
                  <img src={heartbloom_img_20} width='100%'/>
                  </Grid>
                </Grid>            
              </MultipleImgsFrame>
            </Grid>


            <Grid item xs={12}>
              <MultipleImgsFrame >
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                  <img src={heartbloom_img_21} width='100%'/>
                  </Grid>
                  <Grid item xs={6}>
                  <img src={heartbloom_img_22} width='100%'/>
                  </Grid>
                  <Grid item xs={6}>
                  <img src={heartbloom_img_23} width='100%'/>
                  </Grid>
                  <Grid item xs={6}>
                  <img src={heartbloom_img_24} width='100%'/>
                  </Grid>
                </Grid>            
              </MultipleImgsFrame>
            </Grid>


            <Grid item xs={12}>
            <div style={{textAlign:'center'}}>
              <img src={heartbloom_img_25} width='77%'/>
            </div>
            </Grid>
            <Grid item xs={12}>
            <div style={{textAlign:'center'}}>
              <img src={heartbloom_img_26} width='77%'/>
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
              Dubai Design Week, Dubai, UAE (2015); 
              Dutch Design Week, Eindhoven, NL (2016);  
              Wanted Design, New York, USA (2016);   <br/>
              <strong className='strongtext'>Publications </strong>: 
              <br/>
              Yu, B., & Arents, R. (2019). 
              <LinkText href="https://www.mitpressjournals.org/doi/abs/10.1162/leon_a_01772"  target="_blank"> 
                Biofeedback Painting: Let the Heart Lead the Brush. 
              </LinkText>
              <em className='journalname'>Leonardo</em>, 2019
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






