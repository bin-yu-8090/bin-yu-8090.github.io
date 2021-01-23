import React, { Component } from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import NavigationBar from '../components/navigationBar'
import { motion } from "framer-motion"

import profile_img from '../images/by_profile_photo.png'; // Tell Webpack this JS file uses this image

const Mainpage = styled.div`
background-color: #282947;
min-height: 100vh;
`;

const TitleText = styled.h2`
  font-size: 1.2em;
  color: #C6E1EA;
  font-family: 'Nutito-Regular';
`;

const SectionTitleText= styled.p`
  font-size: 1em;
  color: #C6E1EA;
  font-family: 'Nutito-Bold';
`;

const SubsectionTitleText = styled.p`
  font-size: 0.9em;
  color: #C6E1EA;
  font-family: 'Nutito-Regular';
`;

const DetailsText = styled.p`
  font-size: 0.9em;
  color: #C6E1EA;
  font-family: 'Nutito-Light';
`;

const LinkPublication = styled.a`
  padding-left:0.5em;
  padding-right:0.5em;
  color: #C6E1EA;
  font-family: 'Nutito-Light';
  &:hover {
    color: #68CAFA;
  }
`;


export const AboutPage = ()=> { 
   return (     
      <Mainpage>
        <NavigationBar theme={'dark'}/>
        <br/>
        <br/>

        <motion.div  
         initial={{ opacity: 0,}}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}>  

        <Grid container spacing={2}>

          <Grid item xs={12}>
            <div style={{textAlign:'center'}}>
              <img src={profile_img}  height="180"  style={{ marginLeft: '20px', marginRight: '20px'}}/>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div style={{textAlign:'center'}}>
            <TitleText>
              Bin YU 
            </TitleText>
            <TitleText>
              于 滨
            </TitleText>
            </div>
          </Grid>

          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <DetailsText>
              I am a Data Designer in Philips Design. Before I studied design, I was a Biomedical Engineer & Researcher. 
              I obtained dual Bachelor degrees in Industrial Design and Biomedical Engineering at Chongqing University (2010). 
              Afterward, I continued my master study at Northeastern University (2012), during which I focused on the design of mobile ECG monitoring application. 
              In 2012, I went to Shenzhen and worked in Research Center for Neural Engineering, Shenzhen Institute of Advanced Technology, Chinese Academy of Sciences. 
              In this year, my research explored the application of high-density EMG signal for biofeedback rehabilitation.
              In 2013, I moved to Eindhoven and started my Ph.D. journey at Industrial Design department, Eindhoven Univerity of Technology.
              My PhD topic is 'Designing Biofeedback for Stress Management', which lies in the intersection of personalized healthcare, Human-Computer-Interaction and data visualisation. 
              My current work focuses on Human-Ai Collaboratioin in clinical context and Data Visualization for story-telling and sense-making.

            </DetailsText>
          </Grid>
          <Grid item xs={3}></Grid>

          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
           <SectionTitleText>
             Employment
           </SectionTitleText>
            <DetailsText>
              2019.03 - Now,  Data Designer, Philips Design, Royal Philips <br/>
              2018.01 - 2019.02,  Post-Doc Researcher, Industrial Design, Eindhoven University of Technology, TU/e. <br/>
              2013.10 - 2017.12,  Ph.D. Researcher, Industrial Design, Eindhoven University of Technology, TU/e. <br/>
              2012.09 - 2013.09,  Research Assistant, Shenzhen Institute of Advanced Technology, Chinese Academy of Sciences. <br/>  
            </DetailsText>
          </Grid>
          <Grid item xs={3}></Grid>

          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
           <SectionTitleText>
             Education
           </SectionTitleText>
            <DetailsText>
               2013.10 - 2017.12 Ph.D. Industrial Design, Eindhoven University of Technology, TU/e. <br/>
               2010.09 - 2012.08 Master Biomedical Engineering, Eindhoven University of Technology, TU/e. <br/>
               2008.09 - 2010.07 Bachelor Industrial Design, ChongQing Univerity, Chongqing, China. <br/>
               2006.09 - 2010.07 Bachelor Biomedical Engineering, ChongQing Univerity, Chongqing, China. <br/>
            </DetailsText>
          </Grid>
          <Grid item xs={3}></Grid>

          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
           <SectionTitleText>
             Exhibitions 
           </SectionTitleText>
            <DetailsText>
              "LightSit", Mind the Step, Dutch Design Week, Eindhoven, the Netherlands, 2018 <br/>
              "BioFidget", Mind the Step, Dutch Design Week, Eindhoven, the Netherlands, 2018 <br/>
              "Heart Bloom", Mind the Step, Dutch Design Week, Eindhoven, the Netherlands, 2017<br/>
              "Heart Bloom", the WantedDesign, New York Design Week, New York, USA, 2016<br/>
              "Heart Calligraphy", TEI Art Track exhibition, Eindhoven, the Netherlands, 2016<br/>
              "BioMirror", Global Grad Show, Dubai Design Week, Dubai, UAE, 2015<br/>
              "Heart Bloom", Global Grad Show, Dubai Design Week, Dubai, UAE, 2015<br/>
              "BioMirror", Mind the Step, Dutch Design Week, Eindhoven, the Netherlands, 2015<br/>
              "Dialogue“, Dutch  invertuals, SALONE DEL MOBILE MILAN, Milan, Italy, 2015<br/>
            </DetailsText>
          </Grid>
          <Grid item xs={3}></Grid>

          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
           <SectionTitleText>
             Grants
           </SectionTitleText>
            <DetailsText>
            Creative Industrial Knowledge-Innovation-Mapping, Dutch Research Council (NWO), 2018 <br/>
            “Dutch Research for Design”, Design United (4TU federation), 2016<br/>
            “Dutch Research for Design”, Design United (4TU federation), 2015<br/>
            </DetailsText>
          </Grid>
          <Grid item xs={3}></Grid>


         <Grid item xs={3}></Grid>
          <Grid item xs={6}>
           <SectionTitleText>
             Publications
           </SectionTitleText>
            <SubsectionTitleText>
              - Journals -
            </SubsectionTitleText>
            <DetailsText>
            <p>
              Xue, M., Liang, R. H., <strong className='strongtext'> Yu, B.</strong>, Funk, M., Hu, J., & Feijs, L.
              <LinkPublication href="https://ieeexplore.ieee.org/abstract/document/8831373"  target="_blank"> 
                AffectiveWall: Designing Collective Stress-Related Physiological Data Visualization for Reflection.
              </LinkPublication>
              <em className='journalname'>IEEE Access</em>, 2019.
            </p>

            <p>
              Ren, X., <strong className='strongtext'> Yu, B.</strong>, Lu, Y., Chen, Y., & Pu, P.
              <LinkPublication href="https://www.tandfonline.com/doi/full/10.1080/10447318.2018.1506641"  target="_blank"> 
                HealthSit: designing posture-based interaction to promote exercise during fitness breaks. 
              </LinkPublication>
              <em className='journalname'>International Journal of Human–Computer Interaction</em>, 2019.
            </p>

            <p>
              <strong className='strongtext'> Yu, B.</strong>, & Arents, R. (2019). 
              <LinkPublication href="https://www.mitpressjournals.org/doi/abs/10.1162/leon_a_01772"  target="_blank"> 
                Biofeedback Painting: Let the Heart Lead the Brush. 
              </LinkPublication>
              <em className='journalname'>Leonardo</em>, 2019
            </p>

            <p>
               Ren, X.,<strong className='strongtext'> Yu, B.</strong>, Lu, Y., Zhang, B., Hu, J., & Brombacher, A.
               <LinkPublication href="https://www.mdpi.com/1424-8220/19/9/2162"  target="_blank"> 
                 LightSit: An unobtrusive health-promoting system for relaxation and fitness microbreaks at work.
              </LinkPublication>
               <em className='journalname'>Sensors</em>, 2019.
             </p>

             <p>
              <strong className='strongtext'> Yu, B.</strong>, Hu, J., Funk, M., Liang, R. H., Xue, M., & Feijs, L.
              <LinkPublication href="https://ieeexplore.ieee.org/abstract/document/8404138"  target="_blank"> 
               RESonance: Lightweight, room-scale audio-visual biofeedback for immersive relaxation training. 
              </LinkPublication>
              <em className='journalname'>IEEE Access</em>, 2018
             </p>

             <p>
               <strong className='strongtext'> Yu, B.</strong>, Funk, M., Hu, J., & Feijs, L.
               <LinkPublication href="https://www.tandfonline.com/doi/full/10.1080/0144929X.2018.1484515"  target="_blank"> 
                Unwind: a musical biofeedback for relaxation assistance.
               </LinkPublication> 
               <em className='journalname'>Behaviour & Information Technology</em>, 2018.
             </p>

             <p>
              <strong className='strongtext'> Yu, B.</strong>, Funk, M., Hu, J., Wang, Q., & Feijs, L.
               <LinkPublication href="https://www.frontiersin.org/articles/10.3389/fict.2018.00023/full"  target="_blank"> 
                 Biofeedback for everyday stress management: a systematic review. 
               </LinkPublication>
               <em className='journalname'>Frontiers in ICT </em>, 2018.       
            </p>

            <p>
              <strong className='strongtext'> Yu, B.</strong>, Hu, J., Funk, M., & Feijs, L. 
               <LinkPublication href="https://link.springer.com/article/10.1007/s00779-018-1141-6"  target="_blank"> 
                DeLight: biofeedback through ambient light for stress intervention and relaxation assistance.  
               </LinkPublication>
               <em className='journalname'>Personal and Ubiquitous Computing</em>, 2018.
            </p>

            <p>
               Wang, Q., Markopoulos, P., <strong className='strongtext'> Yu, B.</strong>, Chen, W., & Timmermans, A. 
               <LinkPublication href="https://jneuroengrehab.biomedcentral.com/articles/10.1186/s12984-017-0229-y"  target="_blank"> 
                Interactive wearable systems for upper body rehabilitation: a systematic review.
               </LinkPublication> 
               <em className='journalname'>Journal of neuroengineering and rehabilitation</em>, 2017.
            </p>

            <p>
              Zhu, M., <strong className='strongtext'> Yu, B.</strong>, Yang, W., Jiang, Y., Lu, L., Huang, Z., ... & Li, G. 
              <LinkPublication href="https://link.springer.com/article/10.1186/s12938-017-0424-x"  target="_blank">  
                Evaluation of normal swallowing functions by using dynamic high-density surface electromyography maps. 
              </LinkPublication> 
              <em className='journalname'>Biomedical engineering online</em>, 2017.
            </p>
            <p>
              <strong className='strongtext'> Yu, B.</strong>, Hu, J., Funk, M., & Feijs, L. 
              <LinkPublication href="https://academic.oup.com/iwc/article-abstract/29/6/813/4084676"  target="_blank">  
               A model of nature soundscape for calm information display. 
              </LinkPublication> 
              <em className='journalname'>Interacting with Computers</em>, 2017.
            </p>
            </DetailsText>
             <br/>
            <SubsectionTitleText>
              - Conferences - 
            </SubsectionTitleText>
  
            <DetailsText>
            <p>
              Ma, Y., <strong className='strongtext'> Yu, B.</strong>, Bekker, T., Hu, J., & Vos, S.
              <LinkPublication href="https://dl.acm.org/doi/abs/10.1145/3419249.3421243?casa_token=Vovh39jvA9IAAAAA:69J3M-eF9NLSd77isGAKZT7vZvB_26l3uuP2M0ZhZQqmkGtZx6a362u4VV4I8jZBH-z05g-tQhwf"  target="_blank">  
              FitBirds: Designing Heart Rate Feedback for Playful and Social Physical Education. 
              </LinkPublication> 
              In Proceedings of the 11th Nordic Conference on Human-Computer Interaction <em className='journalname'>NordiCHI</em>, 2020.
            </p>
            <p>
              <strong className='strongtext'> Yu, B.</strong>, Zhang, B., An, P., Xu, L., Xue, M., & Hu, J.
              <LinkPublication href="https://ieeexplore.ieee.org/abstract/document/8856597?casa_token=Fx979QdbjFkAAAAA:2_pT6YS_AK-kJpWtJnL72TCedfMKIQkJzKz6lrD8VNNd3IWm6qiqdo02gTcIOC3q2LhX1kbF"  target="_blank">  
              An Unobtrusive Stress Recognition System for the Smart Office. 
              </LinkPublication> 
              In 2019 41st Annual International Conference of the IEEE Engineering in Medicine and Biology Society <em className='journalname'>EMBC</em>, 2019.
            </p>
            <p>
              <strong className='strongtext'> Yu, B.</strong>, Zhang, B., Xu, L., Fang, P., & Hu, J. 
              <LinkPublication href="https://ieeexplore.ieee.org/abstract/document/8857059?casa_token=AGO6OAVg9nwAAAAA:bEN3WmqF_p_CbBUJLllXOzkUCBBN5k36OfPQGdmY6BHl6JWAMO1-APINxZ2labEFJcrBu7mQ"  target="_blank">  
              Automatic Detection of Atrial Fibrillation from Ballistocardiogram (BCG) Using Wavelet Features and Machine Learning. 
              </LinkPublication> 
              In 2019 41st Annual International Conference of the IEEE Engineering in Medicine and Biology Society <em className='journalname'>EMBC</em>, 2019.
            </p>
            <p>
              Ren, X., <strong className='strongtext'> Yu, B.</strong>, Lu, Y., & Brombacher, A. 
              <LinkPublication href="https://dl.acm.org/doi/abs/10.1145/3274415?casa_token=B-S31s-JkUkAAAAA:cENOZIE_udN_BCMlXub0bs8XgzzCB6Jbc1qJbYTkzSvAgFGEAgqrd9Omj32hE6fqLlC0lGzAR1Kn"  target="_blank">  
              Exploring cooperative fitness tracking to encourage physical activity among office workers. 
              </LinkPublication> 
              In Proceedings of the ACM on <em className='journalname'> CSCW </em>, 2018.
            </p>
            <p>
              Liang, R. H., <strong className='strongtext'> Yu, B.</strong>, Xue, M., Hu, J., & Feijs, L. M. 
              <LinkPublication href="https://dl.acm.org/doi/abs/10.1145/3173574.3174187?casa_token=EynKYXkLavoAAAAA:4NovOO6bQBUHOc67-OLJAm3gjY9ea7NTbi7wTLNcJPY3frlhNkTphBbGal0mT6zozNT3P_9u2V84"  target="_blank">  
              BioFidget: Biofeedback for respiration training using an augmented fidget spinner. 
              </LinkPublication> 
              In Proceedings of the 2018 <em className='journalname'> CHI </em>, 2018.
            </p>
            <p>
              <strong className='strongtext'> Yu, B.</strong>, Funk, M., Hu, J., & Feijs, L. 
              <LinkPublication href="https://dl.acm.org/doi/abs/10.1145/3064663.3064729?casa_token=UseBHigsbjkAAAAA:wIoZynge6vqtbDA8JhxeIvDBnM52e9VOhGaF586hSyP_G27LdBBvFBkzfLBlV4IrNmlwG1eSb4vl"  target="_blank">  
              StressTree: a metaphorical visualization for biofeedback-assisted stress management. 
              </LinkPublication> 
              In Proceedings of the 2017<em className='journalname'> DIS </em>, 2017.
            </p>
            <p>
              <strong className='strongtext'> Yu, B.</strong>, Arents, R., Hu, J., Funk, M., & Feijs, L. 
              <LinkPublication href="https://dl.acm.org/doi/abs/10.1145/2839462.2856341?casa_token=8DWQwFS3Ii0AAAAA:GcIKJ7as3q9vj-oguXzboCMVh4bb7l3y5OeXIBDtZJ_2--ct4dm6SxZMjiXQUcH2L9U8Vv6TUBPt"  target="_blank">  
              Heart calligraphy: an abstract portrait inside the body. 
              </LinkPublication> 
              In Proceedings of the 2016 <em className='journalname'> TEI </em>, 2016.
            </p>
            <p>
              <strong className='strongtext'> Yu, B.</strong>, Bongers, N., Van Asseldonk, A., Hu, J., Funk, M., & Feijs, L.
              <LinkPublication href="https://dl.acm.org/doi/abs/10.1145/2839462.2839469?casa_token=2KTAKovcmnUAAAAA:6WsTY92ZEb17hxWNNSd5aKrjLMgQAExSR2t6UTI1LVu-umDhByJGpZZHbZLkSvg5kHDW_jHOvORJ"  target="_blank">  
              LivingSurface: biofeedback through shape-changing display. 
              </LinkPublication> 
              In Proceedings of the 2016 <em className='journalname'> TEI </em>, 2016.
            </p>
            <p>
              <strong className='strongtext'> Yu, B.</strong>, Arents, R., Funk, M., Hu, J., & Feijs, L. M.
              <LinkPublication href="https://dl.acm.org/doi/abs/10.1145/2851581.2892289?casa_token=xqe27USWys8AAAAA:vQGNTeSv3FNpsMAkv2QmFLnsXq9I4qNPVj_tT46GIAKEz-p39vbrMJshA0lUgmMOIQKANaKXtfso"  target="_blank">  
              HeartPlotter: Visualizing bio-data by drawing on paper. 
              </LinkPublication> 
              In Extended Abstracts of the 2016 <em className='journalname'> CHI </em>, 2016.
             </p>
             <p>
              <strong className='strongtext'> Yu, B.</strong>  
              <LinkPublication href="https://dl.acm.org/doi/abs/10.1145/2851581.2859027?casa_token=g0Yfo-4ItmMAAAAA:iRl-wCSG9jG0axBHFzalXIF6IQHlAvBMtFc2-X8byILfN8O83d8Tu4kpKuaWlLAUsDBQ1_EkAdHa"  target="_blank">  
              Adaptive biofeedback for mind-body practices. 
              </LinkPublication> 
              In Extended Abstracts of the 2016  <em className='journalname'> CHI </em>, 2016.
            </p>
            <p>
              <strong className='strongtext'> Yu, B.</strong>, Hu, J., Funk, M., & Feijs, L.
              <LinkPublication href="https://dl.acm.org/doi/abs/10.1145/2986416.2986418?casa_token=0dJt3u8OfNMAAAAA:tqHNvPaUR8XkwVDSn-CKapTMd8mHLJ3hHdLVLWSDquF1L4yQ-dyQcVl6t_K1LYvIOmv6plHQ_VsR"  target="_blank">  
              A study on user acceptance of different auditory content for relaxation. 
              </LinkPublication> 
              In Proceedings of the Audio Mostly, 2016
            </p>
            <p>
              Wang, C., Terken, J., <strong className='strongtext'> Yu, B.</strong>, & Hu, J.
              <LinkPublication href="https://dl.acm.org/doi/abs/10.1145/2809730.2809736?casa_token=FRto8OO2M7EAAAAA:tMJULMvrvXrYU1xqx_0P0sUS8IT8fp9S7mZtSq6WcDj21NyNjegD1gGhGPiN_K7s0wq-bgaqH-Wk"  target="_blank">  
              Reducing driving violations by receiving feedback from other drivers. 
              </LinkPublication> 
              In Adjunct Proceedings of the 7th International Conference on Automotive User Interfaces and Interactive Vehicular Applications, 2015.
            </p>
            <p>
              <strong className='strongtext'> Yu, B.</strong>, Feijs, L., Funk, M., & Hu, J. 
              <LinkPublication href="https://smartech.gatech.edu/handle/1853/54093"  target="_blank">  
              Designing auditory display of heart rate variability in biofeedback context. 
              </LinkPublication> 
              In Proceedings of of 21th International Conference on Auditory Displays <em className='journalname'>ICAD</em>, 2015.
            </p>
            <p>
              <strong className='strongtext'> Yu, B.</strong>, Song, Y., & Feijs, L. 
              <LinkPublication href="https://core.ac.uk/download/pdf/50712968.pdf#page=359"  target="_blank">  
              Light Bird: An Animated Biofeedback Interface for Coherent Breathing. 
              </LinkPublication> 
              In 9th International Conference on Design and Semantics of Form and Movement <em className='journalname'>DesForm</em>, 2015.
             </p>
             <p>
              <strong className='strongtext'> Yu, B.</strong>, Feijs, L., Funk, M., & Hu, J. 
              <LinkPublication href="https://link.springer.com/chapter/10.1007/978-3-319-22698-9_4" target="_blank">  
              Breathe with touch: a tactile interface for breathing assistance system. 
              </LinkPublication> 
              In IFIP Conference on Human-Computer Interaction <em className='journalname'>INTERACT</em>, 2015.
            </p>
            <p>
              Lin, X., Tao, L., <strong className='strongtext'> Yu, B.</strong>, Guo, Y., & Hu, J. 
              <LinkPublication href="https://link.springer.com/chapter/10.1007/978-3-319-20934-0_31"  target="_blank">  
              Interact Through Your Data: Collective Immersive Experience Design for Indoor Exercises.
              </LinkPublication> 
              In International Conference on Cross-Cultural Design, 2015.
             </p>
            <p>
              <strong className='strongtext'> Yu, B.</strong>, Hu, J., & Feijs, L. 
              <LinkPublication href="https://link.springer.com/chapter/10.1007/978-3-319-13102-3_17"  target="_blank">  
              Design and evaluation of an ambient lighting interface of HRV biofeedback system in home setting.
              </LinkPublication>  
              In International Conference on Ubiquitous Computing and Ambient Intelligence, 2014.
            </p>
             <p>
              <strong className='strongtext'> Yu, B.</strong>, Zhu, M., Xu, L., & Li, G. 
              <LinkPublication href="https://ieeexplore.ieee.org/abstract/document/6611077?casa_token=oSIhz_RnNMQAAAAA:b_x5C4qrU9oT-k6tzbDbR-eLCRWbTEQeDeb3XtkjVUxgHixwmvHWhagK9Qq8SIeWtb5lYE8M"  target="_blank">  
              A pilot study of high-density electromyographic maps of muscle activity in normal deglutition. 
              </LinkPublication> 
              In 2013 35th Annual International Conference of the IEEE Engineering in Medicine and Biology Society <em className='journalname'>EMBC</em>, 2013.
            </p>
            <p>
              <strong className='strongtext'> Yu, B.</strong>, Xu, L., & Li, Y.
              <LinkPublication href="https://ieeexplore.ieee.org/abstract/document/6246921?casa_token=rnFv7ZAvQ3sAAAAA:nzfp363sBPwvpSUwCuU5yGS9KuJjp5xqf63jgRic1zFDgGiV8nzgwpm4wOhZrRtwuyb-GVun"  target="_blank">  
              Bluetooth Low Energy (BLE) based mobile electrocardiogram monitoring system. 
              </LinkPublication> 
              In 2012 IEEE International Conference on Information and Automation, 2012.
            </p>
            </DetailsText>
          </Grid>
          <Grid item xs={3}></Grid>

          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
           <SectionTitleText>
             Patents
           </SectionTitleText>
            <DetailsText>
              基于呼吸及心率变异性和微动敏感坐垫的智能灯光色彩控制方法, 201811071681.5 <br/>
              基于微动敏感坐垫和心率变异性的智能灯光色彩控制方法,  201811071138.5 <br/>
              基于微动敏感坐垫和敲击信号的智能灯光色彩控制方法, 201811071137.0 <br/>
              基于微动敏感坐垫和闭气的智能灯光色彩控制方法,  2018110800.5 <br/>
              一种吞咽肌障碍的检测装置及设备, 201310316387.7 <br/>
              一种反馈治疗吞咽障碍的装置及设备, 201310317860.3  <br/>
            </DetailsText>
          </Grid>
          <Grid item xs={3}></Grid>
         
          </Grid>

         </motion.div>

    </Mainpage>
    )
 }







