import React, { useState } from "react";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import CardWrapper from "./CardWrapper";
import InputCard from "./InputCard";

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

const questions = [
  {
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from COP16,900 to COP38,900 a month. No extra costs, no contracts.",
  },
  {
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
  },
  {
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    question: "What can I watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    question: "Is Netflix good for kids?",
    answer:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  },
];

export default function QuestionsCard({ title }) {
  const [showAnswer, setShowAnswer] = useState(null);

  return (
    <CardWrapper title={title}>
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
        <InputCard inline={1} />
      </Container>
    </CardWrapper>
  );
}
