import React from "react";
import styled from "styled-components";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const CardDiv = styled.div`
  position: relative;
  /* height: 300px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  margin-bottom: 0;
  max-width: 1100px;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0) 40%,
      rgba(0, 0, 0, 0) 75%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url("${(props) => props.bgImage}") center/cover;
`;

const CardText = styled.div`
  margin: 0;
  width: 100%;
  text-align: center;
  padding: 0;
  height: 100%;
  flex: 0 1 auto;
  z-index: 3;
`;

const CardTextTitle = styled.h1`
  font-size: 1.7rem;
`;
const CardTextSubtitle = styled.h2`
  font-size: 1.1rem;
  font-weight: lighter;
`;

const CardAnimation = styled.div`
  margin: -10% 0 0 0;
  position: relative;
`;

const CardAnimationImage = styled.img`
  position: relative;
  z-index: 2;
  max-width: 100%;
  height: auto;
  border: 0;
`;

const CardAnimationVideo = styled.video`
  width: 100%;
  height: 100%;
  max-width: ${(props) => props.maxWidth};
  position: absolute;
  top: ${(props) => props.top};
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CardAnimationNoVideo = styled.div`
  position: absolute;
  left: 50%;
  bottom: 8%;
  transform: translateX(-50%);
  margin: 0 auto;
  background: #000;
  display: flex;
  align-items: center;
  width: 60%;
  min-width: 15em;
  padding: 0.25em 0.65em;
  border: 2px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 0 2em 0 #000;
  border-radius: 0.75em;
  z-index: 30;

  &::after {
    content: "";
    width: 3em;
    height: 3em;
    outline: 2px solid #000;
    outline-offset: -2px;
    display: block;
    background: url(${(props) => props.gif}) center center no-repeat;
    background-size: 100%;
    flex-shrink: 0;
    flex-grow: 0;
  }
`;

const CardImageNoVideoContainer = styled.div`
  margin: 0 1em 0 0;
  flex-grow: 0;
  flex-shrink: 0;
`;

const InputCardBtn = styled.button`
  font-size: 1rem;
  min-height: 40px;
  flex: 1 1 auto;
  padding: 0 1em;
  cursor: pointer;
  letter-spacing: 0.1px;
  border: none;
  border-radius: 2px;
  color: #fff;
  background-color: #e50914;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const InputCardInput = styled.input`
  height: 48px;
  padding: 10px;
  width: 100%;
  color: #8c8c8c;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Netflix", serif;
`;

export default function Card({
  title,
  subtitle,
  image,
  video,
  top,
  maxWidth,
  gif,
  bgImage,
  input,
}) {
  //TODO: Missed Frequent Questions
  //TODO: Dividir en componentes input, normal, questions, download

  const NormalCard = (
    <React.Fragment>
      <CardAnimationImage src={image} />
      <CardAnimationVideo
        top={top}
        maxWidth={maxWidth}
        src={video}
        type="video/mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </React.Fragment>
  );

  <label for="id_email_hero_fuji" class="placeLabel">
    Email address
  </label>;
  const InputCard = (
    <form>
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <InputCardInput
        type="email"
        name="email"
        tabindex="0"
        autocomplete="email"
        maxlength="50"
        minlength="5"
        placeholder="Email Address"
      />

      <InputCardBtn>
        Get Started
        <ArrowForwardIosIcon style={{ fontSize: 13 }} />
      </InputCardBtn>
    </form>
  );
  return (
    <CardDiv bgImage={bgImage}>
      {/* <CardContainer> */}
      <CardText>
        <CardTextTitle>{title}</CardTextTitle>
        <CardTextSubtitle>{subtitle}</CardTextSubtitle>
      </CardText>
      <CardAnimation>
        {!input ? NormalCard : InputCard}
        {gif && (
          <CardAnimationNoVideo gif={gif}>
            <CardImageNoVideoContainer>
              <img
                style={{ height: "3em" }}
                alt=""
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              />
            </CardImageNoVideoContainer>
            <div style={{ flexGrow: "1", flexShrink: "1", margin: "0.3em 0" }}>
              <div style={{ fontWeight: "600", fontSize: "0.9em" }}>
                Stranger Things
              </div>
              <div
                style={{
                  color: "#0071eb",
                  fontWeight: "400",
                  fontSize: "0.75em",
                }}
              >
                Downloading...
              </div>
            </div>
          </CardAnimationNoVideo>
        )}
      </CardAnimation>
      {/* </CardContainer> */}
    </CardDiv>
  );
}
