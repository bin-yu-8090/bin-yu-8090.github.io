import React, { useState, useCallback } from 'react';
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import NavigationBar from '../components/navigationBar'
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import {PHOTOES} from '../images/photoLinks';
import { motion } from "framer-motion"


const Mainpage = styled.div`
  background-color: #282947;
  min-height: 100vh;
`;

export function PhotographyPage (props){

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

   return (  

      <Mainpage>
        <NavigationBar theme={'dark'}/>

        <motion.div  
         initial={{ opacity: 0,}}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}>  

        <Grid container spacing={2}>
        <Grid item xs={12}>
          <br/>
          <br/>
        </Grid>
        <Grid item xs={1} sm={2} md={3} lg={3} xl={3}></Grid>
          <Grid item xs={10} sm={8} md={6} lg={6} xl={6}>
              <div>
                <Gallery photos={PHOTOES} onClick={openLightbox} />
                <ModalGateway>
                  {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                      <Carousel
                        currentIndex={currentImage}
                        views={PHOTOES.map(x => ({
                          ...x,
                          srcset: x.srcSet,
                          caption: x.title
                        }))}
                      />
                    </Modal>
                  ) : null}
                </ModalGateway>
              </div>
            </Grid>
            <Grid item xs={1} sm={2} md={3} lg={3} xl={3}></Grid>
         </Grid>
      </motion.div> 
    </Mainpage>
    )
 }







