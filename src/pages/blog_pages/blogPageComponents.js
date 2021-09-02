

import styled from 'styled-components'

export const Mainpage = styled.div`
background-color: #F2F2F2;
min-height: 100vh;
`;


export const PostTitle = styled.h1`
  font-size: 2em;
  color: #262626;
  padding-top:1em;
  text-align: center;
  font-family: 'Nutito-Regular';
  @media screen and (max-width: 768px) {
    font-size: 3em;
  }
`;

export const PostSubTitle = styled.h2`
  font-size: 1em;
  color: #262626;
  padding-top:1em;
  text-align: left;
  font-family: 'Nutito-Bold';
  @media screen and (max-width: 768px) {
    font-size: 3em;
  }
`;



export const PostAbstractText= styled.p`
  font-size: 1em;
  text-align: left;
  color: #807F7F;
  font-family: 'Nutito-Light';
  @media screen and (max-width: 768px) {
    font-size: 1.5em;
  }
`;

export const PostMainText= styled.p`
  font-size: 0.9em;
  text-align: left;
  color: #807F7F;
  font-family: 'Nutito-Light';
  @media screen and (max-width: 768px) {
    font-size: 1.2em;
  }
`;

export const PostSupportText= styled.p`
  font-size: 0.8em;
  text-align: left;
  color: #807F7F;
  font-family: 'Nutito-Light';
  @media screen and (max-width: 768px) {
    font-size: 1.2em;
  }
`;

export const LinkText = styled.a`
  font-size: 1em;
  padding-left:0.5em;
  padding-right:0.5em;
  color: #C19936;
  font-family: 'Nutito-Light';
  &:hover {
    color:  #7F7F7F;
  }
`;
