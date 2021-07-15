import React, { useState } from "react";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import CartContainer from "./CardContainer";
import InputCard from "./Input";

const Container = styled.ul`
  max-width: 815px;
  padding: 0;
  width: 100%;

  @media only screen and (min-width: 550px) {
    margin: 1.5em auto;
    width: 90%;
  }
  @media only screen and (min-width: 950px) {
    width: 75%;
  }
`;

const Item = styled.li`
  list-style-type: none;
  margin: 0 0 8px 0;
  font-size: 1rem;

  @media only screen and (min-width: 550px) {
    font-size: 1.125rem;
  }
  @media only screen and (min-width: 950px) {
    font-size: 1.7rem;
  }
`;

const Question = styled.button`
  padding: 0.8em 1.2em;
  margin-bottom: 1px;
  font-weight: 400;
  position: relative;
  width: 100%;
  border: 0;
  text-align: left;
  background: #303030;
  color: #fff;
  cursor: pointer;
  font-size: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const QuestionText = styled.p`
  margin: 0;
  padding: 0;
`;

const QuestionIcon = styled.div`
  transform: rotate(${(props) => (props.show ? "135deg" : "0")});
  transition: 0.5s cubic-bezier(0.5, 0, 0.1, 1);
`;

const Answer = styled.div`
  max-height: ${(props) => (props.show ? "1200px" : "0")};
  background: #303030;
  transition: max-height 0.5s cubic-bezier(0.5, 0, 0.1, 1);
  overflow: hidden;
`;

const AnswerText = styled.span`
  display: block;
  padding: 1.2em;
  text-align: left;
`;

export default function QuestionsCard({ bgImage, title, subtitle, questions }) {
  const [showAnswer, setShowAnswer] = useState(null);

  return (
    <CartContainer bgImage={bgImage} title={title} subtitle={subtitle}>
      <Container>
        {questions.map((question, i) => (
          <Item key={i}>
            <Question
              onClick={() =>
                showAnswer === i ? setShowAnswer(null) : setShowAnswer(i)
              }
            >
              <QuestionText>{question.question}</QuestionText>
              <QuestionIcon show={showAnswer === i}>
                <AddIcon />
              </QuestionIcon>
            </Question>
            <Answer show={showAnswer === i}>
              <AnswerText>{question.answer}</AnswerText>
            </Answer>
          </Item>
        ))}
      </Container>
      <InputCard />
    </CartContainer>
  );
}
