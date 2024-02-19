import React from "react";
import { PersonImg } from "../../asserts";
import Chart from "../../Components/Chart";
import {
  PrimaryMainSection,
  SideNav,
  SecondaryBtn,
  SecondaryMainSection,
  SecondaryImg,
  Text,
  LargeText,
  SubCardFlex,
  TextBox,
  ChartCard,
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
              <LargeText>
                <i class="fa-solid fa-user-tie"></i> &nbsp;&nbsp;Sai Mohan
                Sattari
              </LargeText>
              <Text>
                <i class="fa-solid fa-id-badge"></i>&nbsp;&nbsp; ID:
                319127510043
              </Text>
              <Text>
                <i class="fa-solid fa-code-branch"></i>&nbsp;&nbsp; Computer
                Science & Engineering
              </Text>
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
            <ChartCard>
              {/* <PieChartStat /> */}
              <Chart />
              {/* <Text>Red : Absent</Text>
              <Text>Red : Absent</Text> */}
            </ChartCard>
            <TextBox_100>
              <Text20>Achivements :</Text20>
              <Text>
                <i class="fa-solid fa-bullseye"></i>&nbsp;&nbsp; Lorem ipsum
                dolor sit amet consectetur adipisicing.
              </Text>
            </TextBox_100>
          </SubCardFlex>
        </SecondaryMainSection>
      </PrimaryMainSection>
    </>
  );
}

export default StudnetDashboard;
