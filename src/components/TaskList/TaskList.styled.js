import styled from "styled-components"
 

export const Containerr = styled.ul`
width: auto;
height: auto;
background-color: aquamarine;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 50px;
list-style: none;
`

export const Card = styled.li`
width: 300px;
height: 150px;
background-color: lightgreen;
color: black;
border: 2px solid black;
border-radius: 25px;
`

export const Deleting = styled.button`
padding: 10px 20px;
font-weight: 700;
background-color: red;
color: white;
border-radius: 20px;
border: 2px solid darkred;
margin-top: 20px;
cursor: pointer;

`