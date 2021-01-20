import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const TopNavBar = styled.div`
  background-color: none;
  padding-top: 20px;
  padding-bottom: 10px;
  padding-right:3%;
  font-size: 1em;
  font-family: 'Nutito-Bold';
  color: #C6E1EA;
  text-align:right;
`;


export default function NavigationBar(props) {
  return (
    props.theme === 'dark' ?
      <TopNavBar>
        <Link className='navigationBarLink' to="/"> Home</Link> 
        <Link className='navigationBarLink' to="/projects">Projects</Link>    
        <Link className='navigationBarLink' to="/blogs"> Blogs</Link>   
        <Link className='navigationBarLink' to="/photography"> Photography</Link>   
        <Link className='navigationBarLink' to="/about"> CV</Link>     
      </TopNavBar>
      :
      <TopNavBar>
      <Link className='navigationBarLink_Light' to="/"> Home</Link> 
      <Link className='navigationBarLink_Light' to="/projects">Projects</Link>    
      <Link className='navigationBarLink_Light' to="/blogs"> Blogs</Link>   
      <Link className='navigationBarLink_Light' to="/photography"> Photography</Link>   
      <Link className='navigationBarLink_Light' to="/about"> CV</Link>     
    </TopNavBar>
    
  );
}
