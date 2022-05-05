import styled from "styled-components";

export const Main = styled.div`
  width: 92%;
  padding: 20px 60px;
  /* height: 500px; */
  /* background-color: red; */
  display: flex;

  img {
    height: auto;
    width: 30%;
    padding: 20px 150px;
    margin-left: 50px;
  }

  div {
    text-align: left;
  }
`;

export const Button = styled.button`
  background-color: black;
  color: white;
  height: 40px;
  /* width: 180px; */
  padding: 10px 30px;
  letter-spacing: 3px;
  font-size: 12px;
  display: block;
  margin-bottom: 10px;
`;

export const Wishlist = styled.button`
  width: 260px;
  height: 40px;
  background-color: whitesmoke;
  display: block;
`;
