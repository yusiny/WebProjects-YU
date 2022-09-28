import React from "react";
import { useState } from "react";
import styled from "styled-components";

export default function Accordion({ isToggle, title, menus }) {
  const [isActive, setActive] = useState(false);

  return (
    <>
      {isToggle == true ? (
        <AccordionWithToggle>
          <div
            className="accordion-header"
            onClick={() => setActive(!isActive)}
          >
            {title}
            <img
              className={
                isActive ? "accordion-button-active" : "accordion-button"
              }
              src="/assets/ic_toggle.svg"
            />
          </div>
          {isActive ? (
            <div className="accordion-body">
              {menus.map((menu) => {
                console.log(menu);
                return <a className="accordion-content">{menu}</a>;
              })}
            </div>
          ) : null}
        </AccordionWithToggle>
      ) : (
        <AccordionDefault>
          <div className="accordion-header"> {title} </div>
        </AccordionDefault>
      )}
    </>
  );
}

const AccordionDefault = styled.div`
  .accordion-header {
    width: 100%;
    border: 1px solid #e4e4e4;
    color: #595959;
    background: #fafafa;
    font-weight: 500;
    display: inline-flex;
    padding: 0.85rem;
    border-radius: 0;
    white-space: nowrap;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const AccordionWithToggle = styled(AccordionDefault)`
  .accordion-header {
    border-top: none;
  }

  .accordion-button {
    width: 18px;
    height: 18px;
    transform: rotate(-90deg);
    transition: transform 0.2s;
  }

  .accordion-button-active {
    transform: rotate(0deg);
    transition: transform 0.2s;
  }

  .accordion-body {
    display: flex;
    flex-direction: column;
  }

  .accordion-content {
    width: 100%;
    display: inline-flex;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #e4e4e4;
    border-right: 1px solid #e4e4e4;
    border-left: 1px solid #e4e4e4;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    font-size: 0.925rem;
  }

  .accordion-content:hover {
    background: #efefef;
  }
`;
