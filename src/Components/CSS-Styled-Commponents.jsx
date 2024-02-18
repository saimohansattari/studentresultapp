import styled from "styled-components";
import { COLORS } from "./Colors";

export const MainSection = styled.div`
  background-color: ${COLORS.PRIMARY_100};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const PrimaryMainSection = styled.div`
  height: 100vh;
  display: flex;
  background-color: #a3cce24b;
`;

export const SecondaryMainSection = styled.div`
  padding: 25px;
  /* width: 100vw; */
  /* background-color: blanchedalmond; */
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
  align-items: center;
  background-color: white;
  border: 1px solid gray;
  border-radius: 25px;
`;

export const SubCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  background-color: aqua;
  text-align: center;
`;

export const SubCardFlex = styled.div`
  padding: 25px 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const TextBox_100 = styled.div`
  /* width: 240px; */
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  /* border: 1px solid #a9a8a8; */
  background-color: white;
  border-radius: 15px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 22px 30px;
  box-shadow: 5px 5px 5px gray;
`;

export const TextBox = styled.div`
  width: 240px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  /* border: 1px solid #a9a8a8; */
  background-color: white;
  border-radius: 15px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 22px 30px;
  /* box-shadow: 2px 4px 5px gray; */
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

export const LargeText = styled.div`
  /* padding: 15px; */
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: x-large;
  font-weight: bold;
`;

export const Text20 = styled.p`
  font-size: 21px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
`;

export const Text = styled.p`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: medium;
  font-weight: bold;
`;

export const PrimaryImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 100px;
  /* background-color: rebeccapurple; */
`;
export const SecondaryImg = styled.img`
  width: 9rem;
  height: 9rem;
  border-radius: 100px;
  background-color: purple;
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

export const SecondaryBtn = styled.button`
  font-size: large;
  font-weight: bold;
  padding: 15px 55px;
  border: none;
  cursor: pointer;
  background-color: white;

  &:hover {
    border-right: 3px solid ${COLORS.PRIMARY_200};
  }
`;

export const SideNav = styled.div`
  padding: 25px 15px;
  width: 200px;
  background-color: whitesmoke;
  border-right: 2px solid ${COLORS.NEUTRAL_2};
`;

export const ChartCard = styled.div`
  width: 350px;
  height: 350px;
  background-color: gold;
  border-radius: 15px;
`;
