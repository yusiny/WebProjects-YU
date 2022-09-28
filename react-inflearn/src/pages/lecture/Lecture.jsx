import React from "react";
import styled from "styled-components";
import { menus } from "../../assets/lecture_menus";
import Accordion from "./Accordion";

export default function Lecture() {
  return (
    <section className="section_lecture">
      <Container>
        <Sidebar>
          {menus.map((accordion) => {
            console.log(accordion);
            return (
              <Accordion
                isToggle={accordion.isToggle}
                title={accordion.title}
                menus={accordion.menus}
              />
            );
          })}
        </Sidebar>

        <LectureBody>
          <div></div>
        </LectureBody>
      </Container>
    </section>
  );
}

const Container = styled.div`
  padding: 2rem 0;
  background: #fff;
  max-width: 1180px;
  margin: 0 auto;
  border: 1px solid red;

  display: flex;
`;

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
`;

const LectureBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const Search = styled.div``;

const Tags = styled.div``;

const Filter = styled.div``;

const LectureWrapper = styled.div``;
