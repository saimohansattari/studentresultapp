import React from "react";
import {
  Card,
  Form,
  FormInput,
  MainSection,
  PrimaryBtn,
  PrimaryCard,
  PrimaryImg,
  SubCard,
  SubSection,
  SPAN,
  TitleCard,
} from "../../Components/CSS-Styled-Commponents";
import { PersonImg } from "../../asserts";

function Home() {
  return (
    <>
      <MainSection>
        <SubSection>
          <PrimaryCard>
            <TitleCard>Highest Marks</TitleCard>
            <Card>
              <PrimaryImg src={PersonImg} />
              <SPAN>
                <SubCard>
                  <h3>Sai Mohan Sattari</h3>
                  <p>Sai Mohan Sattari</p>
                </SubCard>
                <SubCard>
                  <h3>1</h3>
                  <p>Total Marks</p>
                </SubCard>
              </SPAN>
            </Card>
            <Card>
              <PrimaryImg src={PersonImg} />
              <SPAN>
                <SubCard>
                  <h3>Sai Mohan Sattari</h3>
                  <p>Sai Mohan Sattari</p>
                </SubCard>
                <SubCard>
                  <h3>1</h3>
                  <p>Total Marks</p>
                </SubCard>
              </SPAN>
            </Card>
            <Card>
              <PrimaryImg src={PersonImg} />
              <SPAN>
                <SubCard>
                  <h3>Sai Mohan Sattari</h3>
                  <p>Sai Mohan Sattari</p>
                </SubCard>
                <SubCard>
                  <h3>1</h3>
                  <p>Total Marks</p>
                </SubCard>
              </SPAN>
            </Card>
            <Card>
              <PrimaryImg src={PersonImg} />
              <SPAN>
                <SubCard>
                  <h3>Sai Mohan Sattari</h3>
                  <p>Sai Mohan Sattari</p>
                </SubCard>
                <SubCard>
                  <h3>1</h3>
                  <p>Total Marks</p>
                </SubCard>
              </SPAN>
            </Card>
            <Card>
              <PrimaryImg src={PersonImg} />
              <SPAN>
                <SubCard>
                  <h3>Sai Mohan Sattari</h3>
                  <p>Sai Mohan Sattari</p>
                </SubCard>
                <SubCard>
                  <h3>1</h3>
                  <p>Total Marks</p>
                </SubCard>
              </SPAN>
            </Card>
          </PrimaryCard>
        </SubSection>
        <Form>
          <FormInput placeholder="Enter code / Registerd ID" />
          <PrimaryBtn>Submit</PrimaryBtn>
          {/* <FormInput type="button"></FormInput> */}
        </Form>
      </MainSection>
    </>
  );
}

export default Home;
