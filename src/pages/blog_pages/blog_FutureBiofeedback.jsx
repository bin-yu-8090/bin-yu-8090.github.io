import React from 'react'
import Grid from '@material-ui/core/Grid'
import NavigationBar from '../../components/navigationBar'


import {Mainpage, PostTitle,PostAbstractText, PostSubTitle, PostMainText,PostSupportText,LinkText} from './blogPageComponents'
import futureBiofeedback_img_2 from '../../images/futureBiofeedback/futureBiofeedback_img_2.png'; // Tell Webpack this JS file uses this image
import futureBiofeedback_img_3 from '../../images/futureBiofeedback/futureBiofeedback_img_3.png'; // Tell Webpack this JS file uses this image


export const  FutureBiofeedbackBlogPage= ()=> { 
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
              How I envision Biofeebdack after 6 years research
              <br/>
              </PostTitle>
            </Grid>
            <Grid item xs={12}>
            <PostSubTitle> Background</PostSubTitle>

            <PostMainText>
              Seven years ago, I started my Ph.D. research with a question: how to bring biofeedback closer to our everyday life so that we can use it intuitively with comfort. 
              Since then, I have tried to find my answers in the field of Human-Computer Interaction (HCI) and have done a lot of design explorations on biofeedback sensing, display, and user interactions. 
              Although I got some promising findings and design implications, my Ph.D. work might still be a probe into the potential of biofeedback in everyday use. 
              And I see more future explorations are needed from the field of HCI. 
              In this article, I will share my thoughts about future research on Biofeedback.
              </PostMainText>

             <PostMainText>
             Biofeedback is a closed-loop system that measures and translates a user’s physiological signals into external audio-visual signals that are presented back to the user in real-time. 
             Therefore, with this feedback information, people can become more aware of their physiological statuses, such as breathing patterns and stress. 
             Biofeedback has been well proven as an effective tool to help people improve self-awareness and self-regulation for mitigating stress. 
             However, it has been long confined to clinical settings due to the intrusive sensors to be worn by users, complex user-system interactions, and the feedback displays that are difficult to understand for everyday users.
              </PostMainText>
 
             <PostMainText>
             We can simplify the biofeedback system into three main components: the input, output, and the transformation from input to output. 
             The input refers to the bio-sensing technologies which measure user's physiological signals like heart rate, breathing, and skin conductance et, al. 
             The output refers to the information display which may take different modalities like audio, visual, tactile, or the combination of those. The output modality will then decide the interaction mediums, 
             like screen, projector, speaker, light, or shape-changing objects. The transformation from input to output can include two main steps: 
             1. processing the raw bio-signals into the biofeedback data; 2. mapping the feedback data to the parameters of the presentation.
            </PostMainText>

             <PostMainText>
             In my previous research, regarding the input, I have explored new bio-sensing approaches that are unobtrusive and comfortable for everyday context. 
             For instance, we integrated an electromechanical film sensor into a chair seat to unobtrusively measure the user's breathing and heart rate activities. 
             Regarding the output, I have also done extensive exploration of the modality of biofeedback display to achieve an aesthetically pleasing user experience. 
             For instance, I have explored sonification, a soundscape-based musical interface, ambient lighting display, shape-changing display, tactile feedback, tangible interface, and multi-modal display. 
             Regarding the input to output transformation, I explored applying the concept of Natural Coupling into the presentation mapping. 
             Specifically, biofeedback data are mapped to the ‘expressive parameters’ of the interfaces, in which way the interface expressions can be inherently linked to or naturally associated with physiological processes (e.g., heartbeat, breathing), 
             states (e.g., high arousal, stress level) or meanings (e.g., healthy or unhealthy). 
             For instance, I used a visual metaphor of a tree to represent unhealthy stress in visualization. 
             I used a tangible interface’s inflation-deflation actions or the fluctuation of wind sound to represent breathing movement to facilitate an intuitive interpretation of the display.
            </PostMainText>

             <PostMainText>
             Although some promising findings and design implications found in my PhD research, 
             I think my research might still be a probe into the potential of biofeedback in everyday use. 
             More future explorations are needed from the HCI. Here I indicate three directions for future research.
              </PostMainText>

            </Grid>

            <Grid item xs={12}>
            <PostSubTitle> Intimate Biofeedback</PostSubTitle>
             <PostMainText>
             A typical biofeedback system senses, amplifies and presents the subtle or even invisible physiological changes via an audio-visual display so that the user can perceive easily. 
             My previous research mainly focused on how to augment biofeedback information by leveraging advanced HCI technologies. 
             As mentioned above, the goal of biofeedback is to increase self-awareness and facilitate self-regulation. 
             The augmented biofeedback can inform the users about their physiological status, but looking at it from another perspective, these external displays can also easily take much attention from the users, 
             make it even harder for the users to notice and experience their bodily changes. 
              </PostMainText>

              <PostMainText>
              For instance, if we intently focus on our breathing, we can feel it because our bodily sensations already give us feedback. 
              According to Shusterman (1997), this inherent bodily feedback is referred to as somatic sensation. 
              Höök et al. (2016) proposed a strong concept named ‘Somaesthetic Appreciation Design’ which suggests the biofeedback interaction can subtly support users’ attention inwards, towards their own body. 
              </PostMainText>

              <div style={{textAlign:'center'}}>
              <br/>
              <img src={futureBiofeedback_img_2} width='100%'/>
              
             </div>

             <br/>
             <PostMainText>
              These works inspire me to question whether the biofeedback can be designed as inherent feedback, 
              not to drown out somatic sensations with fancy external displays, but to enhance our sensitivity to our somatics. 
              I envision the ‘Inherent Biofeedback’ becoming a tangible artifact that can be worn or attached to the body or placed very close to the body, like an extension of the body. 
              It senses our internal states and delivers the biofeedback through somatic sensations (e.g., touch sense). 
              As such, the biofeedback can be perceived inherently through the sensory experience of the contact with the interface on or close to the body.
              </PostMainText>
            </Grid>


            <Grid item xs={12}>
            <PostSubTitle> Ambient & Peripheral Biofeedback</PostSubTitle>

             <PostMainText>
             In my Ph.D. research, I have already explored the ambient biofeedback display by utilizing nature sounds and ambient lights. 
             The initial intention was simple: we hope to put the biofeedback system into an ‘invisible background’, where the users can perceive their internal physiological states from the everyday environment without computer screens. 
             Based on more non-contact long-range biosensing techniques and IoT environment, I envision that an increasing number of everyday objects can act as interactive media supporting ambient and peripheral biofeedback interactions in everyday life.
              </PostMainText>

              <div style={{textAlign:'center'}}>
              <br/>
              <img src={futureBiofeedback_img_3} width='100%'/>
             </div>
             <br/>

             <PostMainText>
             In an everyday environment, ambient biofeedback allows the user to use it in a more natural, comfortable, and relaxing condition, such as sitting on a yoga mat, leaning back on the chair, or walking around the room. 
             I suggest an ambient biofeedback display should be aesthetically pleasing, decorative, and unobtrusive to everyday settings. For instance, nature sounds are often used as a natural augmentation to the indoor acoustic environment
              for their wholesome effects on relaxation. More importantly, nature sounds are among ‘everyday sounds’ around us, which makes them well suited for ambient display for their naturalness, intuitiveness, and subtleness. 
              For the visual modality, I have used ambient lights because it is an integral part of everyday settings. Similar to the nature sounds, the colored lights (cool-tone) also have mood-enhancing and relaxation effects. 
              In addition to lights and nature sounds, plenty of everyday objects in the physical environment can be used or redesigned for ambient display through their subtle changes in form, movement, sound, color, smell, temperature, and light.
              </PostMainText>

              <PostMainText>
              In everyday work, people’s attention is almost fully occupied with work tasks. We do not want biofeedback displays to become too ‘loud’, occupying the center of attention and causing a sense of burden or pressure. 
              Therefore, we propose a future direction of ‘Ambient & Peripheral Biofeedback’. In line with the vision of Calm Technology (Mark Weiser & John Seely Brown 1997), we believe that leveraging human attention abilities in peripheral interactions 
              (Bakker et al. 2015) will support biofeedback-assisted self-reflection to better work for stress management in today’s busy lifestyle. 
              For instance, in my exploration, I used a natural soundscape that mixes, tunes, modifies various nature sounds in such a way that the resulting auditory biofeedback display can be experienced as a harmonious sonic environment. 
              It enables the listeners to perceive the information by holistically listening to the nature soundscape without giving attention to the details of sound.
              </PostMainText>


            </Grid>



            <Grid item xs={12}>
            <PostSubTitle> Adaptive Biofeedback</PostSubTitle>

             <PostMainText>
             The acquisition of self-regulation skills by using Biofeedback takes time and requires practice. Based on different physical qualities and physiological conditions, different users may show a unique learning curve with biofeedback. 
             For some users, it may require a longer time to familiarize themselves with the biofeedback representations. For others, it may take more practice to internalize self-regulation skills. 
             Here, I asked myself: how a biofeedback system could adapt itself to optimize the biofeedback learning curve for each user. 
             This might be the first motive for ‘Adaptive Biofeedback’. According to Schneider-Hufschmidt et al. (1993), Adaptive User Interfaces (AUIs) are interfaces that can adapt to a specific user, 
             provide feedback about the user’s knowledge and predict the user’s future behavior, such as goals, preferences, and actions. 
             For a self-training/learning system, Wulf (2007) found that adaptive feedback shows advantages in the adaptation to the learner’s needs, in the promotion of deeper information processing, and in the involvement of the learner in the learning process, resulting in increased motivation and learning effect. 
             To date, the research on the AUIs for biofeedback systems is limited.
            </PostMainText>

             <PostMainText>

             For future research, I propose a concept of ‘Adaptive Biofeedback’ with three adaption abilities (Yu 2016). Firstly, an adaptive biofeedback interface should support information display with multiple sensory modalities. The sensory modality of feedback can be personalized and adapted to the context of use. 
             For instance, the biofeedback can be presented in the tactile modality for privacy in a public office and switched to a multimodal display with sound and lights for immersion in a home environment. Secondly, the biofeedback information source and dense should adapt to the user performance and the results of the biofeedback training. 
             At the beginning of training, instead of the user’s bio-signals, the system can display a pre-set bio-feedforward guidance signal (e.g., 0.1Hz breathing guidance) to guide the user to get familiar with the system and get the bio-signals ready for feedback.
              When the user’s bio-signals become clear and stable, the guidance signal can be reduced, and meanwhile, the bio-signals can be enhanced and presented as biofeedback. 
              When the user achieves the goal in the current training, the biofeedback signal can be gradually weakened, and the accompaniment relaxation-induced signal (e.g., a piece of relaxing background music) can be increased. 
              Thirdly, to further motivate and engage the user in the training, the system could also allow the users to self-control the training ‘flow’. 
              After achieving the goal, the user can choose to relive the current training task or upgrade to the next task with increased difficulty.
            </PostMainText>

            </Grid>

        
            </Grid>

          </Grid>
          <Grid item xs={1} sm={2} md={3} lg={3} xl={3}></Grid>
         
          </Grid>

    </Mainpage>
    )
 }






