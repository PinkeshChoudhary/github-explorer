import { styled } from "styled-components";

export const Nav = styled.div`
background-color: lightgrey;
display: flex;
flex-direction: row;
height: 2 rem;
width: 100%;
`;

export const NavList = styled.div`
  display : flex;
  flex-direction : row;
  list-style-type: none;
  gap: 4rem;
  font-size: 1.2rem;
  padding : 1rem;
`;

export const ItemCard = styled.div`
display: flex;
max-width: 350px;
padding: 1rem;
gap: 1rem;
align-items: center;
border: 2px solid gray;
width: 160px;
`;

export const UsersList = styled.div`
display: flex;
flex-wrap: wrap;
padding: 1rem;
gap: 1rem;
justify-content : center;
margin: 1rem;
`;

export const Usersctnr = styled.div`
display: flex;
flex-wrap: wrap;
padding: 1rem;
gap: 1rem;
justify-content : center;
`;

export const gist= styled.div`
display: flex;
gap: 1rem;
background-color: #8d868652;
`;