import styled,{createGlobalStyle} from "styled-components";
import background from './assets/imgs/background.svg'

import { library } from '@fortawesome/fontawesome-svg-core'
import {faArrowRight,faFingerprint,faHandPointUp,faGraduationCap, faHandsHelping,faUser} from '@fortawesome/free-solid-svg-icons'
  library.add(faArrowRight,faFingerprint,faHandPointUp,faGraduationCap,faHandsHelping,faUser)
  



export const GlobalStyle = createGlobalStyle`


*{
    box-sizing: border-box;
    margin: 0;
    font-family: 'Poppins';
}

`

export const Container = styled.div`
background-image:url(${background}) ;
background-size: cover;
min-height: 100vh;
`