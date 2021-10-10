import styled from 'styled-components';


export const Nav = styled.div`

padding: 1.25rem 2rem;
background-color: #edccc4;
color:#663e2c;
height: 6rem;
display: flex;
flex-direction: column; //this will allow flex-end to move item to the right            
align-items: center;

h3{
   cursor: pointer;
  font-weight: 700;
  font-size: 2.25rem;


}

.img{
  align-self: flex-end;
  position: relative;

}
img{
  width:15rem;
  height: 12rem;
  margin-top:-5rem;
}
.navButton{
  position: absolute;
  margin-top:-7.5rem;
  margin-left: 4rem;
  font-size: 1.25rem;
  cursor: pointer;
}

`