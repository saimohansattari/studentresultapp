import React from "react";
import { PersonImg } from "../../asserts";
import {
  PrimaryMainSection,
  SideNav,
  PrimaryBtn,
  SecondaryBtn,
  Card,
  SecondaryMainSection,
  SubCard,
  SecondaryImg,
  LargeTitleCard,
  TextCard,
  Text,
  LargeText,
  SubCardFlex,
  TextBox,
  ChartCard,
  Text17,
  Text20,
  TextBox_100,
} from "../../Components/CSS-Styled-Commponents";

function StudnetDashboard() {
  return (
    <>
      <PrimaryMainSection>
        <SideNav>
          <SecondaryBtn>Dashboard</SecondaryBtn>
        </SideNav>
        <SecondaryMainSection>
          <SubCardFlex>
            <SecondaryImg src={PersonImg} />
            <TextBox_100>
              <LargeText>Sai Mohan Sattari</LargeText>
              <Text>ID: 319127510043</Text>
              <Text>Computer Science & Engineering</Text>
            </TextBox_100>
          </SubCardFlex>

          <hr />

          <SubCardFlex>
            <TextBox>
              <Text20>
                <i class="fa-solid fa-calendar-check"></i> Total Working Days
              </Text20>
              <Text>
                <i class="fa-regular fa-flag"></i> &nbsp; &nbsp;360 Days
              </Text>
            </TextBox>
            <TextBox>
              <Text20>
                <i class="fa-solid fa-graduation-cap"></i> Number of Presented
              </Text20>
              <Text>
                <i class="fa-regular fa-flag"></i> &nbsp; &nbsp; 250 Days
              </Text>
            </TextBox>
            <TextBox>
              <Text20>
                <i class="fa-solid fa-square-xmark"></i> Number of Absents
              </Text20>
              <Text>
                <i class="fa-regular fa-flag"></i> &nbsp; &nbsp; 50 Days
              </Text>
            </TextBox>
            <TextBox>
              <Text20>
                <i class="fa-solid fa-star"></i> Toatal Percentage
              </Text20>
              <Text>
                <i class="fa-regular fa-flag"></i> &nbsp;&nbsp;75 Percentage
              </Text>
            </TextBox>
          </SubCardFlex>

          <SubCardFlex>
            <ChartCard></ChartCard>
          </SubCardFlex>
        </SecondaryMainSection>
      </PrimaryMainSection>
    </>
  );
}

export default StudnetDashboard;
