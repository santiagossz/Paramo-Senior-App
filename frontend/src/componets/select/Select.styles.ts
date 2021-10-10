import styled from "styled-components";

export const CentralBox=styled.div `
    margin-top: 1rem;
    padding: 4rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -45%);
    width: 45%;
    height: 50%;
    display: flex;
    flex-direction:column;
    align-items: center;

    h3{
        color:#575757;
        font-size: 1.5rem;
        margin-bottom: 3rem;
    }
    #file{
        display: none;
    }

    label{
        margin-top: 2rem;
        color:#663e2c;
        font-weight:500;
        cursor: pointer;
        font-size: 1.5rem;
        background-color: #ccff90;
        padding: 1rem 3rem;

    }

   

`