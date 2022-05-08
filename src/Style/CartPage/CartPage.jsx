import styled from "styled-components";

export const Cart = styled.div`
  padding: 10px 100px;
`;

export const Input = styled.input`
  width: 300px;
  height: 35px;
  font-size: 16px;
  padding: 5px 10px;
`;

export const ContactDiv = styled.div`
  display: flex;
  justify-content: center;

  div {
    border: 1px solid;
    padding: 20px 180px;
    margin: 0px 10px;
  }
`;

export const Checkout = styled.div`
  margin-left: 80%;

  div {
    display: flex;
  }

  h4 {
    margin-left: 20px;
    margin-bottom: 0px;
  }

  button {
    width: fit-content;
    color: white;
    background-color: black;
    padding: 5px 10px;
  }
`;

export const Item = styled.div`
  display: flex;
  margin-bottom: 50px;

  div {
    margin-left: 80px;
    text-align: left;
  }

  button {
    width: 150px;
    height: 40px;
    border: none;
    margin-right: 30px;
  }
`;

export const ItemDiv = styled.div`
  display: flex;
`;

export const Price = styled.div`
  display: flex;

  p {
    margin-left: 20px;
    margin-bottom: 0px;
  }
`;

export const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px;

  button {
    width: fit-content;
    height: 40px;
    padding: 10px 20px;
    /* margin-top: 2px; */
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: right;
`;
