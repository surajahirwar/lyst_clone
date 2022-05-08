import React from "react";
import {
  BrowserRouter as Router,
 Routes,
  Route,
  Link
} from "react-router-dom";
import styledComponents from "styled-components";
import { Women } from "./components/women";


const Container=styledComponents.div`
  width:100%;
  height:fit-content;
`;


export default function ProductPage(){
//   <Router>
//   <Container>
     
//   <Routes>
//      <Route  path='/women' exact element={<Women/>}></Route>
//      <Route  path='/men' exact element={<Mens/>}></Route>

//    </Routes>
//      </Container>
//  </Router> 
 <Container>
   <Women/>
 </Container>
  }
