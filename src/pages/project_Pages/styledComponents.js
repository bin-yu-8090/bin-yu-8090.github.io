
import styled from 'styled-components'

// add the styledComponent here

export const Mainpage = styled.div`
  background-color: #F2F2F2;
  min-height: 100vh;
`;

export  const ProjectTitle = styled.h1`
  font-size: 4em;
  color: #262626;
  padding-top:1em;
  text-align: center;
  font-family: 'Nutito-Regular';
`;

export  const ProjectTitleAPP = styled.h1`
  font-size: 2em;
  color: #262626;
  padding-top:1em;
  text-align: center;
  font-family: 'Nutito-Regular';
  @media screen and (max-width:768px) {
    font-size: 2em;
  }
`;

export  const ProjectSubTitle = styled.h2`
  font-size: 1.2em;
  color: #7F7F7F;
  text-align: center;
  font-family: 'Nutito-Regular';
  @media screen and (max-width:768px) {
    font-size: 2em;
  }
`;

export  const ProjectIntroText= styled.p`
  font-size: 1em;
  text-align: center;
  color: #807F7F;
  font-family: 'Nutito-Regular';
  @media screen and (max-width:768px) {
    font-size: 1.5em;
  }
`;

export const ProjectDiscriptionText= styled.p`
  font-size: 0.9em;
  padding-top:5px;
  padding-bottom:0px;
  text-align: center;
  color: #7F7F7F;
  font-family: 'Nutito-Regular';
  @media screen and (max-width:768px) {
    font-size: 1.2em;
    padding-left:1em;
    padding-right:1em;
  }
`;

export  const ProjectEndingText= styled.p`
  font-size: 0.8em;
  padding-left:2em;
  padding-right:2em;
  text-align: left;
  color: #807F7F;
  font-family: 'Nutito-Light';
  @media screen and (max-width:768px) {
    font-size: 1.2em;
  }
`;

export  const FigureText= styled.p`
  font-size: 0.8em;
  padding-top:5px;
  padding-bottom:0px;
  text-align: center;
  color: #7F7F7F;
  font-family: 'Nutito-Regular';
  @media screen and (max-width:768px) {
    font-size: 1.2em;
  }
`;

export  const LinkText = styled.a`
  font-size: 1em;
  padding-left:0.5em;
  padding-right:0.5em;
  color: #4C8AC6;
  font-family: 'Nutito-Light';
  &:hover {
    color:#0063b2;
    font-family: 'Nutito-Regular';
  }
`;

export const ProjectSectionTitle = styled.h3`
  font-size: 1.2em;
  color:#000000;
  padding-bottom: 1em;
  text-align: center;
  font-family: 'Nutito-Regular';
  @media screen and (max-width:768px) {
    font-size: 2em;
  }
`;


export const JumpLink = styled.a`
  color: #964F4C;
  font-family: 'Nutito-Regular';
  &:hover {
    color:#567572;
  }
`;


export const MultipleImgsFrame= styled.div`
  padding-left:1em;
  padding-right:1em;
  @media screen and (max-width:768px) {
    padding-left:0.5em;
    padding-right:0.5em;
  }
`;
