import React, { Component } from 'react'
import styled from "styled-components";
import px2vw from "../utils/px2vw";
import { Link } from 'react-router-dom';

import NavigationBar from '../components/navigationBar'
import AnimatedLogo from '../components/animatedLogo'
import useResizeObserver from "@react-hook/resize-observer";


const useSize = (target) => {
  const [size, setSize] = React.useState();

  React.useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect());
  }, [target]);

  // Where the magic happens
  useResizeObserver(target, (entry) => setSize(entry.contentRect));
  return size;
};



 const Home = () => {

  const target = React.useRef(null);
  const size = useSize(target);

      return ( 
        <Mainpage>
          <NavigationBar theme={'dark'}/>
            <Container>
                <Box ref={target} bgColor={"#282947"}>  
                  <AnimatedLogo logoSize={{width: Math.round(size?.width), height: Math.round(size?.height)}}/>     
                </Box>

                <Box bgColor={"#282947"}>
                <br/>
                <br/>
                <br/>
                <br/>
                    <BoxText className="one-second-fadein">Hi, there ! My name is Bin Yu.</BoxText>
                    <BoxText className="three-second-fadein">I was born in China, and moved to Eindhoven in 2013.</BoxText>
                    <BoxText className="three-second-fadein">I finished Ph.D on HCI <LinkText href="https://www.researchgate.net/profile/Bin_Yu38"  target="_blank"> Design Research </LinkText> for Biofeedback.</BoxText> 
                    <BoxText className="five-second-fadein">I am now a Data Designer in
                        <LinkText href="https://www.philips.com/a-w/about/philips-design.html"  target="_blank"> Philips Design </LinkText>.</BoxText> 
                    <BoxText className="five-second-fadein">I focus on
                      <Link to="/projects"> data-driven design projects</Link>. 
                    </BoxText> 
                    <BoxText className="seven-second-fadein"> I write 
                        <LinkText href="https://codepen.io/yubin8090/"  target="_blank"> code </LinkText> and
                        <LinkText href="https://medium.com/@binyu_71944" target="_blank"> articles</LinkText>.
                    </BoxText>
                    <BoxText className="seven-second-fadein"> I use photos to record every facet of 
                        <LinkText href="https://www.instagram.com/binyu8090/" target="_blank"> life</LinkText>.
                    </BoxText>
                    <BoxText className="nine-second-fadein">I have a more detailed 
                        <LinkText href="https://www.linkedin.com/in/bin-yu-85935450/" target="_blank"> résumé</LinkText>.
                    </BoxText>    
                </Box>
            </Container>
        </Mainpage>
      );
}




export default Home;


const Mainpage = styled.div`
  background-color: #282947;
  min-height: 100vh;
`;


const Container = styled.div`
  background-color: #282947;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

const Box = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  background-color: ${props => props.bgColor};
  height: 100%;

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(500)};
    height: 100%;
  }
`;

const BoxText = styled.p`
  font-size: 1.5rem;
  color: #C6E1EA;
  font-family: 'Nutito-Regular';

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;
//  margin-top: ${px2vw(20)};


const LinkText = styled.a`
  color: #68CAFA
  &:hover {
    color: #FAE058;
  }
`;
