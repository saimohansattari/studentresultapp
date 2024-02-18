import styled from "styled-components";
import { COLORS } from "./Colors";

export const MainSection = styled.div`
  height: 100vh;
  background-color: ${COLORS.PRIMARY_100};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SubSection = styled.div`
  padding: 15px 0px;
  width: fit-content;
  height: fit-content;
  background-color: white;
`;

export const PrimaryCard = styled.div`
  padding: 0px 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  /* width: 40vw; */
  height: 55vh;
  overflow: hidden;
  overflow-y: scroll;
  /* border: 1px solid gray; */

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.div`
  padding: 8px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  background-color: white;
  border: 1px solid gray;
  border-radius: 25px;
`;

export const SubCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  /* background-color: aqua; */
  text-align: center;
`;

export const SPAN = styled.div`
  width: 27rem;
  padding: 8px;
  display: flex;
  justify-content: space-between;
`;

export const TitleCard = styled.div`
  padding: 15px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: large;
  font-weight: bold;
`;

export const PrimaryImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 100px;
  /* background-color: rebeccapurple; */
`;

export const Form = styled.form`
  width: 22rem;
  height: 40vh;
  padding: 15px 35px;
  border: 1px solid gray;
  border-radius: 35px;
  display: flex;
  gap: 25px;
  justify-content: center;
  flex-direction: column;
  background-color: white;
`;

export const FormInput = styled.input`
  padding: 15px;
  font-size: medium;
  border: 1px solid gray;
`;

export const PrimaryBtn = styled.button`
  padding: 15px 25px;
  color: white;
  font-size: large;
  font-weight: bold;
  background-color: ${COLORS.PRIMARY_1000};
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
