import React, { useContext, useState, useEffect }from 'react'
import Grid from '@material-ui/core/Grid'
// import * as d3 from "d3";

import{Mainpage, ProjectTitle, ProjectSubTitle, ProjectIntroText, LinkText, ProjectDiscriptionText, ProjectEndingText} from './styledComponents'


export const  HRVVisualizationPage= ()=> { 


  // useEffect(() => {
  //   fetch("../../../public/data/hrv_data_1.json").then((resp) => {
  //     console.log('response',resp)
  //     if (resp.status === 200) {
  //       resp.json().then((hrvData) => {res.text(})
  //       .then(text => console.log(text))  // then log it out
  //     }
  //   })
  // })

  // }, [participantID])

   return (     
      <Mainpage>
        <p> HRV vsiualization Page</p>
       </Mainpage>
    )
 }






