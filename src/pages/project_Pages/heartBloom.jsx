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


import{Mainpage, ProjectTitle, ProjectSubTitle, ProjectIntroText, LinkText,  ProjectDiscriptionText, ProjectSectionTitle, JumpLink, MultipleImgsFrame, ProjectEndingText} from './styledComponents'


export const HeartBloomPage = ()=> { 
   return (     
      <Mainpage>
        <NavigationBar theme={'light'}/>

        <Grid container spacing={2}>

         <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <ProjectTitle>
              HeartBloom
              </ProjectTitle>
          </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
             <ProjectSubTitle>
             A flower blooming with each heartbeat
              </ProjectSubTitle>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>


          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
            <ProjectIntroText>
                 Heart Bloom started with Biofeedback research (2014).
                  It is an exploration of a tangible interface that empowers participants to see, hear and feel the rhythm of their heart. 
                  Also, it is a metaphorical visualization that illustrates the users’ heartbeat into floral graphics, which reflects the natural biorhythm inside the human body.
                  Since 2015, Heart Bloom has been continuing to evolve from 
                  a biofeedback interface,  metaphorical visualization <JumpLink href="/HeartBloom#2014">(2014)</JumpLink> to
                  a live interactive installation <JumpLink href="/HeartBloom#2015">(2015)</JumpLink>,
                  charity activity <JumpLink href="/HeartBloom#2016">(2016)</JumpLink>, 
                  and a service design for sustainable fundraising<JumpLink href="/HeartBloom#2017">(2017)</JumpLink>.     
              </ProjectIntroText>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <br/>
            <hr/>
            <br/>
          </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
            <ProjectSectionTitle>
                <a id="2014">
                   HEART BLOOM as Biofeedback Interface
                </a>
              </ProjectSectionTitle>
              <ProjectDiscriptionText>
              Only when experiencing excitement or fear, we feel our heart beat fast inside our chest. 
              Most of the time, the heart is continually changing its frequency without us being aware of it. 
              With the Biofeedback technique, this naturally changing heartbeat rhythm can be captured and 
              rapidly presented back to us, improving our awareness of physiological conditions and facilitating self-regulations.
              </ProjectDiscriptionText>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={6}>
                  <ReactPlayer 
                      width="100%" 
                      url="https://vimeo.com/188134735"
                    />
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
            <ProjectDiscriptionText>
                Heart Bloom is a tangible interface, which offers the users a biofeedback experience through mechanical movement, sound, and visualization. 
                Each heartbeat triggers one movement, creating a line or a dot. The variation of the heart rate is demonstrated by the pen’s behaviour in real time. 
                The overall heart rate variability is reflected by the visual characteristics of the generated flower drawing on paper. 
              </ProjectDiscriptionText>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
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
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
             <div style={{textAlign:'center'}}>
                <img src={heartbloom_img_5} width='100%'/>
              </div>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
           <ProjectDiscriptionText>
              Each Heart Bloom has itself unique pattern based on different physiological and emotional conditions. 
            </ProjectDiscriptionText>
             <div style={{textAlign:'center'}}>
               <img src={heartbloom_img_6} width='100%'/>
              </div>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <br/>
            <hr/>
            <br/>
          </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
          <ProjectSectionTitle>
                <a id="2015">
                  HEART BLOOM as a participatory live-art installation
                </a>
              </ProjectSectionTitle>
              <ProjectDiscriptionText>
              In November 2015, Heart Bloom was exhibited in Dubai Design Week. As a live installation, it enables each audience to experience their heart rhythm in real-time.
              It offered participants an on-site interactive experience, but also an extended  'social' experience connected to someone they love.
              The installation drew the participant’s heartbeat data into a blooming flower on a postcard which was then mailed to their beloved ones 
              as a special ‘heartful’ greeting, shortening the distance of the heart and heart.
              </ProjectDiscriptionText>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={4}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={6}>
                  <ReactPlayer 
                      width="100%" 
                      url="https://vimeo.com/146027682"
                    />
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>


          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={6}>
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
          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <br/>
            <hr/>
            <br/>
          </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={6}>
            <ProjectSectionTitle>
                <a id="2016">
                    HEART BLOOM as a charitable initiative 
                </a>
                </ProjectSectionTitle>

              <ProjectDiscriptionText>
                In 2016, HEART BLOOM served as a charitable initiative that aims to help children with congenital heart disease (CHD).
                We brought HEART BLOOM to those CHD children to let them play with and create the ‘blooming flowers’ on cards. 
                The interaction with HEART BLOOM also allows them to see, hear and feel every beat of their heart. 
                We wanted to create a positive message to those CHD children that everyone is special, and their tender hearts are lovable and also full of power. 
              </ProjectDiscriptionText>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={6}>
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
          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={6}>
            <div style={{textAlign:'center'}}>
                <img src={heartbloom_img_15} width='100%'/>
              </div>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>


          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={6}>
            <ProjectDiscriptionText>
                In Dutch Design Week 2016, the HEART BLOOMs created by CHD children were exhibited as a collective drawing, 
                which aimed to raise public attention and awareness that the heartbeat of CHD children might be abnormal but inimitably beautiful.
              </ProjectDiscriptionText>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>


          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={6}>
            <div style={{textAlign:'center'}}>
              <img src={heartbloom_img_16} width='100%'/>
            </div>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>



          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <br/>
            <hr/>
            <br/>
          </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={6}>
          <ProjectSectionTitle>
              <a id="2017">
                HEART BLOOM as a charitable fundraising service
              </a>
            </ProjectSectionTitle>

              <ProjectDiscriptionText>
                Since Dutch Design Week 2016, Heart Bloom has served as a charitable fundraising service for Hartstichting (Dutch Heart Foundation).
                The on-site installation invited people to participate in this charity project. By interacting with the installation, 
                the participants could create a unique Heart Bloom card, which was collected into an artwork that shows 
                the diversity of the heart and raises awareness about congenital heart disease. 
                We developed the 
                <LinkText href="http://heartbloom.rogierarents.nl/ddw.html"  target="_blank" style={{'text-align': 'center'}}>
                HeartBloom fundraising website
                </LinkText>, which provides the participantsaccess to their heart bloom pattern 
                and also an entry to the Dutch Heart Foundation website for online donation. 
                In this first stage of the project, we designed a data-driven approach that aims to transform a one-time donation into a sustainable fundraising service.
                As the participant's heartbeat data  was collected in the on-site installation,
                the participants could use their heartbeat data to create an artwork, like a flower print. 
                And each order will make a 5-20 euro donation. The creation and updates of the data-artwork form might constantly 
                engage the participants with the charity service and bring in new donations.
              </ProjectDiscriptionText>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>


          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={6}>
                <ReactPlayer style={{margin: '0 auto'}}
                  width="100%"
                    url="https://vimeo.com/188135542"
                  />
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={6}>
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
          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={6}>
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
          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={6}>
           <div style={{textAlign:'center'}}>
              <img src={heartbloom_img_25} width='100%'/>
            </div>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>


          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={6}>
           <div style={{textAlign:'center'}}>
              <img src={heartbloom_img_26} width='100%'/>
            </div>
          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>
            <Grid item xs={10} sm={8} md={6} lg={6} xl={6}>
              <ProjectDiscriptionText>
                  and also an entry to the Dutch Heart Foundation website for online donation. 
                  In this first stage of the project, we designed a data-driven approach that aims to transform a one-time donation into a sustainable fundraising service.
                  As the participant's heartbeat data  was collected in the on-site installation,
                  the participants could use their heartbeat data to create an artwork, like a flower print. 
                  And each order will make a 5-20 euro donation. The creation and updates of the data-artwork form might constantly 
                  engage the participants with the charity service and bring in new donations.
                </ProjectDiscriptionText>
            </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>

          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>
            <Grid item xs={10} sm={8} md={6} lg={6} xl={6}>
            <ProjectEndingText>
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
            </ProjectEndingText>
            </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}> </Grid>


          </Grid>

    </Mainpage>
    )
 }






