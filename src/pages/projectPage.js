import React from "react";
import styled from "styled-components";
import px2vw from "../utils/px2vw";
import useResizeObserver from "@react-hook/resize-observer";


import ProjectCard from '../components/projectCard'
import NavigationBar from '../components/navigationBar'

import BioMirror_IMAGE from '../images/projectCards/BioMirror_profile.jpg';
import HeartCalligraphy_IMAGE from '../images/projectCards/Heart-Calligraphy_profile.png';
import LightSit_IMAGE from '../images/projectCards/lightSit_profile.JPG'
import Resonance_IMAGE from '../images/projectCards/resonance_profile.JPG'
import HeartBloom_IMAGE from '../images/projectCards/heartbloom_profile.png'
import Placeholder_IMAGE from '../images/projectCards/placeholder.png'


const PorjectData = [
    {
      name:"BioMirror",
      image:BioMirror_IMAGE,
      description:"In this work, we investigated the interaction between ourselves and the spaces we inhabit, translating internal bodily processes to tactile surfaces.",
      linkto:"/BioMirror",
      keypwords:['Tangible Interface', 'Shape-changing Interface','HCI','Biofeedback']
    },
    {
        name:"Heart Calligraphy",
        image:HeartCalligraphy_IMAGE,
        description:"In this work, we explored the role of the body as a channel through which physiology manifests itself as a form of beauty.",
        linkto:"/HeartCalligraphy",
        keypwords:['Artistic Visualization', 'Live-art Installation','Biofeedback']
    },
    {
        name:"Heart Bloom",
        image:HeartBloom_IMAGE,
        description:"In this work, we explored the role of the body as a channel through which physiology manifests itself as a form of beauty.",
        linkto:"/HeartBloom",
        keypwords:['Metaphorical Visualization','Live-art Installation','Biofeedback','Charity design']
    },
    {
        name:"RESonance",
        image:Resonance_IMAGE,
        description:"In this work, we investigate a biofeedback environment that enhances the self-awareness and self-regulation of its inhabitant for better health.",
        linkto:"/Resonance",
        keypwords:['Ambient Interface','Immersive Experience','Biofeedback']
    },
    {
        name:"LightSit",
        image:LightSit_IMAGE,
        description:"In this work, we designed a health-promoting system that can easily embed into a workplace to support fitness and relaxation breaks.",
        linkto:"/LightSit",
        keypwords:['Unobtrusive Sensing','Ambient Light','Workplace heath']
    },
    {
        name:"",
        image:Placeholder_IMAGE,
        description:"Coming soon...",
        linkto:"/",
        keypwords:['Data Visualization']
    }
  ];

  const useSize = (target) => {
    const [size, setSize] = React.useState();
  
    React.useLayoutEffect(() => {
      setSize(target.current.getBoundingClientRect());
    }, [target]);
  
    // Where the magic happens
    useResizeObserver(target, (entry) => setSize(entry.contentRect));
    return size;
  };
  
  


export default function ProjectPage() {

    const target = React.useRef(null);
    const size = useSize(target);

  return (
      <Mainpage>
        <NavigationBar theme={'dark'}/>
        <br/>
            <Container>
                {PorjectData.map(project => (
                    <Box ref={target}>
                    <ProjectCard
                        style={{width: Math.round(size?.width) ,height: Math.round(size?.height) }}
                        width={Math.round(size?.width)}
                        image={project.image}
                        name={project.name}
                        description={project.description}
                        linkto={project.linkto}
                        keypwords={project.keypwords}
                        /> 
                    </Box>
                ))}
            </Container>
    </Mainpage>
  );
}


const Mainpage = styled.div`
  background-color: #282947;
  min-height: 100vh;
`;


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;
`;

const Box = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(480, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  height: 100%;

/* On screens that are larger than 768px set the background color to blue */
@media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(480, 768)};
    height: 100%;
  }

/* On screens that are larger than 1024pxset the background color to blue */
@media (min-width: 1024px) {
    width: ${px2vw(320, 1024)};
    min-height: ${px2vw(480, 1024)};
    height: 100%;
  }

  /* On screens that are larger than 1024pxset the background color to blue */
@media (min-width: 1440px) {
    width: ${px2vw(320, 1440)};
    min-height: ${px2vw(480, 1440)};
    height: 100%;
  }
`;

/* 
<ProjectCard
                mode={'horizontal'}
                image={project.image}
                name={project.name}
                description={project.description}
                linkto={project.linkto}
                keypwords={project.keypwords}
                />  */