import React  from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid'

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

          <Grid container spacing={0}>

            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <div ref={target} style={{
                paddingLeft: Math.round(size?.width)>425? Math.round(size?.width)/10+'px': '10px',
                paddingRight: Math.round(size?.width)>425? Math.round(size?.width)/10+'px': '10px'
                }}
                >
                <AnimatedLogo logoSize={{width: Math.round(size?.width), height: Math.round(size?.height)}}/>     
              </div>
            
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <TextBox>
                  <HomeText className="one-second-fadein">Hi, there ! My name is Bin Yu.</HomeText>
                    <HomeText className="three-second-fadein">I was born in China, and moved to Eindhoven in 2013.</HomeText>
                    <HomeText className="three-second-fadein">I finished Ph.D on HCI <LinkText href="https://www.researchgate.net/profile/Bin_Yu38"  target="_blank"> Design Research </LinkText> for Biofeedback.</HomeText> 
                    <HomeText className="five-second-fadein">I am now a Data Designer in
                        <LinkText href="https://www.philips.com/a-w/about/philips-design.html"  target="_blank"> Philips Design </LinkText>.</HomeText> 
                    <HomeText className="five-second-fadein">I focus on
                      <Link to="/projects"> data-driven design projects</Link>. 
                    </HomeText> 
                    <HomeText className="seven-second-fadein"> I write 
                        <LinkText href="https://codepen.io/yubin8090/"  target="_blank"> code </LinkText> and
                        <LinkText href="https://medium.com/@binyu_71944" target="_blank"> articles</LinkText>.
                    </HomeText>
                    <HomeText className="seven-second-fadein"> I use photos to record every facet of 
                        <LinkText href="https://www.instagram.com/binyu8090/" target="_blank"> life</LinkText>.
                    </HomeText>
                    <HomeText className="nine-second-fadein">I have a more detailed 
                        <LinkText href="https://www.linkedin.com/in/bin-yu-85935450/" target="_blank"> résumé</LinkText>.
                    </HomeText>   
                </TextBox> 
            </Grid>


  </Grid>

        </Mainpage>
      );
}



export default Home;


const Mainpage = styled.div`
  background-color: #282947;
  min-height: 100vh;
`;


const TextBox=styled.div`
  padding-top:100px;
  padding-left:35px;
  background-color:'red';
  @media screen and (max-width: 1024px) {
  padding-top:0px;
  padding-left:0px;
  background-color:'red';
  }

`;

const HomeText = styled.p`
  font-size: 1.2em;
  color: #C6E1EA;
  font-family: 'Nutito-Regular';
  @media screen and (max-width: 1024px) {
    font-size: 2em;
    text-align:center;
  }
`;

const LinkText = styled.a`
  color: #68CAFA
  &:hover {
    color: #FAE058;
  }
`;


{/*   
<Container>
                <Box ref={target} bgColor={"#282947"}>  
                  <AnimatedLogo logoSize={{width: Math.round(size?.width), height: Math.round(size?.height)}}/>     
                </Box>

                <Box bgColor={"#282947"}>
                <br/>
                <br/>
                <br/>
                <br/>
                    <HomeText className="one-second-fadein">Hi, there ! My name is Bin Yu.</HomeText>
                    <HomeText className="three-second-fadein">I was born in China, and moved to Eindhoven in 2013.</HomeText>
                    <HomeText className="three-second-fadein">I finished Ph.D on HCI <LinkText href="https://www.researchgate.net/profile/Bin_Yu38"  target="_blank"> Design Research </LinkText> for Biofeedback.</HomeText> 
                    <HomeText className="five-second-fadein">I am now a Data Designer in
                        <LinkText href="https://www.philips.com/a-w/about/philips-design.html"  target="_blank"> Philips Design </LinkText>.</HomeText> 
                    <HomeText className="five-second-fadein">I focus on
                      <Link to="/projects"> data-driven design projects</Link>. 
                    </HomeText> 
                    <HomeText className="seven-second-fadein"> I write 
                        <LinkText href="https://codepen.io/yubin8090/"  target="_blank"> code </LinkText> and
                        <LinkText href="https://medium.com/@binyu_71944" target="_blank"> articles</LinkText>.
                    </HomeText>
                    <HomeText className="seven-second-fadein"> I use photos to record every facet of 
                        <LinkText href="https://www.instagram.com/binyu8090/" target="_blank"> life</LinkText>.
                    </HomeText>
                    <HomeText className="nine-second-fadein">I have a more detailed 
                        <LinkText href="https://www.linkedin.com/in/bin-yu-85935450/" target="_blank"> résumé</LinkText>.
                    </HomeText>    
                </Box>
            </Container> */}
                                                       